import { Crown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-4 pb-2 md:pt-6 md:pb-3 overflow-hidden">
      {/* Background Image with Neon Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/royal-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Neon Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge Pill - Neon Style */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-white text-[9px] font-black uppercase tracking-[0.2em] mb-2 animate-fade-in shadow-[0_0_15px_rgba(157,0,255,0.2)]">
          <Crown className="text-primary" size={12} />
          UK&apos;s Elite Casino Selection 2026
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-1 tracking-tighter leading-tight">
          THE GOLD <span className="gold-text">STANDARD</span> <br className="hidden md:block" />
          OF <span className="text-neon-blue">UK CASINOS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-white/50 max-w-xl mx-auto uppercase tracking-widest leading-relaxed font-light mb-3">
          Curated excellence. Exclusive rewards. <br />
          The definitive guide to <span className="text-neon-pink">prestigious gaming</span> destinations.
        </p>

        {/* 18+ Disclosure - Neon Style */}
        <div className="flex items-center justify-center gap-3 py-2 px-4 bg-black/40 border border-neon-purple/20 rounded-sm max-w-fit mx-auto shadow-[0_0_10px_rgba(157,0,255,0.1)]">
          <span className="text-red-500 font-black text-xs">18+</span>
          <span className="w-px h-3 bg-white/10" />
          <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">
            Please play responsibly • T&Cs Apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
