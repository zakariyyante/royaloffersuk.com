import Hero from "@/components/Hero";
import BrandCard from "@/components/BrandCard";
import DisclaimerBar from "@/components/DisclaimerBar";
import AboutSection from "@/components/AboutSection";
import MobileModal from "@/components/MobileModal";
import { brands } from "@/app/data/brands";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const gclid = typeof params.gclid === "string" ? params.gclid : undefined;
  
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section id="brands" className="py-4 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                index={index} 
                gclid={gclid} 
              />
            ))}
          </div>
        </div>
      </section>

      <DisclaimerBar />
      
      <AboutSection />

      {/* Mobile Popup Modal */}
      <MobileModal brands={mobileBrands} gclid={gclid} />
    </div>
  );
}
