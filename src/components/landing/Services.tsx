import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
export default function Services() {
  return (
    <div>
      <section id="services" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Custom Software Solutions",
                description: "Tailored software development that transforms your business processes and drives digital innovation.",
                details: "From web applications to enterprise solutions, we build scalable software that grows with your business."
              },
              {
                icon: Brain,
                title: "AI Research & Development",
                description: "Cutting-edge AI research that pushes the boundaries of what's possible in machine learning.",
                details: "Our R&D team explores neural networks, deep learning, and emerging AI technologies to solve complex problems."
              },
              {
                icon: Rocket,
                title: "Next-Gen AI Product Development",
                description: "Revolutionary AI products that will reshape industries and redefine human-computer interaction.",
                details: "Building the next generation of intelligent systems that learn, adapt, and evolve with user needs."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">{service.title}</h3>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{service.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-purple-200">{service.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
