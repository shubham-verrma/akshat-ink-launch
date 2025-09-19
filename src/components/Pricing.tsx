import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Award, CreditCard, Smartphone } from "lucide-react";

const Pricing = () => {
  const features = [
    "6 Comprehensive Video Modules (6 Hours)",
    "6 Practical Writing Assignments",
    "Accessible on mobile phone and laptop", 
    "Character Development Worksheets",
    "Plot Structure Frameworks",
    "Publishing Strategy Roadmap",
    "Industry Insider Tips & Secrets",
    "Lifetime Access - No Expiry",
    "Mobile & Desktop Compatible"
  ];

  const handleEnrollNow = () => {
    window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">LIMITED TIME OFFER</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your writing dreams into reality with this limited-time offer. 
              Join thousands who've already started their publishing journey.
            </p>
          </div>

          {/* Main Pricing Card */}
          <Card className="bg-gradient-card border-2 border-primary/30 shadow-golden relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-10 max-w-[90%]">
              <Badge variant="destructive" className="bg-gradient-cta text-white px-3 md:px-6 py-2 text-xs md:text-sm font-bold animate-pulse shadow-lg whitespace-nowrap overflow-hidden text-ellipsis">
                🔥 LIMITED TIME OFFER
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Think to Ink Masterclass
              </CardTitle>
              <p className="text-muted-foreground text-lg mb-6">
                Complete Book & Film Writing Course by Akshat Gupta
              </p>
              
              {/* Pricing */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
                <div className="text-4xl md:text-6xl font-bold text-primary">₹2,499</div>
                <div className="text-center sm:text-right">
                  <div className="text-xl md:text-2xl text-muted-foreground line-through">₹5,000</div>
                  <Badge variant="destructive" className="animate-bounce text-xs">Save ₹2,501</Badge>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Clock className="w-5 h-5" />
                <span>Offer ends in 48 hours!</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Payment Options */}
              <div className="bg-muted/20 rounded-xl p-6 border border-primary/20">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Secure Payment Options
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-card/50 rounded-lg p-3 border border-primary/10">
                    <div className="font-semibold text-sm">Credit/Debit</div>
                    <div className="text-xs text-muted-foreground">All Cards</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-3 border border-primary/10">
                    <div className="font-semibold text-sm">UPI</div>
                    <div className="text-xs text-muted-foreground">Instant</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-3 border border-primary/10">
                    <div className="font-semibold text-sm">Net Banking</div>
                    <div className="text-xs text-muted-foreground">All Banks</div>
                  </div>
                  <div className="bg-card/50 rounded-lg p-3 border border-primary/10">
                    <div className="font-semibold text-sm">Wallets</div>
                    <div className="text-xs text-muted-foreground">Paytm, etc.</div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center bg-muted/10 rounded-xl p-4">
                  <Smartphone className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="font-semibold text-sm">Mobile Friendly</div>
                  <div className="text-xs text-muted-foreground">Learn Anywhere</div>
                </div>
                <div className="text-center bg-muted/10 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-sm">At Your Pace</div>
                  <div className="text-xs text-muted-foreground">Learn When You Want</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full text-base md:text-xl py-4 md:py-6 px-4"
                  onClick={handleEnrollNow}
                >
                  🚀 Enroll Now
                </Button>
                <Button 
                  variant="outline-glow" 
                  size="lg" 
                  className="w-full text-sm px-4"
                  onClick={() => window.open('https://wa.me/917477077189?text=Hi! I have questions about the Think to Ink course', '_blank')}
                >
                  💬 Questions? WhatsApp Us
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="text-center text-sm text-muted-foreground">
                <p>🔒 SSL Secured Payment | 🛡️ 100% Safe & Secure | ⭐ Trusted by 2,500+ Students</p>
              </div>
            </CardContent>
          </Card>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Still thinking? Remember, every bestselling author started with a single step.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="text-sm px-4"
              onClick={handleEnrollNow}
            >
              Take Your First Step
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;