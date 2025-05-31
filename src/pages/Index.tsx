
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';

const Index = () => {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className={`transition-all ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500 text-purple-700 hover:text-white hover:bg-purple-500/10 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Join the Journey
              </Button>
            </div>
          </div>
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

      {/* About Us Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                XyphX is a budding, service-based tech company with a bold ambition — to transform into a revolutionary AI product powerhouse. We're building AI-driven solutions that are smart, futuristic, and ready to redefine industries.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our journey began with a vision to bridge the gap between current technology and the limitless possibilities of artificial intelligence. Today, we stand at the forefront of innovation, crafting solutions that don't just meet today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500/30 to-purple-700/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-400/40 to-purple-600/40 rounded-full"></div>
                <div className="absolute inset-12 flex items-center justify-center">
                  <Brain className="h-32 w-32 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
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
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:scale-110 transition-transform duration-300"></div>
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

      {/* Vision Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-400/10 blur-3xl rounded-full"></div>
            <blockquote className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text relative z-10 leading-relaxed">
              "We're not just building products; we're building the future of Technology."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-purple-400"></div>
            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Expand Services",
                  icon: "🔧",
                  description: "Scaling our service offerings and building strategic partnerships to serve more clients across diverse industries."
                },
                {
                  phase: "Phase 2", 
                  title: "Deepen R&D",
                  icon: "🧪",
                  description: "Investing heavily in research, building proprietary algorithms, and developing breakthrough technologies."
                },
                {
                  phase: "Phase 3",
                  title: "Launch Tech Products",
                  icon: "🛰️",
                  description: "Releasing revolutionary products that will transform how businesses operate and people interact with technology."
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-purple-300">{item.phase}</h3>
                            <h4 className="text-lg text-white">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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

      {/* Join Us Section */}
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

      {/* Footer */}
      <footer id="contact" className="relative z-10 py-12 px-4 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left justify-center items-center">
              <img 
                src="/logo_dark.png" 
                alt="XyphX Logo" 
                className="w-16 h-16 mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-400">Engineering the Future of Tech</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>xyphx.company@gmail.com</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">Connect With Us</h3>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://www.linkedin.com/company/xyphx" target='_blank' className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 gap-2">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                  
                </a>
                <a href="https://github.com/xyphx" target='_blank' className="p-3 bg-purple-600/20 rounded-full hover:bg-purple-600/40 transition-all duration-300 hover:scale-110 gap-2">
                  <GithubIcon className="h-5 w-5 text-purple-400" />
                  
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 XyphX</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
