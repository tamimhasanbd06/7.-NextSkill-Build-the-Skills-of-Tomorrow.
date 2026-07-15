$ErrorActionPreference = "Continue"

Write-Host "`n[1/7] চলমান Node.js process বন্ধ করা হচ্ছে..." -ForegroundColor Cyan
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "[2/7] npm proxy এবং ভুল registry configuration পরিষ্কার করা হচ্ছে..." -ForegroundColor Cyan
npm config delete proxy 2>$null
npm config delete https-proxy 2>$null
npm config set registry "https://registry.npmjs.org/"

Write-Host "[3/7] Project cache/build directory মুছে ফেলা হচ্ছে..." -ForegroundColor Cyan
if (Test-Path ".next") { cmd /c "rmdir /s /q .next" }
if (Test-Path "node_modules") { cmd /c "rmdir /s /q node_modules" }

Write-Host "[4/7] npm cache verify করা হচ্ছে..." -ForegroundColor Cyan
npm cache verify

Write-Host "[5/7] Active registry যাচাই করা হচ্ছে..." -ForegroundColor Cyan
$registry = npm config get registry
Write-Host "Registry: $registry" -ForegroundColor Yellow
if ($registry -ne "https://registry.npmjs.org/") {
  throw "npm registry সঠিক নয়। Expected: https://registry.npmjs.org/"
}

Write-Host "[6/7] package-lock.json ব্যবহার করে clean install চলছে..." -ForegroundColor Cyan
npm ci --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000
if ($LASTEXITCODE -ne 0) {
  Write-Host "npm ci ব্যর্থ হয়েছে। npm install fallback চালানো হচ্ছে..." -ForegroundColor Yellow
  npm install --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000
}

if ($LASTEXITCODE -ne 0) {
  throw "Dependency installation ব্যর্থ হয়েছে। উপরের network/error message দেখুন।"
}

Write-Host "[7/7] Installation সফল হয়েছে।" -ForegroundColor Green
Write-Host "Project চালাতে: npm run dev" -ForegroundColor Green
