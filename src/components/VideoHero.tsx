import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const VideoHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black">
          <img 
            src={heroImage}
            alt="Professional cinematic actor portrait showcasing dramatic lighting and artistic composition"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinematic font-light text-foreground tracking-wider">
              <span className="block opacity-90">Siri</span>
              <span className="block text-primary font-medium bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
                Chandana
              </span>
            </h1>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
            <p className="text-xl md:text-3xl text-muted-foreground font-light tracking-widest uppercase">
              Actor • Performer • Artist
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-dramatic transition-dramatic group px-8 py-4 text-lg font-medium tracking-wide"
            >
              <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              View Showreel
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:border-primary bg-background/10 hover:bg-primary/10 text-foreground hover:text-primary backdrop-blur-sm transition-dramatic px-8 py-4 text-lg font-medium tracking-wide"
            >
              Explore Portfolio
            </Button>
          </div>

          {/* Artistic Quote */}
          <div className="mt-16 max-w-2xl mx-auto">
            <blockquote className="text-foreground/80 text-lg md:text-xl font-light italic leading-relaxed">
              "Every character is a journey into the depths of human experience, every performance a bridge between souls"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about" 
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-smooth group"
        >
          <span className="text-sm font-light tracking-widest uppercase mb-3 group-hover:tracking-wider transition-all">
            Discover
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Cinematic Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 right-1/3 w-2 h-32 bg-gradient-accent opacity-20 rotate-45" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-24 bg-gradient-accent opacity-15 -rotate-45" />
    </section>
  );
};

export default VideoHero;