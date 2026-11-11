import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  // Already signed in as admin — skip the form
  if (await getAdminSession()) redirect('/admin');
  return <LoginForm />;
}
