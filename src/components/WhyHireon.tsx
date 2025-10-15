import { Award, MessageSquare, BarChart2, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Real Industry Experts",
    description: "Connect with experienced professionals from top companies who know exactly what it takes to succeed.",
  },
  {
    icon: MessageSquare,
    title: "Actionable Feedback",
    description: "Detailed, personalized feedback that students can use to improve their interview performance immediately.",
  },
  {
    icon: BarChart2,
    title: "Placement-Readiness Analytics",
    description: "Comprehensive dashboards showing student performance metrics and readiness indicators.",
  },
  {
    icon: Globe,
    title: "On-Campus & Online Flexibility",
    description: "Choose between on-campus drives or online sessions based on your college's convenience and needs.",
  },
];

const WhyHireon = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Colleges Choose <span className="text-primary">Hireon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading institutions for placement excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireon;
