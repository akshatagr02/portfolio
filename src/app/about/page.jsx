import React from 'react';

export default function About() {
  return (
    <>


      <section className="max-w-[1920px] mx-auto px-6 md:px-12 mb-16 md:mb-32">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-7 relative">
            <img alt="Portrait" className="w-full grayscale contrast-125 brightness-75 object-cover h-[400px] md:h-[700px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG0xd1tpPdAaOn65-pStRlRSvE0BGCXQDvPj_hPoZ0MyLFFbVPaIzf48ZALF2BODvf9T2fIPIACtCV4hD_4RRN2SmANSXWSGLkPxVlDvN3PEX214fFR05lu70A8DOwokm_4-Jy44FJZI0SBoUys5RiqC2L94YEgcmOIm20KD5SkoQKXy3EwmD6yfAwulgCplF-9lUm7Yt1ISn-laM1V0EYhF1NivwUC2EvubxyqTtnqsGI5r6tmGz2flCodx-iKIAeRBLr0MZ-mfj3" />

          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end pb-12 text-center md:text-left">
            <div className="mb-8">

              <span className="text-[#FCA311] uppercase tracking-widest font-extrabold text-xl mb-1 block">Tarun Kumar Banjaree</span>
              <span className=" uppercase tracking-widest text-[#E5E5E5] text-sm mb-4 block">COMMANDANT | ITBP (RETD)</span>
              <p className="text-xl font-headline font-light text-on-surface-variant  leading-relaxed">
                I am a seasoned leader with over 27 years of experience in the Indo-Tibetan Border Police (ITBP) and Indian Navy, having served in diverse and high-pressure environments across the country and abroad. Throughout my career, I have held key leadership positions, managing operations, administration, and strategic planning for large units. My experience spans internal security, border management, disaster response, and intelligence operations.
              </p>
            </div>
            <div className="w-24 h-1 bg-primary-container mx-auto md:mx-0"></div>
          </div>-
        </div>
      </section>

      <section className="bg-surface-container-low py-16 md:py-32 mb-16 md:mb-32">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-16 md:gap-24">

            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[2px] bg-primary-container"></span>
                <h2 className="text-4xl font-headline font-black tracking-tighter text-white uppercase">Professional Strengths</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">verified</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Strategic Planning &amp; Leadership</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">warning</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Crisis &amp; Risk Management</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">analytics</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Intelligence Analysis</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">policy</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Security Operations</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">gavel</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Policy Formulation</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <span className="material-symbols-outlined text-primary-container">corporate_fare</span>
                  <span className="text-xl font-headline font-bold text-on-surface group-hover:text-white transition-colors">Organizational Management</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[2px] bg-primary-container"></span>
                <h2 className="text-4xl font-headline font-black tracking-tighter text-white uppercase">Leadership Experience</h2>
              </div>
              <div className="space-y-8">
                <div className="border-l-2 border-primary-container pl-6 py-2">
                  <h4 className="text-white font-bold mb-2">Personnel Command</h4>
                  <p className="text-on-surface-variant">Led units with strength up to 1200 personnel across more than 15 states.</p>
                </div>
                <div className="border-l-2 border-primary-container pl-6 py-2">
                  <h4 className="text-white font-bold mb-2">High-Stakes Operations</h4>
                  <p className="text-on-surface-variant">Conducted anti-naxal and border security operations in volatile terrains.</p>
                </div>
                <div className="border-l-2 border-primary-container pl-6 py-2">
                  <h4 className="text-white font-bold mb-2">Inter-Agency Coordination</h4>
                  <p className="text-on-surface-variant">Coordinated with multiple security agencies and government bodies for national security mandates.</p>
                </div>
                <div className="border-l-2 border-primary-container pl-6 py-2">
                  <h4 className="text-white font-bold mb-2">International Representation</h4>
                  <p className="text-on-surface-variant">Represented India in international border meetings, negotiating strategic protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-6 md:px-12 mb-32">
        <div className="flex items-center justify-center gap-4 mb-12 text-center">
          <h2 className="text-2xl uppercase tracking-[0.2em] text-primary-container block font-extrabold">Notable Contributions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px] auto-rows-auto md:auto-rows-fr">
          <div className="md:col-span-2 md:row-span-2 bg-secondary-container relative overflow-hidden group p-8 md:p-12 flex flex-col justify-between border-b-4 border-primary-container min-h-[400px] md:min-h-0">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[8rem] md:text-[12rem]">water_drop</span>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-headline font-black text-white uppercase mb-6 leading-none pt-12 md:pt-0">Clean Ganga<br />Expedition (2015)</h3>
              <p className="text-on-secondary-container max-w-md text-base md:text-lg leading-relaxed">Played a key leadership role in the landmark Clean Ganga Expedition, combining environmental stewardship with logistics and team endurance.</p>
            </div>
            <div className="bg-surface/40 backdrop-blur p-6 inline-block">
              <p className="text-primary-container font-bold uppercase tracking-widest text-xs mb-2">Operational Milestone</p>
              <p className="text-white text-sm">Led critical operations including recovery of IEDs and secure field deployments.</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between hover:bg-primary-container transition-colors group cursor-default">
            <h4 className="text-xl font-headline font-bold text-white uppercase group-hover:text-on-primary-fixed">Digital Systems</h4>
            <p className="text-on-surface-variant text-sm group-hover:text-on-primary-fixed/80">Implemented digital systems for operational efficiency and streamlined unit administration.</p>
            <div className="text-primary-container text-4xl font-black group-hover:text-on-primary-fixed">01</div>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between hover:bg-primary-container transition-colors group cursor-default">
            <h4 className="text-xl font-headline font-bold text-white uppercase group-hover:text-on-primary-fixed">National Mentorship</h4>
            <p className="text-on-surface-variant text-sm group-hover:text-on-primary-fixed/80">Conducted career counseling sessions for students nationwide, fostering the next generation of leaders.</p>
            <div className="text-primary-container text-4xl font-black group-hover:text-on-primary-fixed">02</div>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-6 md:px-12 py-16 md:py-32 mb-16 md:mb-32 relative overflow-hidden bg-surface-container-high">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="text-xl md:text-2xl uppercase tracking-[0.2em] text-primary-container mb-8 md:mb-12 block font-extrabold">Awards &amp; Recognition</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left md:text-center">
            <div className="bg-surface p-8 border-t-2 border-primary-container">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">public</span>
              <h5 className="text-lg font-headline font-black text-white uppercase mb-2">World Record</h5>
              <p className="text-on-surface-variant text-xs leading-relaxed">Golden Book of World Records – Longest River Rafting Expedition</p>
            </div>
            <div className="bg-surface p-8 border-t-2 border-primary-container">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">military_tech</span>
              <h5 className="text-lg font-headline font-black text-white uppercase mb-2">DG's Commendation</h5>
              <p className="text-on-surface-variant text-xs leading-relaxed">DG's Commendation Roll (2024) for distinguished service.</p>
            </div>
            <div className="bg-surface p-8 border-t-2 border-primary-container">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">edit_note</span>
              <h5 className="text-lg font-headline font-black text-white uppercase mb-2">Best Blogger</h5>
              <p className="text-on-surface-variant text-xs leading-relaxed">Recognized as Best Blogger at the Army War College.</p>
            </div>
            <div className="bg-surface p-8 border-t-2 border-primary-container">
              <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block">workspace_premium</span>
              <h5 className="text-lg font-headline font-black text-white uppercase mb-2">Excellence</h5>
              <p className="text-on-surface-variant text-xs leading-relaxed">Multiple commendations for operational and tactical excellence.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
