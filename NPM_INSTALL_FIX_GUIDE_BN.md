# NextSkill npm Installation Error Fix Guide

## সমস্যার আসল কারণ

Project-এর `package-lock.json` ফাইলে dependency download URL হিসেবে নিচের internal registry লেখা ছিল:

`packages.applied-caas-gateway1.internal.api.openai.org`

এই domain সাধারণ কম্পিউটার থেকে ব্যবহারযোগ্য নয়। তাই `set-cookie-parser` download করার সময় `ETIMEDOUT` হয়েছে। একই সময়ে চলমান Node/Next process `node_modules` lock করে রাখায় Windows `EPERM` দেখিয়েছে।

## সবচেয়ে সহজ সমাধান

1. নতুন fixed ZIP extract করুন।
2. Windows PowerShell খুলুন।
3. Project folder-এ যান।
4. নিচের command চালান:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\fix-install-windows.ps1
```

5. Installation শেষ হলে frontend-এর জন্য:

```powershell
npm run dev
```

Backend-এর জন্য:

```powershell
npm run typecheck
npm run dev
```

## Manual recovery steps

### 1. Project folder-এ যান

```powershell
cd "C:\path\to\project"
```

### 2. Node process বন্ধ করুন

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

VS Code terminal, Next.js server এবং অন্য Node application বন্ধ রাখুন।

### 3. npm registry reset করুন

```powershell
npm config delete proxy
npm config delete https-proxy
npm config set registry https://registry.npmjs.org/
npm config get registry
```

Output অবশ্যই হবে:

`https://registry.npmjs.org/`

### 4. Locked folders মুছুন

Frontend:

```powershell
cmd /c "rmdir /s /q node_modules"
cmd /c "rmdir /s /q .next"
```

Backend:

```powershell
cmd /c "rmdir /s /q node_modules"
cmd /c "rmdir /s /q dist"
```

### 5. Cache যাচাই করুন

```powershell
npm cache verify
```

### 6. Clean install করুন

```powershell
npm ci --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000
```

`npm ci` ব্যর্থ হলে:

```powershell
npm install --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000
```

## EPERM আবার হলে

1. VS Code সম্পূর্ণ বন্ধ করুন।
2. Task Manager খুলে সব `node.exe` process End task করুন।
3. Windows Security/antivirus সাময়িকভাবে folder scan করছে কি না দেখুন।
4. Administrator PowerShell থেকে cleanup script পুনরায় চালান।
5. Project-টি `Downloads` folder-এর বদলে ছোট path-এ রাখুন, যেমন:

`C:\projects\nextskill-frontend`

## ETIMEDOUT আবার হলে

```powershell
npm ping --registry=https://registry.npmjs.org/
Test-NetConnection registry.npmjs.org -Port 443
```

VPN/proxy বন্ধ করে পুনরায় চেষ্টা করুন। Corporate proxy থাকলে network administrator-এর proxy value ছাড়া random proxy configure করবেন না।

## যাচাই

Project lockfile-এ internal URL আছে কি না:

```powershell
Select-String -Path package-lock.json -Pattern "applied-caas-gateway|artifactory"
```

Fixed project-এ কোনো result আসবে না।
