export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
        ABOUT <span className="gold-text">US</span>
      </h1>
      
      <div className="prose prose-invert max-w-none text-white/70 space-y-8">
        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Royal Offers UK, we are dedicated to providing the most comprehensive and objective guide to the United Kingdom&apos;s premier online gaming destinations. Our mission is to empower players with the knowledge and insights they need to make informed decisions in an ever-evolving digital landscape.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">The Gold Standard of Reviews</h2>
          <p>
            Every brand featured on our platform undergoes a rigorous evaluation process. We don&apos;t just look at the bonuses; we dive deep into the fiscal stability, regulatory compliance, and technological infrastructure of every operator.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verification of UK Gambling Commission licensing.</li>
            <li>In-depth analysis of payout velocities and withdrawal limits.</li>
            <li>Testing of game integrity and RNG certifications.</li>
            <li>Evaluation of mobile responsiveness and user interface design.</li>
          </ul>
        </section>

        <section className="bg-neon-purple/5 border border-neon-purple/20 p-8 rounded-sm">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Independence & Integrity</h2>
          <p>
            While we may receive compensation from the brands listed on our site, our reviews remain strictly independent. Our primary loyalty is to you, the player. We believe that transparency is the foundation of trust, which is why we clearly disclose our affiliate relationships and maintain a strict &quot;Integrity Protocol&quot; for all our content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Our Commitment to Safety</h2>
          <p>
            Gaming should always be a form of entertainment. We are staunch advocates for responsible gambling and work closely with organizations like BeGambleAware and GamStop to ensure our users have access to the resources they need to maintain a healthy relationship with gaming.
          </p>
        </section>
      </div>
    </div>
  );
}
