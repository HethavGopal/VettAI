'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const NavBar = () => (
  <nav className="sticky top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image src="/VLogoWhite.png" alt="VettAI Logo" width={24} height={24} />
          <span className="text-lg font-bold text-white tracking-tight">VettAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
              Product
              <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
            </button>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
              Resources
              <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
            </button>
          </div>
          <Link href="/pricing" className="text-sm text-white/90 hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="text-sm text-white/90 hover:text-white">
            About
          </Link>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Link href="/sign-in">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition">
            Log In
          </button>
        </Link>
        <Link href="/sign-up">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar; 