'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function LayoutPreloader() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    // Subtle entrance
    tl.to(bgRef.current, {
      opacity: 0.4,
      scale: 1,
      duration: 3,
      ease: "power2.out"
    })
    .fromTo(nameRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
      "-=2"
    );

    if (!loading) {
      const exitTl = gsap.timeline();
      
      exitTl.to(nameRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.in"
      })
      .to(containerRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "expo.inOut",
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = 'none';
        }
      }, "-=0.4");
    }
  }, { scope: containerRef, dependencies: [loading] });

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Premium Abstract Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 opacity-0 scale-110 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Premium background" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="noise-overlay opacity-[0.05]" />

      <div className="relative z-10 flex flex-col items-center">
        <div ref={nameRef} className="flex flex-col items-center">
          <span className="text-[10px] font-medium tracking-[0.8em] text-violet-500 uppercase mb-4 opacity-80">
            Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-[-0.05em] uppercase text-white mb-8">
            IHSAN <span className="text-zinc-600">RAMADHAN</span>
          </h1>
          
          {/* Elegant minimalist loader */}
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-white/10 relative overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-violet-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em]">
              {percent.toString().padStart(3, '0')}
            </span>
            <div className="w-12 h-[1px] bg-white/10 relative overflow-hidden">
              <div 
                className="absolute right-0 top-0 h-full bg-violet-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/20" />
        <span className="font-mono text-[8px] tracking-[0.4em] uppercase text-zinc-500">
          Est. 2026
        </span>
      </div>
    </div>
  );
}
