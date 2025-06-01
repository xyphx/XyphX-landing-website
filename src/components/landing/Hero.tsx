import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import useIsMobile from '@/hooks/use-mobile';



export default function Hero() {
 
   const isMobile = useIsMobile();

  const fadeInUp = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.3 :0.8 },
    transition: { duration: 1.5 },
  };
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
         const [isLoaded, setIsLoaded] = useState(false);
       
         useEffect(() => {
           const handleMouseMove = (e: MouseEvent) => {
             setMousePosition({ x: e.clientX, y: e.clientY });
           };
       
           window.addEventListener('mousemove', handleMouseMove);
           setIsLoaded(true);
       
           return () => window.removeEventListener('mousemove', handleMouseMove);
         }, []);
       
         const scrollToSection = (id: string) => {
           document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
         };
  return (
    <div>
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div {...fadeInUp}>
            <div
              className={`transition-all ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative mb-8">
                <img
                  src="/logo_dark.png"
                  alt="XyphX Logo"
                  className="w-64 h-64 mx-auto mb-8"
                />
                <div className="absolute inset-0  blur-xl rounded-full"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
                Welcome to XyphX
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4 text-purple-300">
                Engineering the Future of Tech
              </h2>
              <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
                Crafting Tomorrow's Tech, Today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg group transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("services")}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-700 hover:text-white hover:bg-purple-500/10 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("contact")}
                >
                  Join the Journey
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </div>

        {/* 3D Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-600 rounded-full animate-pulse opacity-80 animation-delay-2000"></div>
      </section>
    </div>
  );
}
