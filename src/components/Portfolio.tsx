import { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, User, Play, ExternalLink, Eye } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Hamlet",
      role: "Hamlet",
      venue: "Shakespeare in the Park",
      year: "2024",
      director: "Emma Rodriguez",
      description: "A modern interpretation of Shakespeare's masterpiece, exploring themes of mental health and political corruption in contemporary society.",
      type: "Theater",
      image: portfolio1,
      featured: true
    },
    {
      title: "The Glass Menagerie",
      role: "Tom Wingfield",
      venue: "Regional Theater Company",
      year: "2023", 
      director: "Michael Chen",
      description: "Tennessee Williams' poignant family drama, bringing raw emotion and authenticity to this timeless American classic.",
      type: "Theater",
      image: portfolio2,
      featured: false
    },
    {
      title: "Echoes",
      role: "Lead",
      venue: "Independent Film",
      year: "2023",
      director: "Sarah Mitchell", 
      description: "A psychological thriller exploring memory, identity, and the thin line between reality and perception.",
      type: "Film",
      image: portfolio3,
      featured: true
    },
    {
      title: "Death of a Salesman",
      role: "Biff Loman",
      venue: "Broadway Revival",
      year: "2022",
      director: "James Wilson",
      description: "Arthur Miller's devastating portrait of the American Dream, delivered with intense emotional depth and complexity.",
      type: "Theater",
      image: portfolio4,
      featured: false
    }
  ];

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (hoveredCard === index) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-3d-left');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-gradient-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Floating 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-3d" 
               style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float-3d" 
               style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary-glow/10 rounded-full blur-xl animate-tilt-3d" 
               style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-5xl md:text-7xl font-light text-foreground tracking-wider mb-6 animate-scale-3d">
            Featured
            <span className="block text-primary font-normal bg-gradient-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-accent mx-auto mb-8 animate-flip-3d"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-3d-left" 
             style={{ animationDelay: '0.3s' }}>
            A curated selection of my most impactful performances across theater and film
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              className="portfolio-card group relative overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500"
              style={{
                perspective: 'var(--perspective)',
                transformStyle: 'preserve-3d',
                transform: hoveredCard === index 
                  ? `perspective(var(--perspective)) rotateX(${(mousePosition.y - 250) * 0.02}deg) rotateY(${(mousePosition.x - 250) * 0.02}deg) translateZ(20px)`
                  : 'perspective(var(--perspective)) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                transition: 'transform var(--transition-3d)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              {/* Project Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* 3D Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-6 left-6 transform-gpu group-hover:translate-z-10">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Interactive Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform-gpu group-hover:translate-z-20">
                  <button className="w-16 h-16 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 hover:scale-110 transition-all duration-300 animate-float-3d">
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 relative transform-gpu group-hover:translate-z-10">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-light text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary font-light">
                      as {project.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Metadata */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.venue}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      {project.director}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg text-primary transition-all duration-300 hover:translate-y-1 hover:shadow-glow">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">View Details</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-border hover:border-primary/30 rounded-lg text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-y-1">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index + 100}
              className="portfolio-card group relative overflow-hidden rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:animate-card-hover-3d"
              style={{ 
                perspective: 'var(--perspective)',
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="flex gap-6 p-6">
                {/* Project Thumbnail */}
                <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-primary font-light">as {project.role}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {project.venue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-scale-3d" style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-light text-foreground mb-4">
              Ready to Create Something
              <span className="block text-primary">Extraordinary?</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's collaborate and bring compelling stories to life through powerful performances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:translate-y-1 hover:shadow-dramatic group"
              >
                <span className="tracking-wider uppercase">Start a Project</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 hover:border-secondary/50 text-secondary-foreground rounded-lg font-medium transition-all duration-300 hover:translate-y-1"
              >
                <span className="tracking-wider uppercase">Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;