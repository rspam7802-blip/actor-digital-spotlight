import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage}
          alt="Professional actor portrait"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground tracking-widest uppercase">
              <span className="block">Siri</span>
              <span className="block text-primary font-normal bg-gradient-accent bg-clip-text text-transparent">
                Chandana
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide uppercase">
              Actor • Performer • Artist
            </p>
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg text-primary hover:text-primary-foreground transition-dramatic group backdrop-blur-sm"
            >
              <span className="font-medium tracking-wider uppercase">Discover My Work</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth">
          <span className="text-sm font-light tracking-wider uppercase mb-2">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>

      {/* Atmospheric Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-15" />
    </section>
  );
};

export default Hero;