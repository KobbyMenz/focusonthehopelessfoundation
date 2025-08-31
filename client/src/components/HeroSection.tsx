import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen bg-gradient-to-br from-background via-secondary to-background world-map-bg flex items-center"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-primary font-black">FOCUS</span>
            <span className="text-muted-foreground"> on the Hopeless </span>
            <span className="text-primary font-black">FOUNDATION</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Established 2025
          </motion.div>

          {/* Mission Statement with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-md md:text-1xl lg:text-2xl text-primary mb-2 font-medium"
          >
            <div className="typewriter animate-typewriter">
              Filling our world with smiles, fueling the hope every soul
              deserves.
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-12"
          >
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy children from diverse backgrounds"
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
              data-testid="img-hero-children"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection("get-involved")}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300 animate-glow"
              data-testid="button-donate-hero"
            >
              <i className="fas fa-heart mr-2"></i>
              Donate Now
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300"
              data-testid="button-join-mission"
            >
              <i className="fas fa-hands-helping mr-2"></i>
              Join Our Mission
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
