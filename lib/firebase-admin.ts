import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app = getApps().length
  ? getApps()[0]
  : initializeApp({ credential: cert(JSON.parse(process.env.FIREBASE_SA!)) });

export const adminAuth = getAuth(app);