import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Our Foundation</h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Founded in 2025, Focus on the Hopeless Foundation emerged from a simple yet powerful belief: that hope is not a luxury, but a fundamental human right that every person deserves.
              </p>
              <p>
                Our journey began with a small group of passionate individuals who witnessed the transformative power of hope in their own communities. Today, we've grown into a global movement dedicated to reaching the most vulnerable populations worldwide.
              </p>
              <p>
                Through education, community support, and sustainable development programs, we create pathways to brighter futures while fostering the resilience and dignity of every person we serve.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-8">
              <div className="text-center" data-testid="stat-lives">
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </div>
              <div className="text-center" data-testid="stat-countries">
                <div className="text-3xl font-bold text-accent">25</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center" data-testid="stat-volunteers">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Foundation team working with children" 
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-about-team"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
