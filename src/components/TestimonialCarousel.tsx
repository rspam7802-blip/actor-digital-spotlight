import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Siri brings an incredible depth and authenticity to every role. Her dedication to character development is unmatched.",
      author: "Michael Richardson",
      title: "Director, Metropolitan Theater Company",
      production: "The Glass Garden"
    },
    {
      quote: "Working with Siri was transformative. She has this rare ability to find truth in every moment, no matter how complex the scene.",
      author: "Elena Martinez",
      title: "Film Director",
      production: "Midnight Chronicles"
    },
    {
      quote: "Siri's interpretation of Ophelia was both classical and refreshingly modern. She brought new life to this iconic character.",
      author: "James Peterson",
      title: "Artistic Director",
      production: "Shakespeare in the Park"
    },
    {
      quote: "Her professionalism and collaborative spirit make her a joy to work with. Siri elevates every production she's part of.",
      author: "Rebecca Chen",
      title: "Producer",
      production: "Urban Stories"
    },
    {
      quote: "Siri has that rare combination of technical skill and emotional intelligence that makes for truly great acting.",
      author: "David Thompson",
      title: "Acting Coach, Yale School of Drama",
      production: "Training Program"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-cinematic font-light text-foreground tracking-wide">
              Industry
              <span className="block text-primary font-medium">Testimonials</span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-accent mx-auto"></div>
          </div>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from directors, producers, and fellow artists about the collaborative experience and professional excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-12 shadow-elegant">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center space-y-8">
              <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="space-y-2">
                <p className="text-lg font-medium text-primary">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].title}
                </p>
                <p className="text-sm text-muted-foreground/80 italic">
                  {testimonials[currentIndex].production}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
            >
              <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
            >
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating? Let's create something extraordinary together.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-dramatic transition-dramatic"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;