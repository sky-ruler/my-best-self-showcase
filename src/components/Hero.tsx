import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-gradient tracking-tight">
            Software Engineer
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            I'm Ritesh Kumar—a developer from Jamshedpur focused on building resilient, 
            high-quality, and thoughtfully designed digital products.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="btn-brand px-8 py-4 text-lg font-semibold group"
              asChild
            >
              <a href="#contact">
                Let's Connect
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;