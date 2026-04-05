export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#131313]">
      <div className="flex flex-col md:flex-row justify-around items-center px-12 py-16 w-full max-w-[1920px] mx-auto">
        <div className="text-lg font-black text-white font-headline mb-8 md:mb-0">STRATEGIC COMMAND</div>
        <div className="flex gap-5 mb-8 md:mb-0">
          <a href="https://www.linkedin.com/in/tarundgg/" target="_blank" rel="noopener noreferrer" className="text-[#E5E5E5]/60 hover:text-[#FCA311] transition-colors font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em]">LinkedIn</a>
          <a href="#" className="text-[#E5E5E5]/60 hover:text-[#FCA311] transition-colors font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em]">Twitter</a>
          <a href="mailto:tarundgg@yahoo.com" className="text-[#E5E5E5]/60 hover:text-[#FCA311] transition-colors font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em]">Email</a>

        </div>
        <div className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em] text-[#E5E5E5]/60 text-center md:text-right">
          Built with purpose, discipline, and a commitment to excellence.<br />
          © 2026 STRATEGIC COMMAND. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}