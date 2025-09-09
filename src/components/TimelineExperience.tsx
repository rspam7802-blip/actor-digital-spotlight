import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TimelineExperience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !timelineLineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Calculate how much of the timeline is visible and scrolled through
      const startOffset = windowHeight * 0.3; // Start animation when timeline is 30% visible
      const endOffset = windowHeight * 0.7; // End when timeline is 70% past top

      if (timelineTop > startOffset) {
        setScrollProgress(0);
      } else if (timelineTop < -timelineHeight + endOffset) {
        setScrollProgress(100);
      } else {
        const visibleProgress = (startOffset - timelineTop) / (timelineHeight - endOffset + startOffset);
        setScrollProgress(Math.max(0, Math.min(100, visibleProgress * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const experiences = [
    {
      year: "2024",
      title: "Lead Role - 'The Glass Garden'",
      company: "Metropolitan Theater Company",
      location: "New York, NY",
      type: "Theater",
      description: "Portrayed the complex character of Elena in this contemporary drama about family secrets and redemption.",
      achievements: ["Critics' Choice Award Nomination", "Extended 3-month run", "Standing ovations"]
    },
    {
      year: "2023",
      title: "Supporting Role - 'Midnight Chronicles'",
      company: "Indie Films Studio",
      location: "Los Angeles, CA", 
      type: "Film",
      description: "Dynamic supporting role in psychological thriller that premiered at Sundance Film Festival.",
      achievements: ["Sundance Film Festival Selection", "Best Supporting Actor Nomination"]
    },
    {
      year: "2023",
      title: "Ophelia - 'Hamlet'",
      company: "Shakespeare in the Park",
      location: "Central Park, NY",
      type: "Theater",
      description: "Classical interpretation of Ophelia in this acclaimed outdoor production.",
      achievements: ["Sold-out performances", "Media acclaim", "Director's special recognition"]
    },
    {
      year: "2022",
      title: "Principal Role - 'Urban Stories'",
      company: "Streaming Networks",
      location: "Atlanta, GA",
      type: "Television",
      description: "Recurring character across 8 episodes of critically acclaimed drama series.",
      achievements: ["Emmy consideration", "Fan favorite character", "Season renewal"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Theater': return Users;
      case 'Film': return Award;
      case 'Television': return Calendar;
      default: return MapPin;
    }
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              Professional
              <span className="block text-primary font-medium">Experience</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through diverse roles and productions, showcasing versatility and artistic growth across theater, film, and television.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div 
            ref={timelineLineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10"
          ></div>
          
          {/* Animated Progress Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/60 transition-all duration-300 ease-out"
            style={{ 
              height: `${scrollProgress}%`,
              transform: 'translateX(-50%)'
            }}
          ></div>

          {/* Glowing Orb */}
          <div
            className="absolute left-8 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-glow-orb transform -translate-x-1/2 transition-all duration-300 ease-out"
            style={{
              top: `${scrollProgress}%`,
              boxShadow: `
                0 0 10px hsl(var(--primary)),
                0 0 20px hsl(var(--primary) / 0.6),
                0 0 30px hsl(var(--primary) / 0.4)
              `,
              opacity: scrollProgress > 0 && scrollProgress < 100 ? 1 : 0
            }}
          >
            {/* Inner pulsing core */}
            <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-80"></div>
            
            {/* Outer glow ring */}
            <div 
              className="absolute -inset-2 rounded-full bg-primary/30 animate-ping"
              style={{ animationDuration: '2s' }}
            ></div>
          </div>

          <div className="space-y-16">
            {experiences.map((experience, index) => {
              const Icon = getIcon(experience.type);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'} ml-16 md:ml-0`}>
                    <div className="bg-card border border-border rounded-lg p-8 shadow-elegant hover:shadow-dramatic transition-dramatic group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-primary font-medium text-lg">{experience.year}</span>
                            <div className="w-8 h-0.5 bg-primary/30 mt-1"></div>
                          </div>
                        </div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          {experience.type}
                        </span>
                      </div>

                      {/* Title and Company */}
                      <div className="mb-4">
                        <h3 className="text-xl font-cinematic text-foreground mb-2 leading-tight">
                          {experience.title}
                        </h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                        <div className="flex items-center text-muted-foreground text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Key Achievements</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineExperience;