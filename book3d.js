/**
 * ============================================================================
 * La Table Française - 3D Interactive Opening Recipe Book
 * Powered by Three.js with Real-time Lighting, Shadows & Canvas Textures
 * ============================================================================
 */

(function () {
  'use strict';

  // DOM elements
  const stage = document.getElementById('book-3d-stage');
  const canvasWrap = document.getElementById('book-3d-canvas-wrap');
  const canvas = document.getElementById('book-3d-canvas');
  const bgVideo = document.getElementById('book-3d-bg-video');
  const btnOpen = document.getElementById('btn-open-3d-book');
  const btnEnter = document.getElementById('btn-enter-recipe-book');
  const btnClose = document.getElementById('btn-close-3d-book');
  const btnSkip = document.getElementById('btn-skip-3d');
  const hintText = document.getElementById('book-3d-hint');
  const burstOverlay = document.getElementById('book-3d-burst');
  const reopenBtn = document.getElementById('reopen-3d-book-btn');

  if (!stage || !canvas) return;

  // State
  let renderer, scene, camera;
  let bookGroup, coverPivot, pagePivot1, pagePivot2;
  let dustParticles;
  let isBookOpen = false;
  let isAnimating = false;
  let mouseX = 0, mouseY = 0;
  let targetRotX = 0, targetRotY = 0;
  let isDragging = false;
  let prevPointerX = 0, prevPointerY = 0;
  let animationProgress = 0; // 0 = closed, 1 = open
  let animationTarget = 0;

  // Check WebGL support
  function hasWebGL() {
    try {
      const glCanvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (glCanvas.getContext('webgl') || glCanvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  if (!hasWebGL() || typeof THREE === 'undefined') {
    // If WebGL is not available, close stage immediately
    stage.classList.add('book-3d-hidden');
    return;
  }

  // --------------------------------------------------------------------------
  // Canvas Texture Generators
  // --------------------------------------------------------------------------

  function createCoverTexture() {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1400;
    const ctx = c.getContext('2d');

    // Deep Parisian navy leather background
    const bgGrad = ctx.createRadialGradient(512, 700, 100, 512, 700, 800);
    bgGrad.addColorStop(0, '#0c1b38');
    bgGrad.addColorStop(0.7, '#071224');
    bgGrad.addColorStop(1, '#040914');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 1400);

    // Subtle leather grain texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
    for (let i = 0; i < 18000; i++) {
      const gx = Math.random() * 1024;
      const gy = Math.random() * 1400;
      ctx.fillRect(gx, gy, 1.5, 1.5);
    }
    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    for (let i = 0; i < 15000; i++) {
      const gx = Math.random() * 1024;
      const gy = Math.random() * 1400;
      ctx.fillRect(gx, gy, 2, 2);
    }

    // Outer Gilded Filigree Borders
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 6;
    ctx.strokeRect(50, 50, 924, 1300);

    ctx.strokeStyle = '#ffd875';
    ctx.lineWidth = 2;
    ctx.strokeRect(65, 65, 894, 1270);

    // Ornate Corners
    drawCornerOrnaments(ctx, 50, 50, 924, 1300);

    // French Tricolor Header Ribbon at top
    const triWidth = 120;
    const triHeight = 8;
    const triX = 512 - triWidth / 2;
    const triY = 110;
    ctx.fillStyle = '#002654'; // Blue
    ctx.fillRect(triX, triY, triWidth / 3, triHeight);
    ctx.fillStyle = '#ffffff'; // White
    ctx.fillRect(triX + triWidth / 3, triY, triWidth / 3, triHeight);
    ctx.fillStyle = '#ed2939'; // Red
    ctx.fillRect(triX + (triWidth * 2) / 3, triY, triWidth / 3, triHeight);

    // Top Emblem: Chef Hat with Sunburst
    drawChefHatEmblem(ctx, 512, 280);

    // Main Gold Foil Titles
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Sub-header
    ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '5px';
    ctx.fillStyle = '#e8c264';
    ctx.fillText('RÉPUBLIQUE DE LA GASTRONOMIE', 512, 420);

    // Grand Title
    const goldGrad = ctx.createLinearGradient(200, 480, 824, 700);
    goldGrad.addColorStop(0, '#fff1b8');
    goldGrad.addColorStop(0.3, '#d4af37');
    goldGrad.addColorStop(0.6, '#ffd875');
    goldGrad.addColorStop(1, '#aa7c11');

    ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;

    ctx.font = 'italic 700 76px "Playfair Display", Georgia, serif';
    ctx.fillStyle = goldGrad;
    ctx.fillText('Le Grand Livre', 512, 530);

    ctx.font = 'italic 400 36px "Playfair Display", Georgia, serif';
    ctx.fillStyle = '#f5e4b5';
    ctx.fillText('de la', 512, 605);

    ctx.font = '700 82px "Playfair Display", Georgia, serif';
    ctx.fillStyle = goldGrad;
    ctx.fillText('Cuisine Française', 512, 690);

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Divider Line with Diamond
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(312, 770);
    ctx.lineTo(470, 770);
    ctx.moveTo(554, 770);
    ctx.lineTo(712, 770);
    ctx.stroke();

    ctx.fillStyle = '#ffd875';
    ctx.beginPath();
    ctx.arc(512, 770, 6, 0, Math.PI * 2);
    ctx.fill();

    // Secondary Title
    ctx.font = '700 34px "Playfair Display", Georgia, serif';
    ctx.letterSpacing = '3px';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('LA TABLE FRANÇAISE', 512, 850);

    ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('RECETTES AUTHENTIQUES & TERROIR', 512, 910);

    // Bottom Crest: Laurel Wreath & Date
    drawLaurelWreath(ctx, 512, 1120);

    ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillStyle = '#e8c264';
    ctx.fillText('PARIS • DEPUIS 1889', 512, 1240);

    return new THREE.CanvasTexture(c);
  }

  function createInsideLeftTexture() {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1400;
    const ctx = c.getContext('2d');

    // Antique French Parchment background
    const bgGrad = ctx.createRadialGradient(512, 700, 150, 512, 700, 850);
    bgGrad.addColorStop(0, '#fbf8f0');
    bgGrad.addColorStop(0.7, '#f4ece0');
    bgGrad.addColorStop(1, '#e3d2ba');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 1400);

    // Subtle paper fiber specks
    ctx.fillStyle = 'rgba(120, 90, 40, 0.04)';
    for (let i = 0; i < 9000; i++) {
      ctx.fillRect(Math.random() * 1024, Math.random() * 1400, 1.5, 1.5);
    }

    // Elegant inner frame
    ctx.strokeStyle = '#c49a45';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 904, 1280);

    ctx.strokeStyle = '#dfc488';
    ctx.lineWidth = 1;
    ctx.strokeRect(72, 72, 880, 1256);

    // Page number
    ctx.font = 'italic 18px "Playfair Display", serif';
    ctx.fillStyle = '#7a6035';
    ctx.textAlign = 'center';
    ctx.fillText('— Page I —', 512, 115);

    // Top calligraphy ornament
    ctx.font = 'bold 36px "Playfair Display", serif';
    ctx.fillStyle = '#1c2833';
    ctx.fillText('L’Art de Recevoir', 512, 230);

    ctx.font = 'italic 20px "Playfair Display", serif';
    ctx.fillStyle = '#b58928';
    ctx.fillText('Tradition, Passion & Excellence', 512, 280);

    // Decorative illustration line
    ctx.strokeStyle = '#b58928';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(350, 320);
    ctx.lineTo(674, 320);
    ctx.stroke();

    // Escoffier Quote block
    ctx.font = 'italic 34px "Playfair Display", Georgia, serif';
    ctx.fillStyle = '#223042';
    const quoteLines = [
      '« La bonne cuisine',
      'est la base du véritable',
      'bonheur. »'
    ];
    let qy = 440;
    quoteLines.forEach(line => {
      ctx.fillText(line, 512, qy);
      qy += 52;
    });

    ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#b58928';
    ctx.fillText('— AUGUSTE ESCOFFIER', 512, 630);

    // Text paragraph
    ctx.font = '22px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#424f60';
    const bodyLines = [
      'Bienvenue dans les pages sacrées de notre',
      'terroir. De la Provence ensoleillée aux vignobles',
      'de Bourgogne, chaque recette célèbre le goût,',
      'la patience et le partage des saveurs pures.'
    ];
    let by = 740;
    bodyLines.forEach(line => {
      ctx.fillText(line, 512, by);
      by += 44;
    });

    // French tricolor stamp at bottom
    drawFrenchStamp(ctx, 512, 1140);

    return new THREE.CanvasTexture(c);
  }

  function createInsideRightTexture() {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 1400;
    const ctx = c.getContext('2d');

    // Parchment background matching left page
    const bgGrad = ctx.createRadialGradient(512, 700, 150, 512, 700, 850);
    bgGrad.addColorStop(0, '#fbf8f0');
    bgGrad.addColorStop(0.7, '#f4ece0');
    bgGrad.addColorStop(1, '#e3d2ba');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 1400);

    // Paper fibers
    ctx.fillStyle = 'rgba(120, 90, 40, 0.04)';
    for (let i = 0; i < 9000; i++) {
      ctx.fillRect(Math.random() * 1024, Math.random() * 1400, 1.5, 1.5);
    }

    // Frame
    ctx.strokeStyle = '#c49a45';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 904, 1280);

    ctx.strokeStyle = '#dfc488';
    ctx.lineWidth = 1;
    ctx.strokeRect(72, 72, 880, 1256);

    // Page number
    ctx.font = 'italic 18px "Playfair Display", serif';
    ctx.fillStyle = '#7a6035';
    ctx.textAlign = 'center';
    ctx.fillText('— Page II —', 512, 115);

    // Header
    ctx.font = 'bold 36px "Playfair Display", serif';
    ctx.fillStyle = '#1c2833';
    ctx.fillText('Trésors du Terroir', 512, 230);

    ctx.font = 'italic 20px "Playfair Display", serif';
    ctx.fillStyle = '#b58928';
    ctx.fillText('Les Classiques Inoubliables', 512, 280);

    // Divider
    ctx.strokeStyle = '#b58928';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(350, 320);
    ctx.lineTo(674, 320);
    ctx.stroke();

    // Featured Recipe List Items
    const items = [
      { name: 'Boeuf Bourguignon', reg: 'Bourgogne', icon: '🍷' },
      { name: 'Ratatouille Provençale', reg: 'Provence', icon: '🌿' },
      { name: 'Coq au Vin Traditionnel', reg: 'Champagne', icon: '🍗' },
      { name: 'Soufflé au Chocolat Noir', reg: 'Paris', icon: '🍫' },
      { name: 'Croissants Pur Beurre', reg: 'Normandie', icon: '🥐' },
      { name: 'Crème Brûlée à la Vanille', reg: 'Île-de-France', icon: '✨' }
    ];

    let iy = 420;
    items.forEach(it => {
      ctx.textAlign = 'left';
      ctx.font = '28px "Playfair Display", serif';
      ctx.fillStyle = '#1e293b';
      ctx.fillText(`${it.icon}  ${it.name}`, 140, iy);

      ctx.textAlign = 'right';
      ctx.font = 'italic 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#b58928';
      ctx.fillText(it.reg, 880, iy);

      // dotted line between
      ctx.strokeStyle = 'rgba(180, 140, 50, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(140, iy + 25);
      ctx.lineTo(880, iy + 25);
      ctx.stroke();
      ctx.setLineDash([]);

      iy += 80;
    });

    // Calligraphy Invitation
    ctx.textAlign = 'center';
    ctx.font = 'bold 42px "Caveat", cursive';
    ctx.fillStyle = '#b58928';
    ctx.fillText('Bon Appétit & Bienvenue !', 512, 1010);

    ctx.font = '18px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Cliquez ci-dessous pour entrer dans le livre de cuisine', 512, 1070);

    return new THREE.CanvasTexture(c);
  }

  function createPageEdgesTexture() {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext('2d');

    // Gilded antique book edges
    ctx.fillStyle = '#d9b252';
    ctx.fillRect(0, 0, 512, 512);

    // Fine lines representing stacked paper sheets
    ctx.strokeStyle = 'rgba(120, 85, 20, 0.4)';
    ctx.lineWidth = 1;
    for (let y = 0; y < 512; y += 3) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }
    return new THREE.CanvasTexture(c);
  }

  // --------------------------------------------------------------------------
  // Helper Drawing Functions
  // --------------------------------------------------------------------------

  function drawCornerOrnaments(ctx, x, y, w, h) {
    const size = 60;
    const corners = [
      { cx: x + 15, cy: y + 15, dx: 1, dy: 1 },
      { cx: x + w - 15, cy: y + 15, dx: -1, dy: 1 },
      { cx: x + 15, cy: y + h - 15, dx: 1, dy: -1 },
      { cx: x + w - 15, cy: y + h - 15, dx: -1, dy: -1 }
    ];
    corners.forEach(c => {
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(c.cx, c.cy + c.dy * size);
      ctx.lineTo(c.cx, c.cy);
      ctx.lineTo(c.cx + c.dx * size, c.cy);
      ctx.stroke();

      ctx.fillStyle = '#ffd875';
      ctx.beginPath();
      ctx.arc(c.cx + c.dx * 12, c.cy + c.dy * 12, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawChefHatEmblem(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);

    // Glowing sunburst rays
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1.5;
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 12) {
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * 55, Math.sin(angle) * 55);
      ctx.lineTo(Math.cos(angle) * 85, Math.sin(angle) * 85);
      ctx.stroke();
    }

    // Outer circle
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.stroke();

    // Chef Hat path
    ctx.strokeStyle = '#ffe894';
    ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    // Hat brim
    ctx.rect(-24, 12, 48, 10);
    // Puffs
    ctx.moveTo(-24, 12);
    ctx.bezierCurveTo(-35, -5, -28, -25, -12, -22);
    ctx.bezierCurveTo(-10, -38, 10, -38, 12, -22);
    ctx.bezierCurveTo(28, -25, 35, -5, 24, 12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  function drawLaurelWreath(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;

    // Left branch
    ctx.beginPath();
    ctx.arc(-20, 0, 50, Math.PI * 0.4, Math.PI * 1.5);
    ctx.stroke();

    // Right branch
    ctx.beginPath();
    ctx.arc(20, 0, 50, -Math.PI * 0.5, Math.PI * 0.6);
    ctx.stroke();

    // Center star
    ctx.fillStyle = '#ffd875';
    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawFrenchStamp(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = '#c49a45';
    ctx.lineWidth = 2;
    ctx.strokeRect(-90, -35, 180, 70);

    ctx.font = '700 14px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '3px';
    ctx.fillStyle = '#7a6035';
    ctx.textAlign = 'center';
    ctx.fillText('GASTRONOMIE FRANÇAISE', 0, -8);
    ctx.font = 'italic 14px "Playfair Display", serif';
    ctx.fillText('— Terroir Certifié —', 0, 16);

    ctx.restore();
  }

  // --------------------------------------------------------------------------
  // Three.js Scene Setup & Geometry
  // --------------------------------------------------------------------------

  function initThreeScene() {
    const width = canvasWrap.clientWidth || window.innerWidth;
    const height = canvasWrap.clientHeight || window.innerHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 7.2);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff6ea, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.95);
    dirLight1.position.set(4, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffdf88, 0.45);
    dirLight2.position.set(-4, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xffd875, 0.8, 12);
    pointLight.position.set(0, 1, 3);
    scene.add(pointLight);

    // Book Group
    bookGroup = new THREE.Group();
    scene.add(bookGroup);

    // Dimensions
    const bookWidth = 2.7;
    const bookHeight = 3.7;
    const bookThickness = 0.32;
    const coverThickness = 0.045;

    // Textures
    const coverTex = createCoverTexture();
    const insideLeftTex = createInsideLeftTexture();
    const insideRightTex = createInsideRightTexture();
    const edgesTex = createPageEdgesTexture();

    // 1) Back Cover
    const backCoverMat = new THREE.MeshStandardMaterial({
      color: 0x071224,
      roughness: 0.5,
      metalness: 0.15
    });
    const backCoverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(bookWidth, bookHeight, coverThickness),
      backCoverMat
    );
    backCoverMesh.position.set(0, 0, -bookThickness / 2);
    bookGroup.add(backCoverMesh);

    // 2) Page Block (Core stack)
    const blockMatEdges = new THREE.MeshStandardMaterial({
      map: edgesTex,
      roughness: 0.7
    });
    const blockMatInsideRight = new THREE.MeshStandardMaterial({
      map: insideRightTex,
      roughness: 0.6
    });
    const blockMatInsideLeft = new THREE.MeshStandardMaterial({
      map: insideLeftTex,
      roughness: 0.6
    });

    const blockMaterials = [
      blockMatEdges,       // right
      blockMatEdges,       // left (spine side)
      blockMatEdges,       // top
      blockMatEdges,       // bottom
      blockMatInsideRight, // front face (visible when open)
      blockMatInsideLeft   // back face
    ];

    const pageBlockMesh = new THREE.Mesh(
      new THREE.BoxGeometry(bookWidth * 0.96, bookHeight * 0.96, bookThickness * 0.86),
      blockMaterials
    );
    pageBlockMesh.position.set(0.02, 0, 0);
    bookGroup.add(pageBlockMesh);

    // 3) Front Cover with Hinge Pivot
    coverPivot = new THREE.Group();
    coverPivot.position.set(-bookWidth / 2, 0, bookThickness / 2);
    bookGroup.add(coverPivot);

    const frontCoverMatFace = new THREE.MeshStandardMaterial({
      map: coverTex,
      roughness: 0.42,
      metalness: 0.28
    });
    const frontCoverMatInside = new THREE.MeshStandardMaterial({
      map: insideLeftTex,
      roughness: 0.6
    });
    const frontCoverEdgeMat = new THREE.MeshStandardMaterial({
      color: 0xaa7c11,
      roughness: 0.35,
      metalness: 0.6
    });

    const frontCoverMaterials = [
      frontCoverEdgeMat,    // right
      frontCoverEdgeMat,    // left
      frontCoverEdgeMat,    // top
      frontCoverEdgeMat,    // bottom
      frontCoverMatFace,    // front (Cover art)
      frontCoverMatInside   // back (Inside left parchment)
    ];

    const coverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(bookWidth, bookHeight, coverThickness),
      frontCoverMaterials
    );
    coverMesh.position.set(bookWidth / 2, 0, 0);
    coverPivot.add(coverMesh);

    // 4) Turning Pages for ultra-realistic opening feel
    pagePivot1 = createFlippingPage(bookWidth, bookHeight, insideLeftTex, insideRightTex);
    pagePivot1.position.set(-bookWidth / 2 + 0.05, 0, bookThickness / 2 - 0.03);
    bookGroup.add(pagePivot1);

    pagePivot2 = createFlippingPage(bookWidth, bookHeight, insideLeftTex, insideRightTex);
    pagePivot2.position.set(-bookWidth / 2 + 0.05, 0, bookThickness / 2 - 0.06);
    bookGroup.add(pagePivot2);

    // 5) Spine decoration
    const spineMat = new THREE.MeshStandardMaterial({
      color: 0x061122,
      roughness: 0.4,
      metalness: 0.3
    });
    const spineMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(bookThickness / 2, bookThickness / 2, bookHeight, 16, 1, false, -Math.PI / 2, Math.PI),
      spineMat
    );
    spineMesh.position.set(-bookWidth / 2, 0, 0);
    spineMesh.rotation.y = Math.PI / 2;
    bookGroup.add(spineMesh);

    // 6) Floating Golden Stardust Particles
    createGoldenParticles();

    // Initial slight 3D angle to show off depth and cover
    targetRotY = 0.22;
    targetRotX = 0.08;
    bookGroup.rotation.y = targetRotY;
    bookGroup.rotation.x = targetRotX;

    // Events
    setupInteractionEvents();
    animate();
  }

  function createFlippingPage(w, h, texLeft, texRight) {
    const pivot = new THREE.Group();
    const pageMatR = new THREE.MeshStandardMaterial({ map: texRight, roughness: 0.6 });
    const pageMatL = new THREE.MeshStandardMaterial({ map: texLeft, roughness: 0.6 });
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xe8d9be });

    const mats = [edgeMat, edgeMat, edgeMat, edgeMat, pageMatR, pageMatL];
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.94, h * 0.95, 0.008),
      mats
    );
    mesh.position.set((w * 0.94) / 2, 0, 0);
    pivot.add(mesh);
    return pivot;
  }

  function createGoldenParticles() {
    const count = 90;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const speeds = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds.push({
        vy: 0.003 + Math.random() * 0.006,
        vx: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2
      });
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xffd875,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    dustParticles = new THREE.Points(geom, mat);
    dustParticles.userData.speeds = speeds;
    scene.add(dustParticles);
  }

  // --------------------------------------------------------------------------
  // Interaction & Animation Loop
  // --------------------------------------------------------------------------

  function setupInteractionEvents() {
    // Mouse / Touch Parallax & Drag
    window.addEventListener('resize', onWindowResize);

    const onPointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - prevPointerX;
        const deltaY = clientY - prevPointerY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        targetRotX = Math.max(-0.4, Math.min(0.4, targetRotX));
        prevPointerX = clientX;
        prevPointerY = clientY;
      } else if (!isBookOpen) {
        const nx = (clientX / window.innerWidth - 0.5) * 2;
        const ny = (clientY / window.innerHeight - 0.5) * 2;
        targetRotY = 0.22 + nx * 0.35;
        targetRotX = 0.08 - ny * 0.25;
      }
    };

    const onPointerDown = (e) => {
      isDragging = true;
      prevPointerX = e.touches ? e.touches[0].clientX : e.clientX;
      prevPointerY = e.touches ? e.touches[0].clientY : e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    canvasWrap.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvasWrap.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Clicking the book itself when closed opens it
    canvasWrap.addEventListener('click', (e) => {
      if (!isBookOpen && !isAnimating) {
        openBook();
      }
    });

    // Buttons
    if (btnOpen) {
      btnOpen.addEventListener('click', (e) => {
        e.stopPropagation();
        openBook();
      });
    }

    if (btnEnter) {
      btnEnter.addEventListener('click', (e) => {
        e.stopPropagation();
        enterRecipeWebsite();
      });
    }

    if (btnClose) {
      btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeBook();
      });
    }

    if (btnSkip) {
      btnSkip.addEventListener('click', (e) => {
        e.stopPropagation();
        enterRecipeWebsite();
      });
    }

    if (reopenBtn) {
      reopenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        show3DBook();
      });
    }
  }

  function onWindowResize() {
    if (!renderer || !camera) return;
    const width = canvasWrap.clientWidth || window.innerWidth;
    const height = canvasWrap.clientHeight || window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // --------------------------------------------------------------------------
  // Book Opening & Closing Animations
  // --------------------------------------------------------------------------

  function openBook() {
    if (isAnimating) return;
    isBookOpen = true;
    isAnimating = true;
    animationTarget = 1;

    // Shift book position to center the opened spread
    targetRotY = 0;
    targetRotX = 0;

    // Update UI HUD
    if (btnOpen) btnOpen.style.display = 'none';
    if (btnEnter) {
      btnEnter.style.display = 'inline-flex';
      btnEnter.style.animation = 'pulse 1.8s infinite';
    }
    if (btnClose) btnClose.style.display = 'inline-flex';
    if (hintText) {
      hintText.textContent = '✨ Le livre est ouvert • Découvrez nos recettes traditionnelles ✨';
    }
  }

  function closeBook() {
    if (isAnimating) return;
    isBookOpen = false;
    isAnimating = true;
    animationTarget = 0;

    targetRotY = 0.22;
    targetRotX = 0.08;

    if (btnOpen) btnOpen.style.display = 'inline-flex';
    if (btnEnter) btnEnter.style.display = 'none';
    if (btnClose) btnClose.style.display = 'none';
    if (hintText) {
      hintText.textContent = '✨ Déplacez pour admirer en 3D • Cliquez pour ouvrir le livre ✨';
    }
  }

  function enterRecipeWebsite() {
    if (burstOverlay) burstOverlay.classList.add('active');

    // Smoothly fade out the 3D stage
    setTimeout(() => {
      stage.classList.add('book-3d-hidden');
      if (burstOverlay) burstOverlay.classList.remove('active');

      // Scroll smoothly to top or recipes section
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Save preference so user can navigate comfortably
      try {
        sessionStorage.setItem('laTableFrancaise_hasVisited3D', 'true');
      } catch (e) {}
    }, 450);
  }

  function show3DBook() {
    stage.classList.remove('book-3d-hidden');
    closeBook();
  }

  // --------------------------------------------------------------------------
  // Main Render Loop
  // --------------------------------------------------------------------------

  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Smooth rotation lerp
    bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.06;
    bookGroup.rotation.x += (targetRotX - bookGroup.rotation.x) * 0.06;

    // Smooth open/close progress
    const diff = animationTarget - animationProgress;
    if (Math.abs(diff) > 0.001) {
      animationProgress += diff * 0.08;
    } else {
      animationProgress = animationTarget;
      isAnimating = false;
    }

    // Cover opening rotation: 0 to -Math.PI * 0.96
    const coverMaxAngle = -Math.PI * 0.96;
    coverPivot.rotation.y = animationProgress * coverMaxAngle;

    // Center opened book horizontally
    const targetPosX = isBookOpen ? 1.25 * animationProgress : 0;
    bookGroup.position.x += (targetPosX - bookGroup.position.x) * 0.06;

    // Page 1 flip
    if (pagePivot1) {
      const p1Progress = Math.max(0, Math.min(1, (animationProgress - 0.15) / 0.85));
      pagePivot1.rotation.y = p1Progress * (-Math.PI * 0.94);
    }

    // Page 2 flip
    if (pagePivot2) {
      const p2Progress = Math.max(0, Math.min(1, (animationProgress - 0.3) / 0.7));
      pagePivot2.rotation.y = p2Progress * (-Math.PI * 0.92);
    }

    // Gentle levitation float
    if (!isDragging) {
      bookGroup.position.y = Math.sin(time * 1.6) * 0.06;
    }

    // Golden dust particles drifting
    if (dustParticles) {
      const positions = dustParticles.geometry.attributes.position.array;
      const speeds = dustParticles.userData.speeds;
      for (let i = 0; i < speeds.length; i++) {
        positions[i * 3 + 1] += speeds[i].vy;
        positions[i * 3] += Math.sin(time + speeds[i].phase) * 0.001;

        // Wrap around top
        if (positions[i * 3 + 1] > 4) {
          positions[i * 3 + 1] = -4;
        }
      }
      dustParticles.geometry.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }

  // --------------------------------------------------------------------------
  // Auto-play background video safely
  // --------------------------------------------------------------------------
  if (bgVideo) {
    const playPromise = bgVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy muted playback fallback
        bgVideo.muted = true;
        bgVideo.play();
      });
    }
  }

  // Kickoff 3D scene when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeScene);
  } else {
    initThreeScene();
  }

})();
