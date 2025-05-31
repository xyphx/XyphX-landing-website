import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';

export default function Join() {
  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 blur-3xl rounded-3xl"></div>
            <Card className="bg-black/70 border-purple-500/50 backdrop-blur-sm relative z-10">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text">
                  Ready to Engineer the Future?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Join our team of innovators, AI researchers, and visionary developers as we build the next generation of intelligent systems.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
