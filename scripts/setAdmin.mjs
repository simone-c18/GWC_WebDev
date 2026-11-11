import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const email = process.env.ADMIN_EMAIL;
if (!email) {
  console.error('ADMIN_EMAIL is not set in .env.local (run with: npm run set-admin)');
  process.exit(1);
}

const sa = JSON.parse(process.env.FIREBASE_SA);
sa.private_key = sa.private_key?.replace(/\\n/g, "\n");
initializeApp({ credential: cert(sa) });
const user = await getAuth().getUserByEmail(email);
await getAuth().setCustomUserClaims(user.uid, { admin: true });
console.log(`${email} is now an admin`);