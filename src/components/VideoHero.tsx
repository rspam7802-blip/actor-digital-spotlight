import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { useEffect, useState } from 'react';
import { useParallaxEffect } from '@/hooks/useAnimations';

const VideoHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { getParallaxStyle } = useParallaxEffect();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <img 
            src={heroImage}
            alt="Professional cinematic actor portrait showcasing dramatic lighting and artistic composition"
            className="w-full h-full object-cover opacity-40 animate-premium-glow"
            style={getParallaxStyle(0.3)}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60 animate-float-3d" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40 animate-tilt-3d" />
      <div className="absolute top-1/2 right-1/3 w-2 h-32 bg-gradient-accent opacity-20 rotate-45 animate-morph" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-24 bg-gradient-accent opacity-15 -rotate-45 animate-orbit" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 lg:px-8"
           style={getParallaxStyle(-0.1)}>
        <div className={`space-y-8 transition-all duration-2000 ${
          isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-header font-light text-foreground tracking-wider animate-slide-up-stagger">
              <span className={`block opacity-90 transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>Siri</span>
              <span className={`block text-primary font-medium font-display bg-gradient-to-r from-primary via-primary-glow to-primary bg-300% bg-clip-text text-transparent drop-shadow-lg transition-all duration-1000 delay-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                Chandana
              </span>
            </h1>
            <div className={`w-32 h-0.5 bg-gradient-accent mx-auto transition-all duration-1000 delay-1000 ${
              isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
            <p className={`text-lg md:text-xl text-muted-foreground font-light tracking-widest uppercase transition-all duration-1000 delay-1300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Actor • Performer • Artist
            </p>
          </div>

          {/* Call to Actions */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1600 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <Button
              size="lg"
              className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-dramatic transition-dramatic group px-8 py-4 text-lg font-medium tracking-wide hover:scale-105"
            >
              <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              View Showreel
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:border-primary bg-background/10 hover:bg-primary/10 text-foreground hover:text-primary backdrop-blur-sm transition-dramatic px-8 py-4 text-lg font-medium tracking-wide hover:scale-105 hover:shadow-glow-orb"
            >
              Explore Portfolio
            </Button>
          </div>

          {/* Artistic Quote */}
          <div className={`mt-12 max-w-xl mx-auto transition-all duration-1000 delay-1900 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <blockquote className="text-foreground/80 text-base md:text-lg font-light italic leading-relaxed animate-fade-blur">
              "Every character is a journey into the depths of human experience, every performance a bridge between souls"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 delay-2200 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth group animate-float-3d"
        >
          <span className="text-sm font-light tracking-widest uppercase mb-3 group-hover:tracking-wider transition-all">
            Discover
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default VideoHero;