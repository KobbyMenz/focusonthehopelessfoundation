import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleNewsletterSubmit = () => {
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setNewsletterEmail("");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to learn more about our work? We'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <p className="text-muted-foreground">info@focusonthehopeless.org</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-phone">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-HOPE</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-address">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Address</h3>
                  <p className="text-muted-foreground">123 Hope Street<br />Compassion City, CC 12345</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-12">
              <h3 className="font-semibold text-primary mb-6">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  data-testid="social-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-12">
              <h3 className="font-semibold text-primary mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates on our mission.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 p-3 rounded-l-lg border border-border focus:ring-2 focus:ring-ring focus:border-transparent"
                  data-testid="input-newsletter-email"
                />
                <button 
                  onClick={handleNewsletterSubmit}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 rounded-r-lg transition-colors duration-300"
                  data-testid="button-newsletter-submit"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleContactSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  data-testid="input-contact-name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  data-testid="input-contact-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">Subject</label>
                <select 
                  value={contactForm.subject}
                  onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  data-testid="select-contact-subject"
                >
                  <option value="">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership Proposal</option>
                  <option value="media">Media Relations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-card-foreground mb-2">Message</label>
                <textarea 
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help or how you'd like to get involved..."
                  data-testid="textarea-contact-message"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105"
                data-testid="button-contact-submit"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
