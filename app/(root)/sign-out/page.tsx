'use client';

import { useEffect } from 'react';
import { signOut } from '@/lib/actions/auth.action';

export default function SignOutPage() {
  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut();
      } catch (error) {
        console.error('Error signing out:', error);
        // Fallback redirect if server action fails
        window.location.href = '/';
      }
    };
    
    handleSignOut();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-white text-xl mb-4">Signing you out...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
} 