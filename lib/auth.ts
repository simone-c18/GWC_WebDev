import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAdminAuth } from '@/lib/firebase-admin';

export const SESSION_COOKIE = 'session';

// Returns the decoded admin session, or null. Cached per request so the
// layout and page share a single verification (including the revocation check).
export const getAdminSession = cache(async () => {
  const session = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!session) return null;
  try {
    const decoded = await getAdminAuth().verifySessionCookie(session, true);
    return decoded.admin ? decoded : null;
  } catch {
    return null;
  }
});

export async function requireAdmin() {
  const decoded = await getAdminSession();
  if (!decoded) redirect('/login');
  return decoded;
}
