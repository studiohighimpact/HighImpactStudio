import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';
import Hero from '@/sections/Hero';
import NavigationCards from '@/sections/NavigationCards';
import VideoPresentation from '@/sections/VideoPresentation';
import WhyChooseUs from '@/sections/WhyChooseUs';
import ProjectsTestimonials from '@/sections/ProjectsTestimonials';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <BackgroundAtoms />
      <Navbar />
      <main>
        <Hero />
        <VideoPresentation />
        <NavigationCards />
        <WhyChooseUs />
        <ProjectsTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
