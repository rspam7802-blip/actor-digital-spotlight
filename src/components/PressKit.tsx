import { Download, Camera, FileText, Image, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PressKit = () => {
  const mediaAssets = [
    {
      type: 'Headshots',
      icon: Camera,
      files: [
        { name: 'Professional Headshot - Color.jpg', size: '2.4 MB', format: 'JPG' },
        { name: 'Professional Headshot - B&W.jpg', size: '2.1 MB', format: 'JPG' },
        { name: 'Character Headshot - Dramatic.jpg', size: '2.8 MB', format: 'JPG' },
      ]
    },
    {
      type: 'Production Photos',
      icon: Image,
      files: [
        { name: 'The Glass Garden - Production Stills.zip', size: '12.5 MB', format: 'ZIP' },
        { name: 'Hamlet - Behind the Scenes.zip', size: '8.3 MB', format: 'ZIP' },
        { name: 'Midnight Chronicles - Set Photos.zip', size: '15.2 MB', format: 'ZIP' },
      ]
    },
    {
      type: 'Documents',
      icon: FileText,
      files: [
        { name: 'Acting Resume - 2024.pdf', size: '245 KB', format: 'PDF' },
        { name: 'Biography - Full.pdf', size: '180 KB', format: 'PDF' },
        { name: 'Biography - Short.pdf', size: '95 KB', format: 'PDF' },
      ]
    }
  ];

  const pressLinks = [
    {
      outlet: 'Theater Weekly',
      headline: 'Rising Star Delivers Powerhouse Performance in The Glass Garden',
      date: 'March 2024',
      url: '#'
    },
    {
      outlet: 'Film Industry Daily',
      headline: 'Breakout Performance in Midnight Chronicles Earns Critical Acclaim', 
      date: 'January 2024',
      url: '#'
    },
    {
      outlet: 'Stage & Screen',
      headline: 'Interview: The Method Behind the Magic',
      date: 'December 2023',
      url: '#'
    }
  ];

  return (
    <section id="press" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              Press &
              <span className="block text-primary font-medium">Media Kit</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional media assets and press coverage for industry professionals, casting directors, and media outlets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Media Assets */}
          <div className="space-y-8">
            <h3 className="text-2xl font-cinematic text-foreground mb-6">Download Media Assets</h3>
            
            {mediaAssets.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground">{category.type}</CardTitle>
                      <CardDescription>High-resolution professional assets</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.files.map((file, fileIndex) => (
                    <div key={fileIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth group">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{file.name}</p>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground mt-1">
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.format}</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Bulk Download */}
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-8 text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-medium text-foreground mb-2">Complete Press Kit</h4>
                <p className="text-muted-foreground mb-6">Download all media assets in one package</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-dramatic">
                  Download Complete Kit (25.8 MB)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Press Coverage */}
          <div className="space-y-8">
            <h3 className="text-2xl font-cinematic text-foreground mb-6">Recent Press Coverage</h3>
            
            <div className="space-y-6">
              {pressLinks.map((article, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/30 transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {article.outlet}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h4 className="text-foreground font-medium leading-snug mb-4 group-hover:text-primary transition-smooth">
                      {article.headline}
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto group-hover:translate-x-1 transition-all"
                      asChild
                    >
                      <a href={article.url} className="flex items-center">
                        Read Article
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <Card className="bg-gradient-subtle border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-cinematic text-foreground mb-6">Media Inquiries</h4>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Publicity Contact</p>
                    <p>Sarah Johnson, Entertainment PR</p>
                    <p>sarah@entertainmentpr.com</p>
                    <p>(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Professional Representation</p>
                    <p>Creative Artists Agency</p>
                    <p>talent@caa.com</p>
                    <p>(555) 987-6543</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-6 w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  Request Interview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKit;