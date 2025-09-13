import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsTicker from "@/components/SkillsTicker";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Writings from "@/components/Writings";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pattern-background">
      <Header />
      
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Writings />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
