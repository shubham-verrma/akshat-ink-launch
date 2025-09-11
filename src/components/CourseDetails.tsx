import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import courseModules from "@/assets/course-modules.jpg";
import { BookOpen, FileText, Clock, CheckCircle, Play, Award } from "lucide-react";

const CourseDetails = () => {
  const modules = [
    {
      title: "Unveiling the Fiction Writer Within",
      description: "Discover your unique writing voice and creative potential",
      duration: "2 hours",
      assignment: "Self-Discovery Writing Exercise"
    },
    {
      title: "Shaping Your Fictional World",
      description: "Create immersive worlds that captivate your readers",
      duration: "2.5 hours", 
      assignment: "World Building Project"
    },
    {
      title: "Mastering Story Structure & Flow",
      description: "Learn the architecture of compelling narratives",
      duration: "3 hours",
      assignment: "Story Structure Analysis"
    },
    {
      title: "Balancing Emotions and Developing Characters",
      description: "Create multi-dimensional characters that resonate",
      duration: "2.5 hours",
      assignment: "Character Development Portfolio"
    },
    {
      title: "Connecting with Your Audience and Maintaining Writing",
      description: "Build lasting relationships with readers and sustain your craft",
      duration: "2 hours",
      assignment: "Audience Engagement Strategy"
    },
    {
      title: "Enhancing Narration Skills and Understanding Your Audience",
      description: "Master the art of storytelling and reader psychology",
      duration: "2 hours",
      assignment: "Narration Improvement Project"
    }
  ];

  const features = [
    "Pre-recorded video lessons for lifetime access",
    "Downloadable resources and templates",
    "Practical assignments after each module",
    "Industry insights from a bestselling author",
    "Step-by-step writing guidance",
    "Publishing and marketing strategies"
  ];

  return (
    <section id="course-details" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Complete Writing Mastery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 6-module course designed to transform you from a beginner 
              to a confident fiction writer, ready to publish your own bestseller.
            </p>
          </div>

          {/* Course Overview Image */}
          <div className="relative mb-16">
            <img 
              src="/lovable-uploads/f3edb4b3-3d24-4165-9e6b-668788712df9.png" 
              alt="Think To Ink: Book and Film Writing Course with Akshat Gupta"
              className="w-full rounded-2xl shadow-golden border border-primary/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  <Clock className="w-4 h-4 mr-1" />
                  14+ Hours Content
                </Badge>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                  <FileText className="w-4 h-4 mr-1" />
                  6 Assignments
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  <Award className="w-4 h-4 mr-1" />
                  Certificate Included
                </Badge>
              </div>
            </div>
          </div>

          {/* Course Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {modules.map((module, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 shadow-card hover:shadow-golden/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Module {index + 1}
                    </Badge>
                    <Clock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{module.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Play className="w-4 h-4 text-primary" />
                      <span>{module.duration} of content</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-secondary" />
                      <span>{module.assignment}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What You'll Get */}
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What You'll Get in This Course
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="cta" 
                size="xl"
                onClick={() => window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Enroll Now - Limited Time Offer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;