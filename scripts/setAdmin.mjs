import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const email = process.env.ADMIN_EMAIL;
if (!email) {
  console.error('ADMIN_EMAIL is not set in .env.local');
  process.exit(1);
}

initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_SA)) });
const user = await getAuth().getUserByEmail(email);
await getAuth().setCustomUserClaims(user.uid, { admin: true });
console.log(`${email} is now an admin`);