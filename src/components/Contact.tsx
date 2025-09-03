import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siri.chandana.actor@gmail.com",
      href: "mailto:siri.chandana.actor@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/siri_chandana_7"
    },
    {
      icon: Twitter,
      label: "Twitter", 
      href: "https://twitter.com/sirichandana7"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sirichandana"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-4">
            Let's
            <span className="block text-primary font-normal">Connect</span>
          </h2>
          <div className="w-24 h-px bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in collaborating on a project, discussing a role, 
            or simply want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-foreground tracking-wide uppercase mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-smooth"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-medium text-foreground tracking-wide uppercase mb-6">
                Follow
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg flex items-center justify-center transition-dramatic group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Note */}
          <div className="space-y-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-xl font-medium text-foreground tracking-wide uppercase mb-4">
                Professional Inquiries
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  For casting opportunities, collaboration requests, or professional engagements, 
                  please reach out via email with details about your project.
                </p>
                <p className="leading-relaxed">
                  I'm always interested in challenging roles that push creative boundaries and 
                  tell meaningful stories.
                </p>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-8">
              <h3 className="text-xl font-medium text-foreground tracking-wide uppercase mb-4">
                Representation
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Agent:</strong> Agency Name</p>
                <p><strong>Phone:</strong> +1 (555) 987-6543</p>
                <p><strong>Email:</strong> agent@agency.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Siri Chandana. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;