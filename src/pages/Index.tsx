import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import FullPageLayout from '@/components/FullPageLayout';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FullPageLayout>
        <div className="section">
          <Hero />
        </div>
        <div className="section">
          <About />
        </div>
        <div className="section">
          <Portfolio />
        </div>
        <div className="section">
          <Contact />
        </div>
      </FullPageLayout>
    </div>
  );
};

export default Index;
