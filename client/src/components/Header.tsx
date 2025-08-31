import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-b border-border fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Animated Dove Icon */}
          <div className="text-accent text-3xl animate-fly" data-testid="logo-dove">
            <i className="fas fa-dove"></i>
          </div>
          <div>
            <div className="text-primary">
              <h1 className="text-xl font-black">FOCUS</h1>
              <p className="text-xs font-normal">on the hopeless</p>
              <p className="text-sm font-bold">FOUNDATION</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('programs')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-programs"
          >
            Programs
          </button>
          <button 
            onClick={() => scrollToSection('impact')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-impact"
          >
            Impact
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </div>
        
        <button 
          onClick={() => scrollToSection('get-involved')}
          className="hidden md:block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform animate-glow"
          data-testid="button-donate-header"
        >
          Donate Now
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection('impact')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-muted-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('get-involved')}
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold w-full"
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
