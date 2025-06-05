import React from 'react'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Wrench, Brain, Rocket, Mail, Linkedin, GithubIcon, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import { useIsMobile} from "@/hooks/use-mobile"
import { collection,getDocs} from "firebase/firestore";
import {db} from "@/configs/firebase"
import { useEffect,useState } from 'react';

export default function Products() {
  
  const isMobile = useIsMobile();
  const [products,setProducts] = useState([]);

  useEffect(()=>{
     const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db,"products"));
      const productList = querySnapshot.docs.map(doc => ({
        id:doc.id,
        ...doc.data()
      }));
      setProducts(productList);
     };

     fetchProducts();


  },[]);

const fadeInUp = {
  initial: { opacity: 0, y: 70 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: isMobile ? 0.3 : 0.8 },
  transition: { duration: 1.5 },
};

  
  return (
    <div>
      <section className="relative z-10 py-20 px-4">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              /* {[
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
            ]*/
              products
                .sort((a, b) => a.rank - b.rank) //sort by rank
                .map((product, index) => (
                  <a href={product.link} target="_blank" rel="noopener noreferrer" key={product.id || index}>
                    <motion.div {...fadeInUp}>
                      <Card className="h-64 bg-black/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group hover:scale-105 backdrop-blur-sm">
                        <CardContent className="p-6 ">
                          <div className="relative mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                              <Brain className="h-8 w-8 text-white" />
                            </div>
                            <span className="absolute -top-2 -right-2 bg-purple-500 text-xs px-2 py-1 rounded-full">
                              {product.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-purple-300">
                            {product.name}
                          </h3>
                          <p className="text-gray-300">{product.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </a>
                ))
            }
          </div>
        </motion.div>
      </section>
    </div>
  );
}
