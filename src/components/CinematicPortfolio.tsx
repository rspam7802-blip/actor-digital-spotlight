import { useState } from 'react';
import { Filter, ExternalLink, Eye, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import PortfolioGallery from './PortfolioGallery';

const CinematicPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      description: "A contemporary drama exploring family secrets and redemption through the lens of a troubled artist.",
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
      description: "Psychological thriller that premiered at Sundance Film Festival to critical acclaim.",
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
      description: "Classical interpretation of Shakespeare's tragedy in an acclaimed outdoor production.",
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
      description: "Drama series exploring contemporary urban life through interconnected storylines.",
      status: "Season 2 Renewed",
      image: "/api/placeholder/400/300"
    }
  ];

  const filteredProductions = activeFilter === 'all' 
    ? featuredProductions 
    : featuredProductions.filter(prod => prod.type.toLowerCase() === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              Portfolio
              <span className="block text-primary font-medium">Gallery</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my professional portfolio featuring theater, film, and television work. Each project represents 
            a unique artistic journey and collaborative experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`group transition-dramatic ${
                activeFilter === category.id 
                  ? "bg-primary text-primary-foreground shadow-dramatic"
                  : "border-border hover:border-primary/50 hover:bg-primary/10"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
              <Badge 
                variant="secondary" 
                className="ml-2 text-xs bg-background/20 text-current border-current/20"
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Productions */}
        <div className="mb-20">
          <h3 className="text-2xl font-cinematic text-foreground mb-12 text-center">
            Featured <span className="text-primary">Productions</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProductions.map((production, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-smooth group overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-primary/20"></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {production.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                      <Eye className="h-4 w-4" />
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
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary group/btn">
                        View Details
                        <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-lg p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-cinematic text-foreground">
              Ready to Create Something
              <span className="block text-primary font-medium">Extraordinary?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Whether you're casting for theater, film, or digital media, I'm excited to explore new creative 
              opportunities and bring compelling characters to life through collaborative storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-dramatic transition-dramatic group"
              >
                Start a Project
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
              >
                Download Portfolio
                <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicPortfolio;