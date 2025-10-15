import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Hireon made our students confident and interview-ready. The feedback reports were incredibly detailed and actionable.",
    author: "Dr. Rajesh Kumar",
    role: "Placement Officer",
    college: "XYZ Engineering College",
  },
  {
    quote: "The mock interviews with real industry professionals gave our students the edge they needed. Placement rates improved significantly.",
    author: "Prof. Meera Singh",
    role: "Training & Placement Head",
    college: "ABC Institute of Technology",
  },
  {
    quote: "Outstanding service! The analytics dashboard helped us identify gaps and work on them before actual placements.",
    author: "Mr. Arun Patel",
    role: "Dean of Placements",
    college: "PQR University",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from placement officers who trust Hireon
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-2xl transition-all duration-500 border border-border/50 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-border/50 pt-6">
                  <p className="font-bold text-lg mb-1">{testimonial.author}</p>
                  <p className="text-sm text-primary font-semibold mb-1">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
