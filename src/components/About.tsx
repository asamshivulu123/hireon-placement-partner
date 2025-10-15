import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Hireon</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hireon helps colleges make their students placement-ready through real interview 
            experiences conducted by industry experts, HRs, and technical professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower students with the confidence and experience they need to ace real job interviews.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real Experiences</h3>
            <p className="text-muted-foreground">
              Mock interviews that replicate real hiring scenarios with industry professionals.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
            <p className="text-muted-foreground">
              Analytics and feedback that help colleges assess and improve placement readiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
