import { Mail, MessageSquare, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase text-center">
        CONTACT <span className="gold-text">US</span>
      </h1>
      
      <p className="text-white/50 text-center uppercase tracking-[0.3em] mb-16 max-w-2xl mx-auto">
        Our dedicated team is here to assist with any inquiries regarding our evaluations or partner institutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
            <Mail className="text-neon-purple" size={24} />
          </div>
          <h3 className="text-white font-black tracking-widest uppercase text-sm">General Inquiries</h3>
          <p className="text-white/40 text-xs uppercase tracking-wider">info@royaloffersuk.com</p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center border border-neon-blue/20">
            <MessageSquare className="text-neon-blue" size={24} />
          </div>
          <h3 className="text-white font-black tracking-widest uppercase text-sm">Partnerships</h3>
          <p className="text-white/40 text-xs uppercase tracking-wider">partners@royaloffersuk.com</p>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
            <ShieldCheck className="text-primary" size={24} />
          </div>
          <h3 className="text-white font-black tracking-widest uppercase text-sm">Compliance</h3>
          <p className="text-white/40 text-xs uppercase tracking-wider">legal@royaloffersuk.com</p>
        </div>
      </div>

      <div className="bg-neon-purple/5 border border-neon-purple/20 p-8 md:p-12 rounded-sm max-w-2xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter text-center">Send a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Full Name</label>
              <input type="text" className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Subject</label>
            <input type="text" className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors" placeholder="How can we help?" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Message</label>
            <textarea rows={4} className="w-full bg-black border border-white/10 rounded-sm px-4 py-3 text-white focus:border-neon-purple outline-none transition-colors" placeholder="Your message here..."></textarea>
          </div>
          <button className="premium-button w-full py-4 rounded-sm shadow-[0_0_15px_rgba(157,0,255,0.3)]">
            SEND INQUIRY
          </button>
        </form>
      </div>
    </div>
  );
}
