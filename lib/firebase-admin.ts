import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';

function loadServiceAccount(): ServiceAccount {
  const raw = process.env.FIREBASE_SA;
  if (!raw) {
    throw new Error(
      'FIREBASE_SA is not set. Add the Firebase service-account JSON (one line) to .env.local and to Vercel env vars.'
    );
  }

  let sa: Record<string, string>;
  try {
    sa = JSON.parse(raw);
  } catch {
    throw new Error('FIREBASE_SA is not valid JSON. Paste the whole service-account file contents on one line.');
  }

  // Some env editors double-escape newlines in the private key
  if (sa.private_key) sa.private_key = sa.private_key.replace(/\\n/g, '\n');
  return sa as ServiceAccount;
}

// Initialized lazily so `next build` doesn't fail when env vars are absent
export function getAdminAuth(): Auth {
  const app = getApps()[0] ?? initializeApp({ credential: cert(loadServiceAccount()) });
  return getAuth(app);
}
