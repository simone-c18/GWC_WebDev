import { requireAdmin } from '@/lib/auth';
import LogoutButton from '@/components/LogoutButton';

export default async function AdminPage() {
  const user = await requireAdmin();

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="text-sm text-gray-600">Signed in as {user.email}</p>
        </div>
        <LogoutButton />
      </header>

      <section className="rounded-lg border border-gray-200 p-4">
        <p>Your site management tools go here.</p>
      </section>
    </main>
  );
}