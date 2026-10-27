import { requireAdmin } from '@/lib/auth';
import LogoutButton from '@/components/LogoutButton';

export default async function AdminPage() {
  const user = await requireAdmin();

    return (
    <main className="mx-auto max-w-5xl px-6 pb-12 pt-36">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gwc-darkblue dark:text-white">admin dashboard</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">signed in as {user.email}</p>
        </div>
        <LogoutButton />
      </header>

      <section className="rounded-2xl border border-gwc-lightblue/30 p-6">
        <p>your site management tools go here.</p>
      </section>
    </main>
  );
}