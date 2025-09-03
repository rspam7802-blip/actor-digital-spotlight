import { Calendar, MapPin, User } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "Hamlet",
      role: "Hamlet",
      venue: "Shakespeare in the Park",
      year: "2024",
      director: "Emma Rodriguez",
      description: "A modern interpretation of Shakespeare's masterpiece, exploring themes of mental health and political corruption in contemporary society.",
      type: "Theater"
    },
    {
      title: "The Glass Menagerie",
      role: "Tom Wingfield",
      venue: "Regional Theater Company",
      year: "2023",
      director: "Michael Chen",
      description: "Tennessee Williams' poignant family drama, bringing raw emotion and authenticity to this timeless American classic.",
      type: "Theater"
    },
    {
      title: "Echoes",
      role: "Lead",
      venue: "Independent Film",
      year: "2023",
      director: "Sarah Mitchell",
      description: "A psychological thriller exploring memory, identity, and the thin line between reality and perception.",
      type: "Film"
    },
    {
      title: "Death of a Salesman",
      role: "Biff Loman",
      venue: "Broadway Revival",
      year: "2022",
      director: "James Wilson",
      description: "Arthur Miller's devastating portrait of the American Dream, delivered with intense emotional depth and complexity.",
      type: "Theater"
    }
  ];

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-4">
            Selected
            <span className="block text-primary font-normal">Works</span>
          </h2>
          <div className="w-24 h-px bg-gradient-accent mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:bg-card/50 transition-dramatic group"
            >
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium text-foreground tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-lg text-primary font-light">
                        as {project.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
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
                      Directed by {project.director}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-dramatic origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg text-primary hover:text-primary-foreground transition-dramatic"
          >
            <span className="font-medium tracking-wider uppercase">Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;