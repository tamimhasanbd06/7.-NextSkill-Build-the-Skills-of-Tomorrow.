# Frontend authentication setup

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_API_URL=http://localhost:5000`.
3. Run `npm install`, then `npm run dev`.

Implemented:
- Interactive email/password login
- Interactive registration with password strength validation
- Google sign-in/sign-up
- Better Auth React client
- Session-aware desktop/mobile navbar
- Secure logout
- JWT helper in `src/lib/auth-client.ts`

Note: The project contains pre-existing Framer Motion Variants typing errors in several non-auth components. They may need explicit `Variants` typing or tuple `as const` fixes before a complete production build.
