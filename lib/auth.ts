import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { adminAuth } from '@/lib/firebase-admin';

export async function requireAdmin() {
  const session = (await cookies()).get('session')?.value;
  let decoded = null;
  if (session) {
    try { decoded = await adminAuth.verifySessionCookie(session, true); } catch {}
  }
  if (!decoded || !decoded.admin) redirect('/login');
  return decoded;
}