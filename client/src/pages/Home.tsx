import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundAtoms from '@/components/layout/BackgroundAtoms';
import Hero from '@/sections/Hero';
import NavigationCards from '@/sections/NavigationCards';
import VideoPresentation from '@/sections/VideoPresentation';
import WhyChooseUs from '@/sections/WhyChooseUs';

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
      </main>
      <Footer />
    </div>
  );
}
