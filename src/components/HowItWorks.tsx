import { Handshake, Calendar, Users, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Handshake,
    title: "Partner with Hireon",
    description: "Schedule a consultation with our team to understand your college's specific placement needs and goals.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "We Organize the Drive",
    description: "We handle all logistics including scheduling experts, setting up infrastructure, and coordinating timelines.",
  },
  {
    number: "03",
    icon: Users,
    title: "Students Attend Mock Interviews",
    description: "Students participate in realistic interview sessions with industry professionals in their chosen domains.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Get Feedback & Reports",
    description: "Receive comprehensive performance reports with actionable insights for both students and administrators.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Process. <span className="text-primary">Real Impact.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From partnership to placement readiness in four easy steps
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connector Line - Hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 z-0"></div>
                )}
                
                <div className="relative z-10 bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-all duration-500 border border-border/50 hover:-translate-y-2 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
