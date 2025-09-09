import { useState, useEffect, useRef } from 'react';
import { Filter, ExternalLink, Eye, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import PortfolioGallery from './PortfolioGallery';
import ProductionGallery from './ProductionGallery';
import { useScrollAnimation, useStaggeredAnimation, useParallaxEffect } from '@/hooks/useAnimations';

const CinematicPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduction, setSelectedProduction] = useState<any>(null);
  const { registerElement, isVisible } = useScrollAnimation();
  const { visibleItems: visibleProductions, triggerStagger: triggerProductions } = useStaggeredAnimation(4, 200);
  const { getParallaxStyle } = useParallaxEffect();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    registerElement(sectionRef.current, 'portfolio-section');
  }, [registerElement]);

  useEffect(() => {
    if (isVisible('portfolio-section')) {
      const timer = setTimeout(() => triggerProductions(), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible, triggerProductions]);

  const categories = [
    { id: 'all', name: 'All Work', count: 24 },
    { id: 'theater', name: 'Theater', count: 12 },
    { id: 'film', name: 'Film', count: 8 },
    { id: 'television', name: 'Television', count: 4 }
  ];

  const featuredProductions = [
    {
      title: "The Glass Garden",
      type: "Theater",
      year: "2024",
      role: "Elena (Lead)",
      venue: "Metropolitan Theater Company",
      location: "New York, NY",
      description: "A powerful contemporary drama exploring family secrets, redemption, and the healing power of art through the journey of a complex protagonist.",
      status: "Current Production",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Midnight Chronicles",
      type: "Film",
      year: "2023",
      role: "Supporting Lead",
      venue: "Indie Films Studio",
      location: "Los Angeles, CA",
      description: "An intense psychological thriller that premiered at Sundance Film Festival, earning critical acclaim for its nuanced character development.",
      status: "Festival Circuit",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Hamlet",
      type: "Theater",
      year: "2023",
      role: "Ophelia",
      venue: "Shakespeare in the Park",
      location: "Central Park, NY",
      description: "A critically acclaimed interpretation of Shakespeare's timeless tragedy, bringing fresh perspective to this classic outdoor production.",
      status: "Completed Run",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Urban Stories",
      type: "Television",
      year: "2022",
      role: "Recurring Character",
      venue: "Streaming Networks",
      location: "Atlanta, GA",
      description: "An Emmy-considered drama series exploring contemporary urban life through interconnected storylines and compelling characters.",
      status: "Season 2 Renewed",
      image: "/api/placeholder/400/300"
    }
  ];

  const openProductionGallery = (production: any) => {
    setSelectedProduction(production);
  };

  const closeProductionGallery = () => {
    setSelectedProduction(null);
  };

  const filteredProductions = activeFilter === 'all' 
    ? featuredProductions 
    : featuredProductions.filter(prod => prod.type.toLowerCase() === activeFilter);

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 bg-background relative overflow-hidden"
             style={getParallaxStyle(0.05)}>
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-tilt-3d opacity-40" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-morph opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible('portfolio-section') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide animate-text-shimmer bg-gradient-to-r from-foreground via-primary to-foreground bg-300% bg-clip-text">
              Professional
              <span className="block text-primary font-medium animate-premium-glow">Portfolio</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto animate-premium-glow"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my diverse body of work spanning theater, film, and television. Each production represents a unique artistic journey and collaborative creative experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-16 transition-all duration-1000 delay-300 ${
          isVisible('portfolio-section') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`group transition-all duration-500 hover:scale-105 hover:shadow-glow-orb ${
                activeFilter === category.id 
                  ? "bg-primary text-primary-foreground shadow-dramatic animate-premium-glow"
                  : "border-border hover:border-primary/50 hover:bg-primary/10 animate-fade-blur"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Filter className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs bg-background/20 text-current border-current/20 group-hover:animate-pulse"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Productions */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible('portfolio-section') ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className={`text-2xl font-cinematic text-foreground mb-12 text-center bg-gradient-to-r from-foreground via-primary to-foreground bg-300% bg-clip-text transition-all duration-1000 ${
            isVisible('portfolio-section') ? 'animate-text-shimmer' : ''
          }`}>
            Featured <span className="text-primary">Productions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProductions.map((production, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-primary/30 transition-all duration-700 group overflow-hidden hover:animate-card-hover-3d hover:shadow-dramatic ${
                  visibleProductions.has(index) ? 'animate-slide-3d-left' : 'opacity-0 translate-x-20'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden group-hover:animate-premium-glow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 group-hover:from-black/80 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-primary/90 text-primary-foreground group-hover:animate-pulse">
                      {production.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-4 w-4 group-hover:animate-pulse" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-cinematic text-foreground mb-1">{production.title}</h4>
                        <p className="text-primary font-medium">{production.role}</p>
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {production.year}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {production.venue}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {production.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {production.description}
                    </p>

                    <div className="flex justify-between items-center pt-4">
                      <Badge variant="secondary" className="text-xs">
                        {production.status}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-primary hover:text-primary-foreground hover:bg-primary group/btn transition-all duration-300 hover:scale-105 hover:shadow-glow-orb"
                        onClick={() => openProductionGallery(production)}
                      >
                        View Details
                        <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className={`text-center bg-gradient-subtle rounded-lg p-8 md:p-12 mx-4 mb-8 hover:shadow-dramatic transition-all duration-700 hover:scale-[1.01] ${
          isVisible('portfolio-section') ? 'animate-bounceIn' : 'opacity-0 scale-200'
        }`} style={{ animationDelay: '1200ms' }}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-cinematic text-foreground animate-text-shimmer bg-gradient-to-r from-foreground via-primary to-foreground bg-300% bg-clip-text">
              Ready to Collaborate on Your
              <span className="block text-primary font-medium animate-premium-glow">Next Production?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Whether you're casting for theater, film, or digital media, I'm passionate about exploring new creative 
              opportunities and bringing compelling characters to life through meaningful collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-dramatic transition-dramatic group hover:scale-105 hover:animate-premium-glow"
              >
                Start a Conversation
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 group hover:scale-105 hover:shadow-glow-orb transition-all duration-300"
              >
                Download Press Kit
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Production Gallery Modal */}
      {selectedProduction && (
        <ProductionGallery
          isOpen={!!selectedProduction}
          onClose={closeProductionGallery}
          productionTitle={selectedProduction.title}
          productionType={selectedProduction.type}
          productionYear={selectedProduction.year}
          productionCompany={selectedProduction.venue}
          productionLocation={selectedProduction.location}
          productionDescription={selectedProduction.description}
        />
      )}
    </section>
  );
};

export default CinematicPortfolio;
