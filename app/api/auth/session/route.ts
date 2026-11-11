import { NextResponse, type NextRequest } from 'next/server';
import { getAdminAuth } from '@/lib/firebase-admin';
import { SESSION_COOKIE } from '@/lib/auth';

export const runtime = 'nodejs'; // firebase-admin doesn't run on the edge runtime
const EXPIRES_MS = 1000 * 60 * 60 * 8;
const MAX_SIGN_IN_AGE_S = 5 * 60; // only mint a session from a fresh sign-in

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    const adminAuth = getAdminAuth();
    const decoded = await adminAuth.verifyIdToken(idToken, true);

    if (Date.now() / 1000 - decoded.auth_time > MAX_SIGN_IN_AGE_S) {
      return NextResponse.json({ error: 'Recent sign-in required' }, { status: 401 });
    }
    if (!decoded.admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn: EXPIRES_MS });
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, cookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: EXPIRES_MS / 1000,
      path: '/',
    });
    return res;
  } catch {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = req.cookies.get(SESSION_COOKIE)?.value;
  if (session) {
    try {
      // Revoke server-side so a copied cookie stops working immediately
      const adminAuth = getAdminAuth();
      const decoded = await adminAuth.verifySessionCookie(session);
      await adminAuth.revokeRefreshTokens(decoded.sub);
    } catch {
      // Cookie already invalid/expired — nothing to revoke
    }
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.delete(SESSION_COOKIE);
  return res;
}
