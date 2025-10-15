import prasadImage from "@/assets/prasad-anmula.jpg";
import vamshiImage from "@/assets/vamshi-krishna.jpg";
import santoshImage from "@/assets/santosh-kumar.jpg";
import tejeshImage from "@/assets/tejesh-venna.jpg";
import { Linkedin } from "lucide-react";

const experts = [
  {
    name: "Prasad Anmula",
    role: "Founder & Director – Risk Guard | Project Manager",
    experience: "17+ yrs Experience",
    description: "Seasoned project leader with 17+ years in managing large-scale initiatives and mentoring future professionals.",
    image: prasadImage,
    quote: "Preparing students for real-world success.",
    linkedIn: "https://www.linkedin.com/in/prasad-anumula",
  },
  {
    name: "Vamshi Krishna Avunoori",
    role: "Senior HR | Co-founder – Zcruit",
    experience: "7+ yrs Experience",
    description: "Experienced HR professional specializing in talent acquisition and organizational development.",
    image: santoshImage,
    quote: "Building the workforce of tomorrow.",
    linkedIn: "https://www.linkedin.com/in/vamshi-krishna-avunoori-03a47516b",
  },
  {
    name: "Santosh Kumar Thota",
    role: "HR Specialist | Founder – Jatayuv AI",
    experience: "2+ yrs Experience",
    description: "HR innovator passionate about integrating AI into recruitment and people management.",
    image: vamshiImage,
    quote: "Innovation meets human potential.",
    linkedIn: "https://www.linkedin.com/in/santosh-kalyan-kumar",
  },
  {
    name: "Tejesh Venna",
    role: "Senior Data Analyst – MassMutual India | Founder – VRA Agritech",
    experience: "4+ yrs Experience",
    description: "Data-driven professional combining analytics and AI to create impactful tech-driven solutions.",
    image: tejeshImage,
    quote: "Data-driven insights for career growth.",
    linkedIn: "https://www.linkedin.com/in/venna-tejesh",
  },
];

const Experts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Industry <span className="text-primary">Experts & Mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real professionals. Real experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl shadow-card hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {expert.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-2">{expert.experience}</p>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {expert.role}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "{expert.quote}"
                </p>
              </div>
              
              <a 
                href={expert.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 z-10"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:underline flex items-center justify-center mx-auto gap-2 group">
            Join as a Mentor
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experts;
