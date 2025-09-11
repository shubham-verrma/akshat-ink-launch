import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Final CTA Section */}
      <div className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gradient">Writing Journey</span> Starts Now
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let your stories remain untold. Join the masterclass that has 
            helped thousands turn their ideas into published works.
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank')}
          >
            🚀 Start Your Transformation Today
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Think to Ink</h3>
              <p className="text-muted-foreground">
                Master the art of fiction writing with bestselling author Akshat Gupta. 
                Transform your stories from thoughts to published works.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://instagram.com/akshatgupta', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://youtube.com/akshatgupta', '_blank')}
                >
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => window.open('https://twitter.com/akshatgupta', '_blank')}
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => document.getElementById('course-details')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Course Details
                </button>
                <button 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank')}
                >
                  Pricing
                </button>
                <button 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => window.open('https://wa.me/917477077189?text=Hi! I need support', '_blank')}
                >
                  Support
                </button>
                <button 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => alert('Terms & Conditions')}
                >
                  Terms & Conditions
                </button>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Course Features</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>✓ 6 Video Modules</div>
                <div>✓ 6 Assignments</div>
                <div>✓ Lifetime Access</div>
                <div>✓ Mobile Compatible</div>
                <div>✓ Expert Guidance</div>
                <div>✓ Self-Paced Learning</div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@thinktoink.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+91 99999 99999</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Mumbai, India</span>
                </div>
                <Button 
                  variant="outline-glow" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => window.open('https://wa.me/917477077189?text=Hi! I need help with the course', '_blank')}
                >
                  WhatsApp Support
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/20 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground">
                © {currentYear} Think to Ink Masterclass. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <button 
                  className="hover:text-primary transition-colors"
                  onClick={() => alert('Privacy Policy')}
                >
                  Privacy Policy
                </button>
                <button 
                  className="hover:text-primary transition-colors"
                  onClick={() => alert('Terms & Conditions')}
                >
                  Terms & Conditions
                </button>
                <button 
                  className="hover:text-primary transition-colors"
                  onClick={() => alert('Contact Us')}
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Made with ❤️ for aspiring writers across India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;