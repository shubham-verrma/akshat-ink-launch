import Hero from "@/components/Hero";
import AuthorSection from "@/components/AuthorSection";
import MediaCoverage from "@/components/MediaCoverage";
import CourseDetails from "@/components/CourseDetails";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AuthorSection />
      <MediaCoverage />
      <CourseDetails />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
};

export default Index;
