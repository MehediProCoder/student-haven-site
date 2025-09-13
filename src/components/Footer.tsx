import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Notice Board", href: "#notices" },
    { name: "Contact", href: "#contact" },
  ];

  const academics = [
    { name: "Undergraduate Programs", href: "#" },
    { name: "Graduate Programs", href: "#" },
    { name: "Research", href: "#" },
    { name: "Library", href: "#" },
    { name: "Academic Calendar", href: "#" },
    { name: "Student Services", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/assets/JGC-logo.png" 
                alt="Jahangirpur Government College Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Jahangirpur Government College</h3>
                <p className="text-sm text-primary-foreground/80">Excellence in Education</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Established in 1850, Jahangirpur Government College has been a beacon of educational 
              excellence, nurturing minds and building character for over a century.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary" asChild>
                <a href="https://facebook.com/jgcollege" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary" asChild>
                <a href="https://twitter.com/jgcollege" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary" asChild>
                <a href="https://instagram.com/jgcollege" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary" asChild>
                <a href="https://youtube.com/@jgcollege" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-6">Academics</h4>
            <ul className="space-y-3">
              {academics.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Jahangirpur, Bogura<br />
                    Bangladesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">+880-51-61234</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">info@jgc.edu.bd</span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Sat - Thu: 9:00 AM - 5:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Jahangirpur Government College. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;