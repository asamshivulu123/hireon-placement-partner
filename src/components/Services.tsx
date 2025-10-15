import { Briefcase, MessageCircle, Users, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Mock Technical Interviews",
    description: "Real engineers and technical leads conduct one-on-one mock interviews tailored to industry standards.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: MessageCircle,
    title: "HR Interviews",
    description: "Focused on communication, personality, and soft skills development with experienced HR professionals.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Group Discussions (GD)",
    description: "Practice leadership, clarity, and teamwork in real group settings that mirror corporate scenarios.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Performance Reports & Analytics",
    description: "Individual feedback reports for students and comprehensive insight dashboards for colleges.",
    color: "from-orange-500 to-orange-600",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end mock placement solutions for colleges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl shadow-card hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
