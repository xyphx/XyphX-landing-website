
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Services from '@/components/landing/Services';
import Vision from '@/components/landing/Vision';
import Roadmap from '@/components/landing/Roadmap';
import Products from '@/components/landing/Products';
import Join from '@/components/landing/Join';
import Footer from '@/components/landing/Footer';
import Background from '@/components/landing/Background';

const Index = () => {


 


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Background />
      <Hero/>
      <About/>
      <Services/>
      <Vision/>
      <Roadmap/>
      <Products/>
      <Join/>
     <Footer/>
    </div>
  );
};

export default Index;
