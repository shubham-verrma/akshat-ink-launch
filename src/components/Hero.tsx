import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import { Play, Star, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToPrice = () => {
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
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 15, 5, 0.8), rgba(25, 20, 8, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-20"></div>
      
      <div className="relative z-10 container px-4 mx-auto text-center animate-fade-in-up">
        {/* Social Proof Badges */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 max-w-full overflow-hidden">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-xs md:text-sm whitespace-nowrap">
            <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 fill-current" />
            <a 
              href="https://www.instagram.com/authorakshatgupta/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              1.6M Instagram
            </a>
          </Badge>
          <a
            href="https://www.amazon.in/dp/B0CK3Y94R9?ref=cm_sw_r_ffobk_cp_ud_dp_1ZZBSSREV7QVV5GS2EX7&ref_=cm_sw_r_ffobk_cp_ud_dp_1ZZBSSREV7QVV5GS2EX7&social_share=cm_sw_r_ffobk_cp_ud_dp_1ZZBSSREV7QVV5GS2EX7&bestFormat=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm text-xs md:text-sm whitespace-nowrap hover:bg-secondary/30 transition-colors cursor-pointer">
              <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1" />
              Bestselling Author
            </Badge>
          </a>
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm text-xs md:text-sm whitespace-nowrap">
            <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            Major Podcasts
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4">
          <span className="text-gradient">Transform Your Ideas</span>
          <br />
          <span className="text-foreground">Into Published Stories</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Learn the secrets of fiction and script writing from <strong className="text-primary">Akshat Gupta</strong>, 
          bestselling author of "The Hidden Hindu" series
        </p>

        {/* Course Title */}
        <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 md:p-6 mb-8 max-w-2xl mx-auto shadow-card">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">
            Think to Ink
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Book and Film Writing Masterclass
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
            <span className="text-2xl md:text-3xl font-bold text-primary">₹2,499</span>
            <span className="text-lg md:text-xl text-muted-foreground line-through">₹2,999</span>
            <Badge variant="destructive" className="animate-pulse text-xs md:text-sm">17% OFF</Badge>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-12 px-4">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToPrice}
            className="w-full sm:w-auto text-sm md:text-base"
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Start Writing Today
          </Button>
          <Button 
            variant="outline-glow" 
            size="lg"
            onClick={() => document.getElementById('course-details')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto text-sm md:text-base"
          >
            View Course Details
          </Button>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5000+</div>
            <div className="text-muted-foreground text-sm md:text-base">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">150+</div>
            <div className="text-muted-foreground text-sm md:text-base">Books Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">6</div>
            <div className="text-muted-foreground text-sm md:text-base">Modules</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
            <div className="text-muted-foreground text-sm md:text-base">Lifetime Access</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;