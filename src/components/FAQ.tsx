import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this course suitable for complete beginners?",
      answer: "Absolutely! This course is designed for writers at all levels. Akshat starts with the fundamentals and gradually builds up to advanced techniques. Whether you've never written a story before or you're looking to improve your existing skills, this course will help you grow."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to the course! Once you enroll, you can watch the videos, download the resources, and revisit the content as many times as you want. There's no time limit or expiry date."
    },
    {
      question: "Are the assignments mandatory?",
      answer: "While assignments are not mandatory, they are highly recommended! Each assignment is carefully designed to help you practice and apply what you've learned. Completing them will significantly accelerate your writing progress."
    },
    {
      question: "Can I access this course on my mobile phone?",
      answer: "Yes! The course is fully mobile-friendly. You can watch the videos, download resources, and complete assignments from any device - smartphone, tablet, laptop, or desktop computer."
    },
    {
      question: "Do I need any special software or tools?",
      answer: "No special software required! You can write using any word processor you're comfortable with - MS Word, Google Docs, or even pen and paper. The course focuses on storytelling techniques, not specific tools."
    },
    {
      question: "What support do I get during the course?",
      answer: "You have access to our WhatsApp support for any technical issues or questions about course content. Our team responds within 24 hours to help you succeed."
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course is self-paced, so you can complete it according to your schedule. Each module is about 1 hour, so you could finish in a weekend or spread it over several weeks - it's entirely up to you!"
    },
    {
      question: "How is this different from free writing content online?",
      answer: "This course offers structured, step-by-step learning from a bestselling author with proven success. You get practical assignments, industry insights, publishing strategies, and a complete writing system - not just random tips and tricks."
    },
    {
      question: "Can I interact with other students?",
      answer: "While this is a self-paced course, we encourage students to connect on social media using our course hashtag. Many students form study groups and share their progress with each other."
    },
    {
      question: "What if I have technical issues accessing the course?",
      answer: "Our support team is here to help! If you face any technical difficulties, you can reach out to us via WhatsApp or email, and we'll resolve your issues quickly."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers! Here are the most common questions 
              about the Think to Ink masterclass.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-card mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/10 rounded-xl bg-card/20 px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions CTA */}
          <div className="text-center bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Get in touch with us directly for any specific 
              questions about the course or your writing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://wa.me/917477077189?text=Hi! I have questions about the Think to Ink course', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </Button>
              <Button 
                variant="outline-glow" 
                size="lg"
                onClick={() => window.open('https://akshatgupta.exlyapp.com/checkout/b0b77c5d-715f-4425-a337-ff5e24a7cf3f', '_blank')}
              >
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm border border-secondary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">99%</div>
              <div className="text-muted-foreground">Issues Resolved</div>
            </div>
            <div className="bg-card/20 backdrop-blur-sm border border-accent/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">5⭐</div>
              <div className="text-muted-foreground">Support Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;