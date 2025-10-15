import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import hireonLogo from "@/assets/hireon-logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 pt-20 pb-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in flex items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2 border-2 border-primary/20">
              <img src={hireonLogo} alt="Hireon Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
              Hireon
            </h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Bridge the Campus-to-Corporate Gap with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Real Interview Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Empower your students with live mock interviews conducted by real industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" variant="hero" className="group">
              Book a Demo Drive
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Download className="mr-2" />
              Download Brochure
            </Button>
          </div>
          
          <div className="mt-20 w-full animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border/50 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Mock Interviews Conducted</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Partner Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Industry Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
