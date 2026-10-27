'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/session', { method: 'DELETE' });
    router.push('/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full bg-gwc-lightblue px-5 py-2 text-sm font-medium text-background transition hover:opacity-90"
    >
      Log out
    </button>
  );
}