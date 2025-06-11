'use client';

import { usePathname } from 'next/navigation';
import NavBar from '@/components/ui/landing/navbar';

export default function ConditionalNavBar() {
  const pathname = usePathname();
  
  // Hide navbar on dashboard routes as they have their own navbar
  const shouldHideNavbar = pathname?.startsWith('/dashboard') || 
                           pathname?.startsWith('/interview') || 
                           pathname?.startsWith('/interviews') || 
                           pathname?.startsWith('/progress') ||
                           pathname?.startsWith('/settings');
  
  // Don't render the landing navbar if we're on a dashboard route
  if (shouldHideNavbar) {
    return null;
  }
  
  return <NavBar />;
} 