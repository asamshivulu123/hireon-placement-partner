import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experts from "@/components/Experts";
import WhyHireon from "@/components/WhyHireon";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Experts />
      <WhyHireon />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
