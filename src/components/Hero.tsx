import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import { Play, Star, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToPrice = () => {
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
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-1 fill-current" />
            1.6M Instagram Followers
          </Badge>
          <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 mr-1" />
            Bestselling Author
          </Badge>
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
            <Users className="w-4 h-4 mr-1" />
            Featured on Major Podcasts
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Transform Your Ideas</span>
          <br />
          <span className="text-foreground">Into Published Stories</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Learn the secrets of fiction writing from <strong className="text-primary">Akshat Gupta</strong>, 
          bestselling author of "The Hidden Hindu" series
        </p>

        {/* Course Title */}
        <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 mb-8 max-w-2xl mx-auto shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Think to Ink
          </h2>
          <p className="text-lg text-muted-foreground">
            Book and Film Writing Masterclass
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-3xl font-bold text-primary">₹2,499</span>
            <span className="text-xl text-muted-foreground line-through">₹2,999</span>
            <Badge variant="destructive" className="animate-pulse">17% OFF</Badge>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToPrice}
            className="w-full sm:w-auto"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Writing Today
          </Button>
          <Button 
            variant="outline-glow" 
            size="lg"
            onClick={() => document.getElementById('course-details')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto"
          >
            View Course Details
          </Button>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-muted-foreground">Modules</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-muted-foreground">Assignments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-muted-foreground">Lifetime Access</div>
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