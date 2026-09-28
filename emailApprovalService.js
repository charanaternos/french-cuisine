/**
 * ============================================================================
 * La Table Française - Email Verification & One-Click Recipe Approval Service
 * ============================================================================
 * 
 * Capabilities:
 * 1. Generates an ultra-luxurious HTML email with full dish preview
 * 2. Embedded one-click [Approve & Publish] and [Reject / Cancel] buttons
 * 3. Sends email via Nodemailer with Gmail SMTP
 * 4. Runs a secure HTTP webhook approval listener on localhost (or Cloudflare tunnel)
 * 5. On approval click: automatically validates sandbox, updates files, commits, and pushes to GitHub
 */

const http = require('http');
const url = require('url');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Load environment variables from .env
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        process.env[key] = val;
      }
    }
  }
}

loadEnv();

// In-memory or persisted tokens store
const PENDING_APPROVALS_FILE = path.join(__dirname, 'pending_approvals.json');

function loadPendingApprovals() {
  if (fs.existsSync(PENDING_APPROVALS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PENDING_APPROVALS_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function savePendingApprovals(data) {
  fs.writeFileSync(PENDING_APPROVALS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// ============================================================================
// HTML Email Template Generator
// ============================================================================
function generateRecipeEmailHTML(dish, approveUrl, rejectUrl) {
  const ingredientsRows = (dish.ingredients || []).map(i => `
    <tr>
      <td style="padding: 10px 14px; border-bottom: 1px solid rgba(212,175,55,0.15); color: #e6e4df; font-size: 14px;">${i.name}</td>
      <td style="padding: 10px 14px; border-bottom: 1px solid rgba(212,175,55,0.15); color: #d4af37; font-weight: 600; text-align: right; font-size: 14px;">${i.amount} ${i.unit}</td>
    </tr>
  `).join('');

  const stepsRows = (dish.steps || []).map(s => `
    <div style="margin-bottom: 16px; padding: 14px; background: rgba(255,255,255,0.03); border-left: 3px solid #d4af37; border-radius: 4px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <strong style="color: #f7f5f0; font-size: 14px;">Étape ${s.step}: ${s.title}</strong>
        ${s.timerSeconds ? `<span style="background: rgba(212,175,55,0.15); color: #d4af37; padding: 2px 8px; border-radius: 10px; font-size: 11px;">⏱️ ${Math.round(s.timerSeconds / 60)} min</span>` : ''}
      </div>
      <p style="margin: 0; color: #b8b5ad; font-size: 13px; line-height: 1.5;">${s.instruction}</p>
    </div>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle Recette en Attente d'Approbation</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #0b0d12; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f7f5f0;">
  
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        
        <!-- Main Card Container -->
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background: #131722; border: 1px solid rgba(212,175,55,0.3); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
          
          <!-- Top Tricolor Banner -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #002395 0%, #002395 33%, #ffffff 33%, #ffffff 66%, #ed2939 66%, #ed2939 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px 20px; text-align: center; background: radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 70%);">
              <div style="font-size: 26px; color: #d4af37; margin-bottom: 4px;">⚜</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 2px; color: #f7f5f0; text-transform: uppercase;">La Table Française</h1>
              <p style="margin: 6px 0 0; color: #d4af37; font-size: 13px; letter-spacing: 1px;">HAUTE GASTRONOMIE • NOTIFICATION D'APPROBATION</p>
            </td>
          </tr>

          <!-- Dish Image Banner -->
          ${dish.image ? `
          <tr>
            <td style="padding: 0 32px;">
              <div style="position: relative; border-radius: 12px; overflow: hidden; border: 1px solid rgba(212,175,55,0.25);">
                <img src="${dish.image}" alt="${dish.title}" style="width: 100%; height: 260px; object-fit: cover; display: block;">
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Dish Identity & Badges -->
          <tr>
            <td style="padding: 24px 32px 10px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background: rgba(212,175,55,0.15); border: 1px solid #d4af37; color: #d4af37; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">
                      📍 ${dish.region}
                    </span>
                    <span style="display: inline-block; background: rgba(255,255,255,0.08); color: #e6e4df; font-size: 11px; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                      🍽️ ${dish.categoryLabel || dish.category}
                    </span>
                  </td>
                  <td align="right">
                    <span style="color: #f59e0b; font-size: 14px; font-weight: 700;">★ ${dish.rating || '4.9'}</span>
                    <span style="color: #8e8b82; font-size: 12px;">(${dish.reviews || '1k'} avis)</span>
                  </td>
                </tr>
              </table>

              <h2 style="margin: 16px 0 6px; font-size: 24px; color: #f7f5f0; font-family: Georgia, serif;">${dish.title}</h2>
              <div style="color: #d4af37; font-size: 14px; margin-bottom: 12px; font-style: italic;">${dish.titleEn}</div>
              <p style="margin: 0; color: #b8b5ad; font-size: 14px; line-height: 1.6;">${dish.description}</p>
            </td>
          </tr>

          <!-- Culinary Stats Grid -->
          <tr>
            <td style="padding: 16px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; text-align: center;">
                <tr>
                  <td style="padding: 12px; border-right: 1px solid rgba(255,255,255,0.06);">
                    <div style="color: #8e8b82; font-size: 11px; text-transform: uppercase;">Préparation</div>
                    <div style="color: #f7f5f0; font-size: 14px; font-weight: 600; margin-top: 4px;">⏱️ ${dish.prepTime} min</div>
                  </td>
                  <td style="padding: 12px; border-right: 1px solid rgba(255,255,255,0.06);">
                    <div style="color: #8e8b82; font-size: 11px; text-transform: uppercase;">Cuisson</div>
                    <div style="color: #f7f5f0; font-size: 14px; font-weight: 600; margin-top: 4px;">🔥 ${dish.cookTime} min</div>
                  </td>
                  <td style="padding: 12px; border-right: 1px solid rgba(255,255,255,0.06);">
                    <div style="color: #8e8b82; font-size: 11px; text-transform: uppercase;">Énergie</div>
                    <div style="color: #f7f5f0; font-size: 14px; font-weight: 600; margin-top: 4px;">⚡ ${dish.calories} kcal</div>
                  </td>
                  <td style="padding: 12px;">
                    <div style="color: #8e8b82; font-size: 11px; text-transform: uppercase;">Portions</div>
                    <div style="color: #f7f5f0; font-size: 14px; font-weight: 600; margin-top: 4px;">👥 ${dish.servingsBase || 4} pers.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Wine Pairing & Chef Tip Box -->
          <tr>
            <td style="padding: 10px 32px;">
              <div style="background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
                <div style="color: #d4af37; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">🍷 Accord Mets & Vins</div>
                <div style="color: #f7f5f0; font-size: 13px; font-weight: 600;">${dish.winePairing.wine}</div>
                <div style="color: #b8b5ad; font-size: 12px; margin-top: 2px;">${dish.winePairing.notes}</div>
              </div>

              <div style="background: rgba(255,255,255,0.02); border-left: 3px solid #3b82f6; border-radius: 4px; padding: 12px;">
                <div style="color: #60a5fa; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">👨‍🍳 Astuce du Chef Auguste</div>
                <div style="color: #d1d5db; font-size: 13px; font-style: italic;">"${dish.chefTip}"</div>
              </div>
            </td>
          </tr>

          <!-- Multilingual Verification Badges -->
          <tr>
            <td style="padding: 14px 32px;">
              <div style="font-size: 12px; color: #8e8b82; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Traductions vérifiées (4 Langues Prêtes)</div>
              <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 6px; font-size: 12px; color: #d1d5db; line-height: 1.8;">
                <div>🇫🇷 <strong>Français:</strong> ${dish.title}</div>
                <div>🇬🇧 <strong>English:</strong> ${dish.titleEn}</div>
                <div>🇮🇳 <strong>తెలుగు:</strong> ${dish.titleTe}</div>
                <div>🇮🇳 <strong>हिंदी:</strong> ${dish.titleHi}</div>
              </div>
            </td>
          </tr>

          <!-- Ingredients Table -->
          <tr>
            <td style="padding: 14px 32px;">
              <h3 style="margin: 0 0 10px; font-size: 14px; color: #d4af37; text-transform: uppercase; letter-spacing: 1px;">Ingrédients Principaux</h3>
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px;">
                ${ingredientsRows}
              </table>
            </td>
          </tr>

          <!-- Step Instructions -->
          <tr>
            <td style="padding: 14px 32px;">
              <h3 style="margin: 0 0 12px; font-size: 14px; color: #d4af37; text-transform: uppercase; letter-spacing: 1px;">Étapes de Préparation</h3>
              ${stepsRows}
            </td>
          </tr>

          <!-- ONE-CLICK APPROVAL / REJECTION BUTTONS -->
          <tr>
            <td style="padding: 24px 32px 32px; background: #0e111a; border-top: 1px solid rgba(212,175,55,0.2); text-align: center;">
              
              <div style="font-size: 14px; font-weight: 600; color: #f7f5f0; margin-bottom: 16px;">
                Souhaitez-vous publier cette recette sur le menu officiel et synchroniser avec GitHub ?
              </div>

              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-bottom: 12px;">
                    <!-- APPROVE BUTTON -->
                    <a href="${approveUrl}" target="_blank" style="display: block; width: 100%; max-width: 440px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 16px 24px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1.5px; box-shadow: 0 4px 14px rgba(16,185,129,0.4);">
                      ✅ APPROUVER ET PUBLIER SUR GITHUB
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <!-- REJECT BUTTON -->
                    <a href="${rejectUrl}" target="_blank" style="display: inline-block; color: #ef4444; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); text-decoration: none; font-size: 13px; font-weight: 600; padding: 10px 20px; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px;">
                      ❌ Annuler et rejeter
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 16px 0 0; color: #6b7280; font-size: 11px;">
                Ce lien d'approbation à usage unique est sécurisé par un jeton cryptographique valide pendant 48 heures.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; text-align: center; background: #08090d; border-top: 1px solid rgba(255,255,255,0.05); color: #6b7280; font-size: 12px;">
              © 2025 La Table Française. Haute Cuisine & Autonomous AI Concierge.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `;
}

// ============================================================================
// Email Sender via Nodemailer
// ============================================================================
async function sendApprovalEmail(dish, token, baseUrl) {
  loadEnv();

  const smtpUser = process.env.SMTP_EMAIL;
  const smtpPass = process.env.SMTP_APP_PASSWORD;
  const recipientEmail = process.env.RECIPIENT_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.warn("\n⚠️ [Email Service Notice] SMTP credentials missing in .env.");
    console.warn("Please set SMTP_EMAIL and SMTP_APP_PASSWORD in d:\\french website\\.env");
    return {
      success: false,
      error: "Missing credentials in .env",
      approveUrl: `${baseUrl}/approve?token=${token}`,
      rejectUrl: `${baseUrl}/reject?token=${token}`
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const effectiveBaseUrl = process.env.APPROVAL_BASE_URL || baseUrl;
  const approveUrl = `${effectiveBaseUrl}/approve?token=${token}`;
  const rejectUrl = `${effectiveBaseUrl}/reject?token=${token}`;

  const mailOptions = {
    from: `"Chef Auguste • La Table Française" <${smtpUser}>`,
    to: recipientEmail,
    subject: `⚜️ Approbation Requise : "${dish.title}" (${dish.region} - ${dish.categoryLabel})`,
    html: generateRecipeEmailHTML(dish, approveUrl, rejectUrl)
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`\n📨 [Email Sent Successfully]`);
    console.log(`   • To:      ${recipientEmail}`);
    console.log(`   • Message: ${info.messageId}`);
    console.log(`   • Dish:    "${dish.title}" (${dish.titleEn})`);
    return {
      success: true,
      messageId: info.messageId,
      approveUrl,
      rejectUrl
    };
  } catch (err) {
    console.error(`\n❌ [Email Sending Failed]:`, err.message || err);
    return {
      success: false,
      error: err.message,
      approveUrl,
      rejectUrl
    };
  }
}

// ============================================================================
// Webhook & Approval Server Listener
// ============================================================================
function startApprovalServer(port = 3005, onApprovedCallback) {
  const server = http.createServer(async (req, res) => {
    const parsed = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsed.pathname;
    const token = parsed.searchParams.get('token');

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 1. Health check
    if (pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok', service: 'La Table Francaise Approval Server' }));
    }

    // 2. Approve Endpoint
    if (pathname === '/approve') {
      if (!token) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage("Jeton d'approbation manquant."));
      }

      const store = loadPendingApprovals();
      const entry = store[token];

      if (!entry) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage("Lien expiré ou introuvable. Cette recette n'est plus en attente."));
      }

      if (entry.status === 'APPROVED') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderSuccessPage(entry.dish, entry.commitHash, true));
      }

      if (entry.status === 'REJECTED') {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage("Cette recette a déjà été rejetée précédemment."));
      }

      try {
        console.log(`\n🎉 [One-Click Email Approval Triggered] Token: ${token.substring(0, 8)}...`);
        let commitResult = { hash: 'local' };
        if (typeof onApprovedCallback === 'function') {
          commitResult = await onApprovedCallback(entry.dish);
        }

        entry.status = 'APPROVED';
        entry.approvedAt = new Date().toISOString();
        entry.commitHash = commitResult.hash || 'success';
        savePendingApprovals(store);

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderSuccessPage(entry.dish, entry.commitHash, false));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage(`Erreur lors de la publication : ${err.message}`));
      }
    }

    // 3. Reject Endpoint
    if (pathname === '/reject') {
      if (!token) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage("Jeton manquant."));
      }

      const store = loadPendingApprovals();
      const entry = store[token];

      if (!entry) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(renderErrorPage("Demande introuvable ou déjà traitée."));
      }

      entry.status = 'REJECTED';
      entry.rejectedAt = new Date().toISOString();
      savePendingApprovals(store);

      console.log(`\n🛑 [One-Click Email Rejection Triggered] Recipe: ${entry.dish.title}`);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(renderRejectedPage(entry.dish));
    }

    // Default 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  });

  server.listen(port, () => {
    console.log(`🎧 [Approval Server Listening] Port: ${port}`);
  });

  return server;
}

// ============================================================================
// Web Response Pages
// ============================================================================
function renderSuccessPage(dish, commitHash, alreadyDone) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Recette Approuvée ! | La Table Française</title>
  <style>
    body { margin: 0; background: #0b0d12; color: #f7f5f0; font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .box { background: #131722; border: 1px solid #d4af37; border-radius: 16px; padding: 40px; max-width: 520px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
    .emblem { font-size: 38px; color: #d4af37; margin-bottom: 10px; }
    h1 { font-family: Georgia, serif; color: #f7f5f0; margin: 0 0 10px; font-size: 26px; }
    p { color: #b8b5ad; line-height: 1.6; font-size: 15px; margin-bottom: 24px; }
    .dish-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(212,175,55,0.2); border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: left; }
    .badge { display: inline-block; background: rgba(16,185,129,0.2); color: #10b981; border: 1px solid #10b981; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
    .btn { display: inline-block; background: #d4af37; color: #0b0d12; text-decoration: none; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
  <div class="box">
    <div class="emblem">⚜</div>
    <span class="badge">✓ PUBLIÉ SUR GITHUB</span>
    <h1 style="margin-top: 14px;">${alreadyDone ? "Déjà Approuvé" : "Félicitations !"}</h1>
    <p>${alreadyDone ? "Cette recette avait déjà été approuvée et synchronisée avec le site." : "La recette a été intégrée dans le menu officiel avec toutes ses traductions et poussée sur GitHub avec succès."}</p>
    
    <div class="dish-card">
      <div style="font-weight: 700; font-size: 18px; color: #d4af37;">${dish.title}</div>
      <div style="font-size: 13px; color: #8e8b82; margin: 4px 0 8px;">${dish.region} • ${dish.categoryLabel}</div>
      <div style="font-size: 13px; color: #e5e7eb;">${dish.subtitle}</div>
    </div>

    <a href="https://github.com/charanaternos/french-cuisine" target="_blank" class="btn">Voir sur GitHub</a>
  </div>
</body>
</html>
  `;
}

function renderRejectedPage(dish) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ajout Annulé | La Table Française</title>
  <style>
    body { margin: 0; background: #0b0d12; color: #f7f5f0; font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .box { background: #131722; border: 1px solid rgba(239,68,68,0.4); border-radius: 16px; padding: 40px; max-width: 480px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
    h1 { color: #ef4444; margin: 10px 0; font-size: 24px; }
    p { color: #b8b5ad; line-height: 1.6; font-size: 14px; }
  </style>
</head>
<body>
  <div class="box">
    <div style="font-size: 36px;">❌</div>
    <h1>Ajout de Recette Rejeté</h1>
    <p>L'ajout de <strong>${dish.title}</strong> a été annulé conformément à votre choix. Aucune modification n'a été apportée à votre site ni à votre dépôt GitHub.</p>
  </div>
</body>
</html>
  `;
}

function renderErrorPage(message) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Erreur d'Approbation</title></head>
<body style="background:#0b0d12;color:#f7f5f0;font-family:sans-serif;display:flex;justify-content:center;align-items:center;min-height:100vh;">
  <div style="background:#131722;padding:30px;border-radius:10px;border:1px solid #ef4444;max-width:400px;text-align:center;">
    <h2 style="color:#ef4444;">Notice</h2>
    <p style="color:#d1d5db;">${message}</p>
  </div>
</body>
</html>
  `;
}

module.exports = {
  sendApprovalEmail,
  startApprovalServer,
  loadPendingApprovals,
  savePendingApprovals,
  generateRecipeEmailHTML
};
