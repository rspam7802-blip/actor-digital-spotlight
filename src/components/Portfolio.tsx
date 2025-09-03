import PortfolioGallery from './PortfolioGallery';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-subtle overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
              Portfolio
              <span className="block text-primary font-normal bg-gradient-accent bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-accent mx-auto"></div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore my professional portfolio featuring theater, film, and performance work. 
              Each image tells a story of artistic collaboration and creative exploration.
            </p>
          </div>
        </div>

        {/* Portfolio Gallery */}
        <PortfolioGallery />

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-medium text-foreground">
              Ready to 
              <span className="text-primary"> Collaborate</span>?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're casting for theater, film, or digital media, I'm always excited 
              to explore new creative opportunities and bring compelling characters to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Start a Project
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 group"
                asChild
              >
                <a href="/admin">
                  Upload Images
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;