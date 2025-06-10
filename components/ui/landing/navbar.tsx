'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Star } from 'lucide-react';

const NavBar = () => (
  <>
    {/* Announcement banner */}
    <div className="w-full bg-gradient-to-r from-primary-200/20 via-primary-100/20 to-primary-200/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 text-sm text-center flex items-center justify-center gap-2">
        <Star className="w-4 h-4 text-primary-200" />
        <span className="text-white">New: AI-powered behavioral interview feedback</span>
        <Link href="/features" className="text-primary-200 hover:text-primary-100 ml-2">Learn more →</Link>
      </div>
    </div>
    
    {/* Main navigation */}
    <nav className="sticky top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="VettAI Logo" width={32} height={32} />
            <span className="text-xl font-bold text-white tracking-tight">VettAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
                Product
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
                Resources
                <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
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
        
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <button className="px-5 py-2 rounded-full font-semibold text-white bg-transparent border border-white/30 hover:bg-white/10 transition">
              Log In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-5 py-2 rounded-full font-semibold text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  </>
);

export default NavBar; 