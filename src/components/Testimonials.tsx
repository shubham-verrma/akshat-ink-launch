import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Priya Sharma",
    role: "Published Author",
    content: "Akshat's course transformed my understanding of storytelling. Within 6 months, I published my first novel!",
    rating: 5,
    initial: "PS"
  }, {
    name: "Rahul Mehta",
    role: "Screenwriter",
    content: "The character development techniques are incredible. My scripts now have depth I never achieved before.",
    rating: 5,
    initial: "RM"
  }, {
    name: "Anita Desai",
    role: "Aspiring Writer",
    content: "From struggling with plots to completing my manuscript - this course is pure gold for any writer.",
    rating: 5,
    initial: "AD"
  }, {
    name: "Vikram Singh",
    role: "Content Creator",
    content: "Akshat breaks down complex storytelling into simple, actionable steps. Highly recommended!",
    rating: 5,
    initial: "VS"
  }, {
    name: "Kavita Rao",
    role: "Literature Student",
    content: "The insights into mythology and modern storytelling are fascinating. Best investment for my writing career.",
    rating: 5,
    initial: "KR"
  }, {
    name: "Arjun Patel",
    role: "Freelance Writer",
    content: "Finally, a course that teaches real-world writing skills. The assignments are incredibly valuable.",
    rating: 5,
    initial: "AP"
  }];
  return <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">What Students Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of successful writers who have transformed their storytelling 
              with Akshat Gupta's proven methodology.
            </p>
            
            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
              </div>
              <span className="text-2xl font-bold text-primary">4.8</span>
              <span className="text-muted-foreground">(1,200+ reviews)</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-card hover:shadow-golden/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-primary/50 flex-shrink-0" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="border-2 border-primary/30">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Social Proof Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-muted-foreground">Books Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Lifetime Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;