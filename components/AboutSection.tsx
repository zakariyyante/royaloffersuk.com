import { ShieldCheck, Award, Lock, Users } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const points = [
    { icon: <ShieldCheck className="text-primary" />, title: "REGULATORY COMPLIANCE", text: "Every institution listed holds a valid UK Gambling Commission license, ensuring the highest standards of player protection." },
    { icon: <Award className="text-primary" />, title: "EXPERT EVALUATION", text: "Our rigorous 50-point inspection process covers everything from fiscal stability to game integrity and payout velocity." },
    { icon: <Lock className="text-primary" />, title: "SECURE TRANSACTIONS", text: "We prioritize platforms with military-grade encryption and a proven track record of safeguarding member assets." },
    { icon: <Users className="text-primary" />, title: "MEMBER ADVOCACY", text: "Our dedicated team acts as a bridge between players and operators, advocating for fair treatment and transparency." },
  ];

  return (
    <section id="about" className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">
            THE <span className="gold-text">INTEGRITY</span> PROTOCOL
          </h2>
          <p className="text-white/50 uppercase tracking-widest leading-loose text-sm font-light">
            Behind every recommendation lies a commitment to absolute transparency and uncompromising safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <div key={i} className="flex gap-6 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                {point.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black tracking-widest uppercase text-sm">{point.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed uppercase tracking-wider">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Gambling Banner */}
        <div className="mt-8 p-6 border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent rounded-sm flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Responsible Gaming</h3>
            <p className="text-white/50 text-xs uppercase tracking-widest leading-relaxed">
              Excellence in gaming requires discipline. We provide the tools and resources necessary to maintain a healthy relationship with entertainment.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-primary font-black text-2xl tracking-tighter">0808 8020 133</span>
            <Link href="https://www.begambleaware.org" target="_blank" className="text-white/40 hover:text-primary text-[10px] font-black uppercase tracking-[0.3em] transition-colors">
              BEGAMBLEAWARE.ORG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
