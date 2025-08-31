import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-accent text-6xl mb-6">
            <i className="fas fa-dove" data-testid="icon-mission-dove"></i>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At Focus on the Hopeless Foundation, we believe that every soul deserves hope. Through our dedicated programs and community partnerships, we work tirelessly to bring smiles to faces around the world, creating lasting positive change in communities that need it most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
