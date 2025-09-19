import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import authorPortrait from "@/assets/akshat-gupta-portrait.jpg";
import { Instagram, BookOpen, Podcast, Award } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-glow"></div>
              <img 
                src="/lovable-uploads/b33c9521-9b70-4fe6-b4c9-ccef8dc5f3c3.png" 
                alt="Akshat Gupta - Bestselling Author holding The Hidden Hindu books"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-golden border border-primary/20"
              />
              {/* Floating Stats - Mobile optimized */}
              <div className="absolute top-4 right-4 md:-top-4 md:-right-4 z-20 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-xl p-3 md:p-4 shadow-card">
                <div className="text-xl md:text-2xl font-bold text-primary">1.6M+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Followers</div>
              </div>
            </div>

            {/* Author Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Meet <span className="text-gradient">Akshat Gupta</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  The mastermind behind India's most celebrated mythological fiction series
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8">
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-3 md:p-4">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2" />
                  <div className="font-semibold text-sm md:text-base">Bestselling Author</div>
                  <div className="text-xs md:text-sm text-muted-foreground">The Hidden Hindu Series</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-3 md:p-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-secondary mb-2" />
                  <div className="font-semibold text-sm md:text-base">Literary Excellence</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Multiple Awards</div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-xl p-3 md:p-4">
                  <Instagram className="w-6 h-6 md:w-8 md:h-8 text-accent mb-2" />
                  <div className="font-semibold text-sm md:text-base">Social Media Star</div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    <a 
                      href="https://www.instagram.com/authorakshatgupta/?hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      1.6M+ Followers
                    </a>
                  </div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-3 md:p-4">
                  <Podcast className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2" />
                  <div className="font-semibold text-sm md:text-base">Media Personality</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Major Podcasts</div>
                </div>
              </div>

              {/* Podcast Mentions */}
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Featured On:</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Badge 
                    variant="outline" 
                    className="bg-primary/10 text-primary border-primary/30 cursor-pointer hover:bg-primary/20 transition-colors text-xs md:text-sm"
                    onClick={() => window.open('https://youtu.be/B-XQYR-G4Dg?si=fuua38x7jDttUod8', '_blank')}
                  >
                    The Ranveer Show
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="bg-secondary/10 text-secondary border-secondary/30 cursor-pointer hover:bg-secondary/20 transition-colors text-xs md:text-sm"
                    onClick={() => window.open('https://youtu.be/vsax8o_X660?si=yGqh8BVVZIbHa9qY', '_blank')}
                  >
                    Pinkvilla
                  </Badge>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 text-xs md:text-sm">
                    And Many More...
                  </Badge>
                </div>
              </div>

              {/* About Text */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Akshat Gupta has revolutionized Indian mythological fiction with his compelling storytelling 
                and deep understanding of ancient wisdom. His ability to weave modern narratives with timeless 
                truths has made him one of India's most sought-after authors and storytelling experts.
              </p>

              {/* CTA */}
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank')}
              >
                Learn from India's Best selling author
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;