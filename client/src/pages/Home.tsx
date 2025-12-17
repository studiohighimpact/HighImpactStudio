import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';
import Hero from '@/sections/Hero';
import NavigationCards from '@/sections/NavigationCards';
import VideoPresentation from '@/sections/VideoPresentation';
import InteractiveVisual from '@/sections/InteractiveVisual';
import Services from '@/sections/Services';
import WhyChooseUs from '@/sections/WhyChooseUs';
import About from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <BackgroundAtoms />
      <Navbar />
      <main>
        <Hero />
        <NavigationCards />
        <VideoPresentation />
        <InteractiveVisual />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
