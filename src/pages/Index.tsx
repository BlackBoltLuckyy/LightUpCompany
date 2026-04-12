import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Referral from "@/components/sections/Referral";
import Differentials from "@/components/sections/Differentials";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Referral />
      <Differentials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
