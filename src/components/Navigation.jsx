'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl bg-gradient-to-b from-[#131313] to-transparent">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto font-['Manrope'] tracking-tight">
        <div className="text-xl font-black  text-white uppercase"><Link href="/">TARUN KUMAR
BANJAREE</Link></div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
          <Link href="/" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Home</Link>
          <Link href="/about" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">About</Link>
          <Link href="/publications" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Writings</Link>
          <Link href="/contact" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen border-b border-white/10' : 'max-h-0'}`}>
        <div className="bg-[#131313]/95 backdrop-blur-3xl px-6 pt-4 pb-12 flex flex-col gap-8 font-headline tracking-tight h-[100dvh]">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-[#E5E5E5] hover:text-[#FCA311] transition-colors border-l-2 border-transparent hover:border-[#FCA311] pl-4">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-[#E5E5E5] hover:text-[#FCA311] transition-colors border-l-2 border-transparent hover:border-[#FCA311] pl-4">About</Link>
          <Link href="/publications" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-[#E5E5E5] hover:text-[#FCA311] transition-colors border-l-2 border-transparent hover:border-[#FCA311] pl-4">Writings</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tight text-[#E5E5E5] hover:text-[#FCA311] transition-colors border-l-2 border-transparent hover:border-[#FCA311] pl-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
}