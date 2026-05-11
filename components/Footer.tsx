import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex flex-col items-center gap-3 group">
            <div className="relative w-64 h-16">
              <Image
                src="/royal-logo.png"
                alt="Royal Offers UK Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Home</Link></li>
              <li><Link href="/about" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">About Us</Link></li>
              <li><Link href="/responsible-gambling" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Responsible Gambling</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Information</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/privacy" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Cookie Policy</Link></li>
              <li><Link href="/contact" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest">Contact Us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Legal Disclaimer</h4>
            <p className="text-white/20 text-[10px] leading-loose uppercase tracking-widest">
              RoyalOffersUK.com operates as an independent authority in the gaming sector. We provide objective evaluations and may receive compensation from listed entities. This platform is strictly for residents of the United Kingdom aged 18 and over.
            </p>
          </div>
        </div>

        {/* Compliance Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 py-6 border-y border-white/5 mb-6 opacity-60 hover:opacity-100 transition-all duration-700">
          <Link href="https://www.begambleaware.org" target="_blank" className="relative w-10 h-10 hover:scale-110 transition-transform">
            <Image src="/18plus.svg" alt="18+" fill className="object-contain" />
          </Link>
          <Link href="https://www.begambleaware.org" target="_blank" className="relative w-32 h-10 hover:scale-105 transition-transform">
            <Image src="/gambleaware.png" alt="GambleAware" fill className="object-contain" />
          </Link>
          <Link href="https://www.gamstop.co.uk" target="_blank" className="relative w-28 h-10 hover:scale-105 transition-transform">
            <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
          </Link>
          <Link href="https://www.gamcare.org.uk" target="_blank" className="relative w-28 h-10 hover:scale-105 transition-transform">
            <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/10 text-[9px] uppercase tracking-[0.4em] font-bold">
            © {currentYear} ROYALOFFERSUK.COM • THE GOLD STANDARD IN GAMING
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
