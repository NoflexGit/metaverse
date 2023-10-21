import Image from 'next/image';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
  </div>
);

export default Home;
