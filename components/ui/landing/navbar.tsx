'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/VLogoWhite.png" alt="VettAI Logo" width={20} height={20} className="sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg font-bold text-white tracking-tight">VettAI</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
                Product
                <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
              </button>
            </div>
            <Link href="/#how-it-works" className="text-sm text-white/90 hover:text-white">
              About
            </Link>
          </div>
        </div>
        
        {/* Desktop buttons */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3">
          <Link href="/sign-in">
            <button className="px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition">
              Log In
            </button>
          </Link>
          <Link href="/sign-up">
            <button className="px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="sm:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-3">
              <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white w-full text-left">
                Product
                <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <Link href="/#how-it-works" className="block text-sm text-white/90 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </div>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <Link href="/sign-in" className="block">
                <button className="w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-transparent border border-white/30 hover:bg-white/10 transition">
                  Log In
                </button>
              </Link>
              <Link href="/sign-up" className="block">
                <button className="w-full px-4 py-2 rounded-full text-sm font-medium text-dark-100 bg-primary-200 hover:bg-primary-100 transition shadow-lg shadow-primary-200/20">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 