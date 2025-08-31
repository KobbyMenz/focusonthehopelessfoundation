export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-accent text-2xl animate-fly">
                <i className="fas fa-dove"></i>
              </div>

              <div className="text-secondary">
                <h1 className="text-xl font-black">FOCUS</h1>
                <p className="text-xs font-normal -mt-1.5">on the hopeless</p>
                <p className="text-sm font-bold -mt-1">FOUNDATION</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Bringing hope to every corner of the world, one smile at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="footer-link-programs"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="footer-link-impact"
                >
                  Impact Stories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Education Access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Community Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Child Welfare
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Sustainable Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-sm opacity-80 mb-4">
              Follow our journey of hope and transformation.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-125"
                data-testid="footer-social-facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-125"
                data-testid="footer-social-twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-125"
                data-testid="footer-social-instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-125"
                data-testid="footer-social-linkedin"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-125"
                data-testid="footer-social-youtube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 md:mb-0">
            © 2025 Focus on the Hopeless Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
