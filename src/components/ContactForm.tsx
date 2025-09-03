import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siri@chandanaactor.com',
      href: 'mailto:siri@chandanaactor.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/sirichandana',
      handle: '@sirichandana'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/sirichandana',
      handle: '@sirichandana'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sirichandana',
      handle: 'Siri Chandana'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              Let's
              <span className="block text-primary font-medium">Connect</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-cinematic text-foreground mb-6">Send a Message</h3>
              <p className="text-muted-foreground">
                Whether you're a director, producer, or casting agent, I'm always excited to discuss new opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="bg-input border-border focus:border-primary transition-smooth"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="bg-input border-border focus:border-primary transition-smooth"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-input border-border focus:border-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
                <Input
                  id="company"
                  placeholder="Your company or organization"
                  className="bg-input border-border focus:border-primary transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project inquiry, collaboration, etc."
                  className="bg-input border-border focus:border-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, timeline, and how you'd like to collaborate..."
                  rows={6}
                  className="bg-input border-border focus:border-primary transition-smooth resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-dramatic transition-dramatic group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-cinematic text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground hover:text-primary transition-smooth font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-cinematic text-foreground mb-6">Follow My Journey</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 hover:bg-card/80 transition-smooth group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <social.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Representation */}
            <div className="bg-gradient-subtle border border-border rounded-lg p-8">
              <h4 className="text-xl font-cinematic text-foreground mb-4">Professional Representation</h4>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Talent Agent</p>
                  <p>Creative Artists Agency</p>
                  <p>Sarah Williams</p>
                  <p>sarah.williams@caa.com</p>
                  <p>(555) 987-6543</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Manager</p>
                  <p>Stellar Management</p>
                  <p>Michael Roberts</p>
                  <p>michael@stellarmanagement.com</p>
                  <p>(555) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Siri Chandana. All rights reserved. • Website designed for artistic excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;