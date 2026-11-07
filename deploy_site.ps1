# Deploy French Cuisine site to GitHub with automatic backup
# =============================================================
$backupRoot = "C:\Users\chara\Downloads"
$backupDir  = Join-Path $backupRoot "french-website-backups"
$timestamp  = Get-Date -Format "yyyyMMdd-HHmmss"
$siteUrl    = "https://charanaternos.github.io/french-cuisine/"

# 1. Create timestamped backup zip
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir -Force | Out-Null }
$backupFile = Join-Path $backupDir "backup-$timestamp.zip"
Write-Host "Creating backup -> $backupFile" -ForegroundColor Cyan
git archive -o $backupFile HEAD

# 2. Add and commit all changes
Write-Host "Staging files..." -ForegroundColor Cyan
git add index.html book3d.css book3d.js assets/intro.mp4 assets/three.min.js deploy_site.ps1
git commit -m "feat: 3D interactive French Recipe Book opening experience with video backdrop and navigation toggle"

# 3. Push to GitHub
Write-Host "Pushing to GitHub (origin main)..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host "Online website link: $siteUrl" -ForegroundColor Yellow
} else {
    Write-Host "Push encountered an issue. Please verify git credentials." -ForegroundColor Red
}
