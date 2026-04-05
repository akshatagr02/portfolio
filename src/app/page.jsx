import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>


      <section className="min-h-screen flex items-center pt-24 px-12 overflow-hidden">
        <div className="editorial-grid w-full max-w-[1920px] mx-auto items-end gap-12">
          <div className="col-span-12 md:col-span-7 pb-20">
            <div className="label-md text-primary-container uppercase tracking-[0.2em] text-2xl mb-6 font-semibold">Tarun Kumar Banjaree</div>
            <h1 className="text-[clamp(1.5rem,10vw,5.5rem)] font-headline font-black leading-[0.9] tracking-tighter text-white uppercase mb-12">
              Commandant <br /> <span className="text-primary-container">ITBP (Retd)</span>
            </h1>
            <div className="label-md text-on-surface-variant uppercase tracking-[0.15em] mb-8 font-medium">Strategic Leader | National Security Expert | Mentor</div>
            <div className="max-w-xl text-lg text-on-surface-variant font-light leading-relaxed">
              With over 27 years of distinguished service in the Indo-Tibetan Border Police and Indian Navy, I have led large-scale operations, managed high-risk environments, and contributed to national-level missions and policy execution. A seasoned leader with extensive experience in operational command, intelligence analysis, and strategic planning. Proven ability to lead teams of over 1200 personnel and execute complex missions under challenging conditions.
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative group">
            <div className="absolute -inset-4 border border-outline-variant/20 -z-10 translate-x-4 translate-y-4"></div>
            <img alt="Portrait of Tarun Kumar Banjaree" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Sophisticated portrait of a mature Indian man in a charcoal tailored suit, looking off-camera with a confident and disciplined expression, high-contrast dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSFZYE37JgSRxbkBww4mJq7Viy1EC1fUSmYlEt4p9KVu7bfE6itcnnWlg-2YRnPx4vbNWItfnuxpqLiYeGgG6jQaJsG3qqMf-ZBQX3RRGIzcyDrafLsmSDj1Z-_GfUzvIpkVRzxJoXpUvtWvKXaCyuGgwBCGfVGoEr44v8yxHp558GxivqUIodhL3OljLXVYvcMsywl_-FzHOWyJbLRTJPTpFPLUgHbGGuKczJVFV_26aqrrNZgHFXkJFOlMfQl0biZZyuwkfvr02n" />
          </div>
        </div>
      </section>

      <section className="py-32 border-y border-white/5">
        <div className="max-w-[1920px] mx-auto px-12">
          <div className="editorial-grid gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-4">Key Highlights</h2>
              <div className="h-1 w-20 bg-primary-container"></div>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
              <div className="flex items-start gap-4">
                <span className="text-primary-container font-headline font-black text-3xl">01</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">Decades of Leadership</h4>
                  <p className="text-on-surface-variant text-sm">27+ years of leadership experience commanding large operational units across India.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary-container font-headline font-black text-3xl">02</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">National Expeditions</h4>
                  <p className="text-on-surface-variant text-sm">Key contributor to the Clean Ganga Expedition, managing complex environmental and logistical challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary-container font-headline font-black text-3xl">03</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">International Diplomacy</h4>
                  <p className="text-on-surface-variant text-sm">Represented India in international border dialogues, fostering strategic security relationships.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary-container font-headline font-black text-3xl">04</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-tight mb-2">Decorated Career</h4>
                  <p className="text-on-surface-variant text-sm">Recognized with multiple national-level awards for distinguished service and operational excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-low">
        <div className="max-w-[1920px] mx-auto px-12 text-center">
          <span className="material-symbols-outlined text-primary-container text-5xl mb-8" data-icon="format_quote">format_quote</span>
          <blockquote className="text-[clamp(1.5rem,4vw,3rem)] font-headline font-light italic leading-tight text-white max-w-5xl mx-auto">
            "Strategy is not a plan; it is a discipline. In the field, clarity is the difference between mission success and failure. In business, it is the difference between scaling and stagnating."
          </blockquote>
          <div className="mt-12 inline-block h-px w-24 bg-primary-container"></div>
        </div>
      </section>

      <section className="py-32 px-12 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter">Featured Works</h2>
            <p className="text-on-surface-variant mt-2">Strategic insights transcribed for the modern leader.</p>
          </div>
          <Link href="/publications" className="text-primary-container font-label text-[0.75rem] uppercase tracking-widest flex items-center gap-2 group" >
            View Library <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-surface-container-high p-8 flex flex-col gap-6 group">
            <div className="overflow-hidden shadow-2xl">
              <img alt="Book Cover: Tactical Command" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist book cover titled Tactical Command leaning against a dark stone wall, dark blue and gold color scheme, clean serif typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyf736ZvNnelRs3Sx40_8Lq96Aff6B24XTWEkkBwjq-M-QLkBWjqvtol6xLuGgDRe1Z_gkdQvG_qDcVJ5DIMyMgAGbw8y13s4csWJB5xyOoPvFTOQRqtI2UeAr1qKJdeo9tW0cAIoupouiu1mn0i2Jwdm6SoI5gH4zjdj7mtl7yfeDOVRKqqOSZbl_Rp-d6dFkkfMrcuqEg4-CEp9Ga4MMFmEEYjwgnTbvBTeL99ik-B2GuBoANIcCiGS3LbEvh2wo56dNNykHZ_Ve" />
            </div>
            <div>
              <div className="text-[0.7rem] text-primary-container font-black tracking-widest uppercase mb-2">Bestseller</div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">The Tactical Command</h3>
              <p className="text-on-surface-variant text-sm">Applying battlefield logistics to corporate operational efficiency.</p>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 flex flex-col gap-6 group md:translate-y-12">
            <div className="overflow-hidden shadow-2xl">
              <img alt="Book Cover: Silent Leadership" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A thick hardcover book with a matte black finish and gold foil embossing, professional photography on a dark wooden surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaSXNjvIVhO8mPdM-soxRD9YEyGzBn_0lCDUdINWT5wVyHQQg0efJMyXgNcL5L4TZOhAbhL0PhQ3JVVd26vsRqBtIwp4A3J71e0rLsnnDUgGvRa5tVD-08rixIgVAFRCKNqB5JBndjZGhAg5wcpZhl8kp-FV47FVmSzklsVJ1W2fIU6I3hDBk-Rvv82DJ6oNxCtZJ2j92b4AfvRLK76SYnzn6dyPpNUcDoy8X0R-rEsMICD5gxZdqStW-7hWHikHGfjkbnCcdfiBOr" />
            </div>
            <div>
              <div className="text-[0.7rem] text-primary-container font-black tracking-widest uppercase mb-2">New Release</div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Silent Leadership</h3>
              <p className="text-on-surface-variant text-sm">Leading through stoicism and high-stakes decision making.</p>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 flex flex-col gap-6 group">
            <div className="overflow-hidden shadow-2xl">
              <img alt="Book Cover: Frontier Logic" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Front view of a minimalist book design, title in bold gold sans-serif on a deep navy background, sharp professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeuDppPzVupLp9odcolPmKt26EYbJ8Z4ULO90BTsYcnZJInsVMw-A3oos8dzVoULs17IhrVOnYpqRFld2DThs-ALvksMKbVQt3MKjVAVwdqe4Xuwf_prYfpIOaTkBALY7lszHjvzvBN4Gi82KCmszJn529wbVycf6L17dGQKH_-XCEyIwdVHfRgnMs2XyK4BsRa1VumOG_GdDCL1uREi5YccSKYFxfjn1Mn1jFhxYVDs4G1ec89lQ-Z_19WSp8lHso2Uy0b7aok2af" />
            </div>
            <div>
              <div className="text-[0.7rem] text-primary-container font-black tracking-widest uppercase mb-2">Archive</div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Frontier Logic</h3>
              <p className="text-on-surface-variant text-sm">Resource management lessons from high-altitude deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary-container">
        <div className="max-w-[1920px] mx-auto px-12">
          <div className="editorial-grid gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-6">Expertise &amp; <br /> Advisory</h2>
              <p className="text-on-secondary-container text-lg">Customized strategic frameworks built for organizations that demand precision.</p>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

              <div className="bg-surface p-10 flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-primary-container text-4xl" data-icon="groups">groups</span>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-4">Leadership Training</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Cultivating high-resilience teams capable of operating under extreme volatility.</p>
                </div>
              </div>

              <div className="bg-surface p-10 flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-primary-container text-4xl" data-icon="insights">insights</span>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-4">Strategic Advisory</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Developing long-range operational blueprints with calculated risk assessment.</p>
                </div>
              </div>

              <div className="bg-surface p-10 flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-primary-container text-4xl" data-icon="warning">warning</span>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-4">Crisis Management</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Execution protocols for rapid response and organizational stabilization during flux.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}
