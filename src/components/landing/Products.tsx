import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
export default function Products() {
  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sell My Skills",
                description: "Showcase your skills and connect with potential clients",
                status: "Coming Soon"
              },
              {
                name: "XyphX OS",
                description: "The new way to experience linux for windows users",
                status: "In Development"
              },
              {
                name: "XyphX Agent",
                description: "An AI assistant that helps you with your daily tasks",
                status: "Research Phase"
              }
            ].map((product, index) => (
              <Card key={index} className="bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-purple-500 text-xs px-2 py-1 rounded-full">
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{product.name}</h3>
                  <p className="text-gray-300">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
