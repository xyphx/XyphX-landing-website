import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Wrench,
  Brain,
  Rocket,
  Mail,
  Linkedin,
  GithubIcon,
  ChevronDown,
} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile"

export default function Roadmap() {

  const isMobile = useIsMobile();
  
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay },
  viewport: { once: true, amount:isMobile ? 0.3 : 1 },
});


  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Expand Services",
      icon: "🔧",
      description:
        "Scaling our service offerings and building strategic partnerships to serve more clients across diverse industries.",
    },
    {
      phase: "Phase 2",
      title: "Deepen R&D",
      icon: "🧪",
      description:
        "Investing heavily in research, building proprietary algorithms, and developing breakthrough technologies.",
    },
    {
      phase: "Phase 3",
      title: "Launch Tech Products",
      icon: "🛰️",
      description:
        "Releasing revolutionary products that will transform how businesses operate and people interact with technology.",
    },
  ];

  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-purple-400"></div>
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={fadeInUp(index * 0.3).viewport}
                  transition={fadeInUp(index * 0.3).transition}
                  variants={fadeInUp(index * 0.3)}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-4 md:pr-8 text-right" : "pl-4 md:pl-8"
                    }`}
                  >
                    <Card className="bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                      <CardContent className="p-3 md:p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="md:text-2xl">{item.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-purple-300">
                              {item.phase}
                            </h3>
                            <h4 className="text-lg text-white">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
