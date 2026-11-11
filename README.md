This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Admin login (Firebase)

The `/admin` dashboard is protected by Firebase Authentication. It's reachable from the hidden link on the © in the footer, or directly at `/login`.

1. Copy `.env.example` to `.env.local` and fill in the values from the GWC Firebase project. Comments in the file say where each value comes from.
2. In the Firebase console, add the user under **Authentication → Users**.
3. Set `ADMIN_EMAIL` in `.env.local` to that user's email, then run:

   ```bash
   npm run set-admin
   ```

   This sets the `admin` custom claim. Accounts without the claim are rejected at login.
4. In production, the same `NEXT_PUBLIC_FIREBASE_*` and `FIREBASE_SA` variables must be set in Vercel → Settings → Environment Variables.

Sessions last 8 hours. Logging out revokes the session on the server.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
