import Navigation from '@/components/Navigation';
import VideoHero from '@/components/VideoHero';
import CinematicAbout from '@/components/CinematicAbout';
import TimelineExperience from '@/components/TimelineExperience';
import ShowreelPlayer from '@/components/ShowreelPlayer';
import CinematicPortfolio from '@/components/CinematicPortfolio';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PressKit from '@/components/PressKit';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <VideoHero />
        <CinematicAbout />
        <TimelineExperience />
        <ShowreelPlayer />
        <CinematicPortfolio />
        <TestimonialCarousel />
        <PressKit />
        <ContactForm />
      </main>
    </div>
  );
};

export default Index;
