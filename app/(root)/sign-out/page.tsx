import { signOut } from '@/lib/actions/auth.action';

export default async function SignOutPage() {
  // This will clear the session and redirect to home
  await signOut();
  
  return null;
} 