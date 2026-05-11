export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
        COOKIE <span className="gold-text">POLICY</span>
      </h1>
      
      <div className="prose prose-invert max-w-none text-white/70 space-y-8">
        <p>Last updated: May 11, 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
        </section>

        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-sm">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">The Cookies We Set</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Site Preferences Cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it.
            </li>
            <li>
              <strong>Third Party Cookies:</strong> In some special cases we also use cookies provided by trusted third parties. This site uses Google Analytics and Vercel Analytics for helping us to understand how you use the site and ways that we can improve your experience.
            </li>
            <li>
              <strong>Affiliate Tracking Cookies:</strong> As an affiliate site, we use tracking cookies to identify which brand you have visited from our site. This allows us to receive commission from our partners.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          </p>
        </section>
      </div>
    </div>
  );
}
