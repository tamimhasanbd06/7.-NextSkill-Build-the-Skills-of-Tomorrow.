# NextSkill MongoDB + JWT পূর্ণ সেটআপ গাইড

## ১. Security rotation
আগের MongoDB password এবং Better Auth secret chat-এ প্রকাশ হয়েছে। MongoDB Atlas থেকে database user password বদলান এবং নতুন Better Auth secret তৈরি করুন।

PowerShell secret command:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## ২. Atlas Network Access
MongoDB Atlas → Security → Network Access → Add Current IP Address। Dynamic IP হলে IP পরিবর্তনের পর আবার update করতে হবে। `0.0.0.0/0` শুধু সাময়িক development testing-এর জন্য।

## ৩. Backend `.env`
`.env.example` copy করে `.env` বানিয়ে নতুন credential দিন। `DATABASE_NAME` অবশ্যই সেই database হবে যার ভিতরে exact `courses` collection আছে।

## ৪. Database diagnosis

```powershell
npm install
npm run db:check
```

Expected:

```text
MongoDB connection successful
Selected database: nextskill
Collections: courses, wishlists, sellingCourses, user, session, account
Total courses: 50
Visible courses: 50
```

## ৫. Backend run ও API test

```powershell
npm run typecheck
npm run dev
```

Browser-এ খুলুন:

- `http://localhost:8000/api/health`
- `http://localhost:8000/api/debug/database`
- `http://localhost:8000/api/courses?limit=24`
- `http://localhost:8000/api/homepage/categories`
- `http://localhost:8000/api/homepage/statistics`

## ৬. Frontend run
Frontend `.env.local`-এ `NEXT_PUBLIC_API_URL=http://localhost:8000` রেখে server restart করুন:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm install
npm run dev
```

## ৭. JWT flow
Better Auth secure HTTP-only session cookie তৈরি করে। Protected frontend API client `/api/auth/token` থেকে short-lived JWT নেয় এবং `Authorization: Bearer <token>` header পাঠায়। Backend JWT verify করে; JWT unavailable হলে valid secure session cookie fallback হিসেবেও গ্রহণ করে।

## ৮. Google OAuth
Google Cloud Console:

- Authorized JavaScript Origin: `http://localhost:3000`
- Authorized Redirect URI: `http://localhost:8000/api/auth/callback/google`

Credentials backend `.env`-এ দেওয়ার পরে frontend-এ `NEXT_PUBLIC_GOOGLE_AUTH_ENABLED=true` করুন।
