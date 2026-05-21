"use client";

import Image from "next/image";
import { Star, Shield } from "lucide-react";
import { track } from "@vercel/analytics";
import { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
}

const buildUrl = (url: string, gclid?: string) => {
  if (!gclid) return url;
  return `${url}${gclid}`;
};

const BrandCard = ({ brand, index, gclid }: BrandCardProps) => {
  const affiliateUrl = buildUrl(brand.url, gclid);
  
  // Masking logic: Create a display URL based on partner name
  const displayUrl = `https://${brand.name.toLowerCase().replace(/\s+/g, "")}.com`;

  const handleNavigation = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    track("Brand Click", { brand: brand.name });
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  const isFirst = index === 0;

  return (
    <div className="relative pt-3 md:pt-4 w-full">
      {/* Trust Badge - Neon Style */}
      {brand.badgeText && (
        <div className={`absolute top-0 left-4 md:left-8 px-4 py-1.5 ${brand.badgeColor || "bg-neon-purple"} text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-t-md z-10 flex items-center gap-2 shadow-[0_0_15px_rgba(157,0,255,0.4)]`}>
          <Shield size={12} fill="white" className="text-white" />
          {brand.badgeText}
        </div>
      )}

      <div 
        className={`relative bg-[#11081a] rounded-md rounded-tl-none overflow-visible group cursor-pointer p-4 md:p-5 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-300 ${
          isFirst 
            ? "border-2 border-neon-purple shadow-[0_0_25px_rgba(157,0,255,0.2)]" 
            : "border border-white/10 hover:border-neon-purple/50"
        }`}
        onClick={() => handleNavigation()}
      >
        {/* Left Column: Logo - Wrapped in a masked link */}
        <div className="shrink-0 w-48 md:w-56">
          <a 
            href={displayUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative aspect-[2/1] flex items-center justify-center bg-black/40 rounded-lg p-4 border border-white/5 block hover:border-neon-purple/50 transition-colors"
            onClick={(e) => handleNavigation(e)}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        </div>

        {/* Middle Column: Details */}
        <div className="flex flex-col flex-grow text-center md:text-left gap-2">
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-neon-blue transition-colors">
            {brand.bonus}
          </h3>
        </div>

        {/* Right Column: Rating & CTA */}
        <div className="flex flex-col items-center md:items-end gap-4 shrink-0 w-full md:w-auto">
          <div className="flex flex-col items-center md:items-end">
            <span className="text-3xl font-black text-white leading-none group-hover:text-neon-pink transition-colors">{brand.rating.toFixed(1)}</span>
            <div className="flex items-center gap-0.5 my-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < Math.floor(brand.rating / 2) ? "#d4af37" : "none"}
                  className={i < Math.floor(brand.rating / 2) ? "text-[#d4af37]" : "text-white/10"}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-tighter">
              {brand.votes.toLocaleString()} Verified Votes
            </span>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-2">
            <a 
              href={displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button w-full md:w-56 py-4 rounded-md shadow-[0_0_15px_rgba(157,0,255,0.3)] text-center block text-xs md:text-sm"
              onClick={(e) => handleNavigation(e)}
            >
              PLAY AT {brand.name.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
