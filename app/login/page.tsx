'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase-client';
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await cred.user.getIdToken();

      const res = await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      // The server cookie is what protects /admin, so drop the client-side session
      await signOut(auth);

      if (!res.ok) {
        setError(res.status === 403 ? 'This account is not an admin.' : 'Invalid credentials.');
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch {
      setError('Invalid credentials.');
    } finally {
      setLoading(false);
    }
  }

    return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 pb-16 pt-36">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-5 rounded-2xl border border-gwc-lightblue/30 bg-gwc-lightblue/20 p-8 shadow-lg"
      >
        <div className="flex flex-col items-center gap-3">
          <Image src="/logo.png" alt="Girls Who Code UCF" width={120} height={40} className="object-contain" />
          <h1 className="text-xl font-semibold text-gwc-darkblue">admin login</h1>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-gwc-darkblue">email</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gwc-lightblue/50 bg-white px-3 py-2 text-gwc-darkblue outline-none focus:border-gwc-lightblue focus:ring-2 focus:ring-gwc-lightblue/40"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-sm text-gwc-darkblue">password</label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gwc-lightblue/50 bg-white px-3 py-2 text-gwc-darkblue outline-none focus:border-gwc-lightblue focus:ring-2 focus:ring-gwc-lightblue/40"
          />
        </div>

        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-gwc-lightblue px-5 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "signing in..." : "sign in"}
        </button>
      </form>
    </main>
  );
}