"use client";

import { useEffect, useState } from "react";
import { X, Crown } from "lucide-react";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import DisclaimerBar from "./DisclaimerBar";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

const MobileModal = ({ brands, gclid }: MobileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (gclid && brands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, brands]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-y-auto animate-in fade-in duration-500">
      {/* Modal Header */}
      <div className="sticky top-0 z-[110] bg-black/95 backdrop-blur border-b border-white/5 px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown className="text-primary" size={20} />
          <div className="flex items-baseline leading-none">
            <span className="text-primary font-black text-lg uppercase tracking-tighter">ROYAL</span>
            <span className="text-white font-light text-lg ml-1 tracking-widest uppercase">OFFERS</span>
          </div>
        </div>
        <button 
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "unset";
          }}
          className="p-2 text-white/40 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="p-6 space-y-12 pb-24">
        {/* Hero Text */}
        <div className="text-center pt-8">
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">PREMIUM SELECTION</h2>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-light">Exclusive mobile access for verified users.</p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} gclid={gclid} />
          ))}
        </div>

        <DisclaimerBar />
      </div>
    </div>
  );
};

export default MobileModal;
