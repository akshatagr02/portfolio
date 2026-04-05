import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl bg-gradient-to-b from-[#131313] to-transparent">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto font-['Manrope'] tracking-tight">
        <div className="text-xl font-black tracking-tighter text-white uppercase"><Link href="/">TARUN KUMAR
BANJAREE</Link></div>
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight">
          <Link href="/" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Home</Link>
          <Link href="/about" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">About</Link>
          <Link href="/publications" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Writings</Link>
          <Link href="/contact" className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors">Contact</Link>
        </div>

      </div>
    </nav>
  );
}