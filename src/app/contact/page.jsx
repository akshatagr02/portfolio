'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
       setStatus('success');
       e.target.reset();
       setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-[1920px] mx-auto px-6 md:px-12">


<section className="mb-16 md:mb-20 pt-8 md:pt-12 text-center md:text-left">
<div className="max-w-4xl mx-auto md:mx-0">
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 uppercase">
                    Let's Connect
                </h1>
<div className="w-24 h-1 bg-primary-container mb-8 mx-auto md:mx-0"></div>
<p className="font-body text-xl text-on-secondary-container max-w-2xl leading-relaxed">
                    For professional collaborations, speaking engagements, or mentorship inquiries, feel free to connect.
                </p>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-9xl">target</span>
</div>
<form className="space-y-6 relative z-10 w-full" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
<div className="group flex flex-col w-full">
<label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white font-body py-3 px-4 placeholder:text-surface-variant transition-all" placeholder="Your Name" required="" type="text"/>
</div>
<div className="group flex flex-col w-full">
<label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary">Email Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white font-body py-3 px-4 placeholder:text-surface-variant transition-all" placeholder="Email@domain.com" required="" type="email"/>
</div>
</div>
<div className="group flex flex-col w-full">
<label className="font-label text-[0.7rem] uppercase tracking-widest text-on-surface-variant block mb-2 transition-colors group-focus-within:text-primary">Message</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-white font-body py-4 px-4 placeholder:text-surface-variant transition-all resize-none min-h-[160px]" placeholder="Your message..." required="" rows="6"></textarea>
</div>
<div className="pt-2">
{status === 'success' && <div className="text-[#34A853] font-bold mb-4 font-body uppercase text-sm tracking-widest flex items-center gap-2"><span className="material-symbols-outlined">check_circle</span> Message Sent Successfully!</div>}
<button disabled={status === 'sending'} className="w-full bg-primary-container text-on-primary-fixed font-headline font-black py-4 px-10 text-sm uppercase tracking-[0.2em] rounded-md hover:opacity-90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95" type="submit">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                            {status !== 'sending' && <span className="material-symbols-outlined text-lg">send</span>}
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 space-y-12">

<div className="bg-secondary-container p-6 md:p-10 border-l-4 border-primary-container">
<h3 className="font-headline text-2xl font-bold text-white mb-8 text-center md:text-left uppercase tracking-tight">Direct Connection</h3>
<div className="space-y-10 md:space-y-8">
<div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
<div className="bg-surface-container-high p-3 rounded-full md:rounded-none flex-shrink-0">
<span className="material-symbols-outlined text-primary-container">alternate_email</span>
</div>
<div className="w-full">
<p className="font-label text-[0.65rem] text-on-secondary-container tracking-widest uppercase mb-1">Electronic Mail</p>
<a className="text-white font-headline font-bold text-base md:text-lg hover:text-primary transition-colors break-all md:break-normal w-full block" href="mailto:tarundgg@yahoo.com">tarundgg@yahoo.com</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
<div className="bg-surface-container-high p-3 rounded-full md:rounded-none flex-shrink-0">
<span className="material-symbols-outlined text-primary-container">call</span>
</div>
<div className="w-full">
<p className="font-label text-[0.65rem] text-on-secondary-container tracking-widest uppercase mb-1">Secure Line</p>
<a className="text-white font-headline font-bold text-base md:text-lg hover:text-primary transition-colors break-all md:break-normal w-full block" href="tel:+919437064996">+91 9437064996</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
<div className="bg-surface-container-high p-3 rounded-full md:rounded-none flex-shrink-0">
<span className="material-symbols-outlined text-primary-container">share</span>
</div>
<div className="w-full">
<p className="font-label text-[0.65rem] text-on-secondary-container tracking-widest uppercase mb-1">Professional Network</p>
<a className="text-white font-headline font-bold text-base md:text-lg hover:text-primary transition-colors break-all md:break-normal w-full block" href="https://www.linkedin.com/in/tarundgg/" target="_blank">linkedin.com/in/tarundgg/</a>
</div>
</div>
</div>
</div>

<div>
<h4 className="font-label text-[0.7rem] text-on-surface-variant tracking-[0.3em] uppercase mb-6 text-center md:text-left">Social Network Feed</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-bright transition-colors group" href="#">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface">Twitter</span>
<span className="material-symbols-outlined text-sm text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
</a>
<a className="flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-bright transition-colors group" href="#">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface">Medium</span>
<span className="material-symbols-outlined text-sm text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
</a>
<a className="flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-bright transition-colors group" href="#">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface">Substack</span>
<span className="material-symbols-outlined text-sm text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
</a>
<a className="flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-bright transition-colors group" href="#">
<span className="text-xs font-bold uppercase tracking-widest text-on-surface">GitHub</span>
<span className="material-symbols-outlined text-sm text-primary-container group-hover:translate-x-1 transition-transform">north_east</span>
</a>
</div>
</div>


</div>
</div>

    </div>
  );
}
