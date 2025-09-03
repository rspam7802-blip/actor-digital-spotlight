import { Award, Theater, Users, GraduationCap, Star, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CinematicAbout = () => {
  const highlights = [
    {
      icon: Theater,
      title: "Stage Mastery",
      description: "Over 50 productions across regional and national theaters, showcasing range from classical to contemporary works."
    },
    {
      icon: Award,
      title: "Critical Recognition",
      description: "Multiple awards and nominations including Critics' Choice and regional theater excellence awards."
    },
    {
      icon: Users,
      title: "Industry Collaboration",
      description: "Trusted collaborator with renowned directors, acclaimed production teams, and fellow artists."
    }
  ];

  const skills = [
    { name: "Classical Theater", level: 95 },
    { name: "Contemporary Drama", level: 92 },
    { name: "Film Acting", level: 88 },
    { name: "Voice & Diction", level: 94 },
    { name: "Movement & Dance", level: 85 },
    { name: "Character Development", level: 96 }
  ];

  const training = [
    {
      institution: "Yale School of Drama",
      degree: "Master of Fine Arts",
      year: "2019",
      focus: "Classical & Contemporary Performance"
    },
    {
      institution: "The Actors Studio",
      degree: "Method Acting Intensive",
      year: "2020",
      focus: "Emotional Memory & Sense Memory"
    },
    {
      institution: "Royal Academy of Dramatic Arts",
      degree: "Shakespeare Conservatory",
      year: "2021",
      focus: "Classical Text & Voice Work"
    }
  ];

  const awards = [
    { year: "2024", award: "Best Actress - Regional Theater Awards", production: "The Glass Garden" },
    { year: "2023", award: "Critics' Choice Nomination", production: "Midnight Chronicles" },
    { year: "2023", award: "Outstanding Performance - Shakespeare Festival", production: "Hamlet" },
    { year: "2022", award: "Rising Star Award - Theater Guild", production: "Multiple Productions" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              About
              <span className="block text-primary font-medium">The Artist</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="text-xl text-foreground font-light italic leading-relaxed">
                "Every character is a window into the human soul, every performance an opportunity to connect across the boundaries that divide us."
              </p>
              <p>
                With a passion for storytelling that ignited in childhood, I've dedicated my career to bringing 
                complex, multifaceted characters to life across stage and screen. My approach combines rigorous 
                classical training with contemporary sensibilities, creating performances that resonate with 
                modern audiences while honoring the timeless craft of acting.
              </p>
              <p>
                I believe in the transformative power of theater and film to challenge perspectives, inspire 
                empathy, and create moments of profound human connection. Each role presents a new opportunity 
                to explore the depths of human experience and share universal truths through the art of performance.
              </p>
              <p>
                My work spans from intimate black box theaters to major film productions, always maintaining 
                a commitment to authenticity, collaboration, and artistic excellence that drives every creative choice.
              </p>
            </div>

            {/* Philosophy */}
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-8">
                <h4 className="text-xl font-cinematic text-foreground mb-4">Artistic Philosophy</h4>
                <blockquote className="text-foreground font-light italic leading-relaxed">
                  "The theater is a sacred space where truth and imagination converge, creating moments 
                  of profound human connection. I approach each role not as a performance, but as an 
                  exploration of what it means to be human."
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* Highlights & Skills */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-smooth group"
                >
                  <CardContent className="p-6">
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Visualization */}
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h4 className="text-lg font-cinematic text-foreground mb-6">Core Competencies</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-accent rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Training & Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-cinematic text-foreground mb-12 text-center">
            Training & <span className="text-primary">Education</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {training.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                    {item.year}
                  </Badge>
                  <h4 className="text-lg font-cinematic text-foreground mb-2">{item.degree}</h4>
                  <p className="text-primary font-medium mb-3">{item.institution}</p>
                  <p className="text-sm text-muted-foreground">{item.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-3xl font-cinematic text-foreground mb-12 text-center">
            Awards & <span className="text-primary">Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-smooth group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                      {index === 0 ? <Trophy className="h-6 w-6 text-primary" /> : <Star className="h-6 w-6 text-primary" />}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-foreground leading-tight">{award.award}</h4>
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {award.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground italic">{award.production}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicAbout;