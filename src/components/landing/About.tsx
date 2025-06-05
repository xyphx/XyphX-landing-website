import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react'
import {motion} from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile";



export default function About() {

  const isMobile = useIsMobile();

  const fadeInUp = {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: isMobile ? 0.3 : 0.8 },
    transition: { duration: 1.5 },
  };


  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <motion.div {...fadeInUp}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  XyphX is a budding, service-based tech company with a bold
                  ambition — to transform into a revolutionary tech product
                  powerhouse. We're building AI-driven solutions that are smart,
                  futuristic, and ready to redefine industries.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our journey began with a vision to bridge the gap between
                  current technology and the limitless possibilities of
                  artificial intelligence. Today, we stand at the forefront of
                  innovation, crafting solutions that don't just meet today's
                  needs but anticipate tomorrow's challenges.
                </p>
              </div>
              <motion.div  {...fadeInUp} className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-full animate-pulse"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-purple-400/40 to-purple-600/40 rounded-full"></div>
                  <div className="absolute inset-12 flex items-center justify-center">
                    <Brain className="h-32 w-32 text-purple-400 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
