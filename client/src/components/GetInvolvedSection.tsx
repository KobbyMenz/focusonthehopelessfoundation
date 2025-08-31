import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function GetInvolvedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [donationAmount, setDonationAmount] = useState<number | string>("");
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleDonation = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleDonateSubmit = () => {
    if (!donationAmount) {
      toast({
        title: "Amount Required",
        description: "Please select or enter a donation amount.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank You!",
      description: `Your donation of $${donationAmount} helps bring hope to those who need it most.`,
    });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!volunteerForm.name || !volunteerForm.email || !volunteerForm.interest) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Received!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon.",
    });

    setVolunteerForm({ name: "", email: "", interest: "", message: "" });
  };

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your support can change lives. Whether through donations, volunteering, or spreading awareness, every action creates ripples of hope.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-background/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Make a Donation</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <button 
                onClick={() => handleDonation(25)}
                className={`py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  donationAmount === 25 ? 'bg-accent text-accent-foreground' : 'bg-background/20 hover:bg-background/30'
                }`}
                data-testid="button-donate-25"
              >
                $25
              </button>
              <button 
                onClick={() => handleDonation(50)}
                className={`py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  donationAmount === 50 ? 'bg-accent text-accent-foreground' : 'bg-background/20 hover:bg-background/30'
                }`}
                data-testid="button-donate-50"
              >
                $50
              </button>
              <button 
                onClick={() => handleDonation(100)}
                className={`py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  donationAmount === 100 ? 'bg-accent text-accent-foreground' : 'bg-background/20 hover:bg-background/30'
                }`}
                data-testid="button-donate-100"
              >
                $100
              </button>
            </div>
            
            <div className="mb-6">
              <input 
                type="number" 
                placeholder="Custom Amount" 
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="w-full p-4 rounded-lg bg-background/20 border border-background/30 placeholder-primary-foreground/70 text-primary-foreground"
                data-testid="input-custom-amount"
              />
            </div>
            
            <button 
              onClick={handleDonateSubmit}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 animate-glow"
              data-testid="button-donate-submit"
            >
              <i className="fas fa-heart mr-2"></i>
              Donate Now
            </button>
            
            <div className="text-center mt-4 text-sm opacity-80">
              <i className="fas fa-shield-alt mr-1"></i>
              Secure donation processing
            </div>
          </motion.div>
          
          {/* Volunteer Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Become a Volunteer</h3>
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={volunteerForm.name}
                  onChange={(e) => setVolunteerForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-4 rounded-lg bg-background/20 border border-background/30 placeholder-primary-foreground/70 text-primary-foreground"
                  data-testid="input-volunteer-name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={volunteerForm.email}
                  onChange={(e) => setVolunteerForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-4 rounded-lg bg-background/20 border border-background/30 placeholder-primary-foreground/70 text-primary-foreground"
                  data-testid="input-volunteer-email"
                />
              </div>
              <div>
                <select 
                  value={volunteerForm.interest}
                  onChange={(e) => setVolunteerForm(prev => ({ ...prev, interest: e.target.value }))}
                  className="w-full p-4 rounded-lg bg-background/20 border border-background/30 text-primary-foreground"
                  data-testid="select-volunteer-interest"
                >
                  <option value="">Choose your interest</option>
                  <option value="education">Education Programs</option>
                  <option value="community">Community Outreach</option>
                  <option value="fundraising">Fundraising Events</option>
                  <option value="admin">Administrative Support</option>
                </select>
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about yourself and your availability" 
                  rows={4}
                  value={volunteerForm.message}
                  onChange={(e) => setVolunteerForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full p-4 rounded-lg bg-background/20 border border-background/30 placeholder-primary-foreground/70 text-primary-foreground resize-none"
                  data-testid="textarea-volunteer-message"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-background text-primary py-4 rounded-lg font-bold text-lg hover:bg-background/90 transition-all duration-300 hover:scale-105"
                data-testid="button-volunteer-submit"
              >
                <i className="fas fa-hands-helping mr-2"></i>
                Join Our Team
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
