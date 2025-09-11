import Hero from "@/components/Hero";
import AuthorSection from "@/components/AuthorSection";
import CourseDetails from "@/components/CourseDetails";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <AuthorSection />
      <CourseDetails />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
