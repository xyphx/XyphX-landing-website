'use client';
import { useState } from 'react';
import Navbar from '../components/landing/Navbar';
import About from '../components/landing/About';
import Hero from '../components/landing/Hero';

export default function HomePage() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => setShowAbout((prev) => !prev);

  return (
    <div className="relative">
      <Navbar showAbout={showAbout} toggleAbout={toggleAbout} />
      {showAbout && <About />}
      <Hero />
    </div>
  );
}
