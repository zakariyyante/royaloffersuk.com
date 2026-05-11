import Link from "next/link";
import { AlertCircle } from "lucide-react";

const DisclaimerBar = () => {
  return (
    <div className="bg-white/[0.02] border-y border-white/5 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 text-primary">
            <AlertCircle size={18} />
            <span className="font-black uppercase tracking-[0.2em] text-xs">MANDATORY 18+ ADVISORY</span>
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed max-w-5xl">
            Gaming involves risk. Participation is strictly limited to individuals 18 years and older. For confidential support and advice, visit{" "}
            <Link href="https://www.begambleaware.org" target="_blank" className="text-primary hover:text-white transition-colors font-bold">
              BEGAMBLEAWARE.ORG
            </Link>{" "}
            or contact the National Gambling Helpline at 0808 8020 133.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBar;
