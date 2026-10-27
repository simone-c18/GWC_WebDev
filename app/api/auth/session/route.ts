import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export const runtime = 'nodejs'; // firebase-admin doesn't run on the edge runtime
const EXPIRES_MS = 1000 * 60 * 60 * 8;

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    const decoded = await adminAuth.verifyIdToken(idToken);
    if (!decoded.admin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn: EXPIRES_MS });
    const res = NextResponse.json({ ok: true });
    res.cookies.set('session', cookie, {
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

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('session');
  return res;
}