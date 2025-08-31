import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    icon: "fas fa-graduation-cap",
    title: "Education Access",
    description: "Providing quality education opportunities to underserved children and communities through scholarship programs and school infrastructure development.",
    id: "education"
  },
  {
    icon: "fas fa-hands-helping",
    title: "Community Support",
    description: "Building stronger communities through food security programs, healthcare access, and emergency relief efforts during times of crisis.",
    id: "community"
  },
  {
    icon: "fas fa-child",
    title: "Child Welfare",
    description: "Protecting and nurturing children through safe housing initiatives, mental health support, and programs that ensure every child can thrive.",
    id: "welfare"
  },
  {
    icon: "fas fa-seedling",
    title: "Sustainable Development",
    description: "Creating long-term solutions through job training, microfinance programs, and environmental conservation initiatives that empower communities.",
    id: "development"
  }
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We focus on four core areas that create sustainable impact and lasting hope in communities worldwide.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              data-testid={`card-program-${program.id}`}
            >
              <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={program.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>
              {/* <button className="text-accent font-semibold hover:underline" data-testid={`link-program-${program.id}`}>
                Learn More →
              </button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
