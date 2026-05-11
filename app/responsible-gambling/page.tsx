import { HeartHandshake, ShieldAlert, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResponsibleGambling() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase text-center">
        RESPONSIBLE <span className="gold-text">GAMBLING</span>
      </h1>
      
      <div className="prose prose-invert max-w-none text-white/70 space-y-12">
        <section className="bg-red-900/10 border border-red-500/20 p-8 md:p-12 rounded-sm text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30 mx-auto mb-6">
            <ShieldAlert className="text-red-500" size={32} />
          </div>
          <h2 className="text-2xl font-black text-white mb-4 uppercase tracking-widest">A Commitment to Your Safety</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            At Royal Offers UK, we believe that gambling should always be a safe and enjoyable form of entertainment. We are committed to promoting responsible gaming and providing our users with the tools they need to stay in control.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-3">
              <HeartHandshake className="text-neon-pink" />
              Stay in Control
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Set a budget before you start playing.</li>
              <li>Only gamble with money you can afford to lose.</li>
              <li>Never chase your losses.</li>
              <li>Keep track of the time you spend gambling.</li>
              <li>Don&apos;t gamble when you are stressed or upset.</li>
            </ul>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-3">
              <Phone className="text-neon-blue" />
              Need Help?
            </h3>
            <p className="text-sm mb-6">
              If you feel that your gambling is becoming a problem, there are many organizations that can provide free and confidential support.
            </p>
            <div className="p-4 bg-black/40 border border-white/5 rounded-sm">
              <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-1">National Helpline</p>
              <p className="text-2xl font-black text-primary">0808 8020 133</p>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white uppercase tracking-widest text-center">Support Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://www.begambleaware.org" target="_blank" className="bg-white/[0.02] border border-white/5 p-6 rounded-sm hover:border-neon-purple transition-colors group">
              <h4 className="text-white font-bold mb-2 flex items-center justify-between">
                BeGambleAware
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-white/40">Offers free, confidential help and support to anyone worried about gambling.</p>
            </Link>
            <Link href="https://www.gamstop.co.uk" target="_blank" className="bg-white/[0.02] border border-white/5 p-6 rounded-sm hover:border-neon-blue transition-colors group">
              <h4 className="text-white font-bold mb-2 flex items-center justify-between">
                GamStop
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-white/40">A free service that lets you put controls in place to restrict your online gambling.</p>
            </Link>
            <Link href="https://www.gamcare.org.uk" target="_blank" className="bg-white/[0.02] border border-white/5 p-6 rounded-sm hover:border-neon-pink transition-colors group">
              <h4 className="text-white font-bold mb-2 flex items-center justify-between">
                GamCare
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-xs text-white/40">The leading provider of information, advice and support for anyone affected by gambling.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
