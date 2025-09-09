import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { useScrollAnimation } from '@/hooks/useAnimations';

const ShowreelPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { registerElement, isVisible } = useScrollAnimation();

  useEffect(() => {
    registerElement(sectionRef.current, 'showreel-section');
  }, [registerElement]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section ref={sectionRef} id="showreel" className="py-12 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className={`text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide transition-all duration-700 ${
              isVisible('showreel-section') ? 'animate-text-shimmer' : 'opacity-0 translate-y-8'
            }`}>
              Performance
              <span className="block text-primary font-medium">Showreel</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the range and depth of my performances through this curated selection of scenes and moments.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-dramatic group">
          {/* Placeholder for actual video - using image for now */}
          <div className="relative w-full h-full">
            <img 
              src={heroImage}
              alt="Professional showreel preview showcasing acting range and performance skills"
              className="w-full h-full object-cover"
            />
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-smooth"></div>
            
            {/* Controls Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                onClick={togglePlay}
                className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-dramatic transition-dramatic group/play"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 group-hover/play:scale-110 transition-transform" />
                ) : (
                  <Play className="h-8 w-8 ml-1 group-hover/play:scale-110 transition-transform" />
                )}
              </Button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                {/* Progress Bar */}
                <div className="flex-1 mr-6">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-primary rounded-full"></div>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="text-white hover:text-primary hover:bg-white/10"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleFullscreen}
                    className="text-white hover:text-primary hover:bg-white/10"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden video element for future implementation */}
          <video
            ref={videoRef}
            className="hidden"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            {/* Video source will be added when actual showreel is available */}
          </video>
        </div>

        {/* Showreel Details */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4">
              <Play className="h-5 w-5 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-medium text-foreground mb-1 md:mb-2 leading-tight">Duration</h3>
            <p className="text-xs md:text-base text-muted-foreground leading-tight">
              <span className="md:hidden">3 min 45 sec</span>
              <span className="hidden md:inline">3 minutes 45 seconds</span>
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4">
              <Volume2 className="h-5 w-5 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-medium text-foreground mb-1 md:mb-2 leading-tight">Featured Work</h3>
            <p className="text-xs md:text-base text-muted-foreground leading-tight">
              <span className="md:hidden">Theater, Film & TV</span>
              <span className="hidden md:inline">Theater, Film & Television</span>
            </p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4">
              <Maximize2 className="h-5 w-5 md:h-8 md:w-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-medium text-foreground mb-1 md:mb-2 leading-tight">Quality</h3>
            <p className="text-xs md:text-base text-muted-foreground leading-tight">4K Ultra HD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelPlayer;