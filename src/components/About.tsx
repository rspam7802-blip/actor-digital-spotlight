import { Award, Theater, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Theater,
      title: "Stage Experience",
      description: "Over 50 productions across regional and national theaters"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Multiple awards and nominations for outstanding performances"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Worked with renowned directors and acclaimed production teams"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide">
                About
                <span className="block text-primary font-normal">The Artist</span>
              </h2>
              <div className="w-24 h-px bg-gradient-accent"></div>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With a passion for storytelling that began in childhood, I've dedicated my career to bringing 
                complex characters to life across stage and screen. My approach combines classical training 
                with contemporary sensibilities, creating performances that resonate with modern audiences.
              </p>
              <p>
                I believe in the transformative power of theater and film to connect people, challenge 
                perspectives, and inspire change. Each role is an opportunity to explore the human 
                condition and share universal truths through the art of performance.
              </p>
            </div>

            {/* Training & Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground tracking-wide uppercase">
                Training & Education
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Master of Fine Arts, Yale School of Drama</p>
                <p>• Method Acting Intensive, The Actors Studio</p>
                <p>• Shakespeare Conservatory, Royal Academy of Dramatic Arts</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:bg-card/70 transition-smooth group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
              <blockquote className="text-center">
                <p className="text-foreground text-lg font-light italic leading-relaxed">
                  "The theater is a sacred space where truth and imagination converge, 
                  creating moments of profound human connection."
                </p>
                <footer className="mt-4 text-muted-foreground text-sm tracking-wider uppercase">
                  — My Artistic Philosophy
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;