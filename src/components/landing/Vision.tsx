import React from 'react'
import { motion } from "framer-motion";
import {useIsMobile } from "@/hooks/use-mobile"

export default function Vision() {

  
     const isMobile = useIsMobile();
  
    const fadeInUp = {
      initial: { opacity: 0, y: 70 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: isMobile ? 0.3 :0.8 },
      transition: { duration: 1.5 },
    };

  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 blur-3xl rounded-full"></div>
            <blockquote className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text relative z-10 leading-relaxed">
              "We're not just building products; we're building the future of Technology."
            </blockquote>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
