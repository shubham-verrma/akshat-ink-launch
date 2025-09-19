import { Button } from "@/components/ui/button";
import { BookOpen, X } from "lucide-react";
import { useState } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:bottom-6 md:left-6 md:right-6">
      <div className="relative max-w-md mx-auto">
        <div className="bg-gradient-cta backdrop-blur-md border border-primary/30 rounded-2xl p-4 shadow-cta animate-glow">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="text-center">
            <div className="text-white font-bold text-lg mb-2">
              Limited Time Offer!
            </div>
            <div className="text-white/90 text-sm mb-3">
              ₹2,499 <span className="line-through opacity-70">₹5,000</span>
            </div>
            <Button 
              variant="secondary"
              className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => {
                // Track InitiateCheckout event
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', {
                    content_name: 'Think to Ink Masterclass',
                    content_category: 'Course',
                    value: 2499,
                    currency: 'INR'
                  });
                }
                window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank');
              }}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;