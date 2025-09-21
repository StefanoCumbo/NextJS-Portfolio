"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React E-Commerce store",
    desc: " A full-stack eCommerce platform developed with React, MongoDB, Express.js, Node.js, and TypeScript. The application features secure JWT authentication, efficient global state management through React Context, and robust TypeScript interfaces for enhanced type safety and seamless API integration across user sessions and cart functionality.",
    img: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://stef-dev-ecommerce.netlify.app/",
    tech: ["React", "MongoDB", "Express.js", "Node.js", "TypeScript"]
  },
  {
    id: 2,
    color: "from-blue-300 to-purple-300",
    title: "UEA Parking Management",
    desc: "Developed a parking management system using React, Node.js, Express.js, and MongoDB. The system featured a responsive UI with interactive charts and dynamic popups, RESTful APIs for real-time data, and secure data storage. It was optimized for high performance in a simulated cloud environment",
    img: "https://images.pexels.com/photos/395537/pexels-photo-395537.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://stef-dev-parking-uea.netlify.app/",
    tech: ["React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    id: 3,
    color: "from-purple-300 to-red-200",
    title: "Children's StoryTeller Ai",
    desc: "An AI-powered storytelling app built with Next.js, Python, and GPTScript to generate personalized stories and images. Features live progress updates during AI generation using the ReadableStream API and Server-Sent Events. Responsive React components were developed with TypeScript and Tailwind CSS, incorporating dynamic state management and error handling for a seamless user experience.",
    img: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg",
    link: "https://screenrec.com/share/LuC2nEzWdS",
    tech: ["Next.js", "Python", "GPTScript", "TypeScript", "Tailwind CSS"]
  }
];

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <motion.div
      className="h-full w-full py-8 sm:py-12 md:py-16 px-2 sm:px-4 overflow-y-auto flex flex-col items-center justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground">
          My Works
        </h1>
        
      </div>

      {/* Main Portfolio Card */}
      <div className="relative w-full max-w-6xl mx-auto mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -300, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card className={`relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br ${currentItem.color}`}>
              <CardContent className="p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content Side */}
                  <div className="order-2 lg:order-1 space-y-6">
                    <motion.h2 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentItem.title}
                    </motion.h2>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      {currentItem.tech.map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-white/20 text-white border-white/30">
                          {tech}
                        </Badge>
                      ))}
                    </motion.div>
                    
                    <motion.p 
                      className="text-white/90 text-base md:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentItem.desc}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link href={currentItem.link}>
                        <Button 
                          size="lg" 
                          className="bg-white/20 hover:bg-white text-white hover:text-gray-800 border border-white/30 backdrop-blur-sm transition-all duration-300"
                        >
                          View Work
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image Side */}
                  <div className="order-1 lg:order-2">
                    <motion.div 
                      className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src={currentItem.img} 
                        alt={currentItem.title}
                        fill
                        className="object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background z-10"
          aria-label="Next project"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mb-8">
        {items.map((_, index) => (
          <Button
            key={index}
            variant={index === currentIndex ? "default" : "outline"}
            size="sm"
            onClick={() => goToProject(index)}
            className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-secondary hover:bg-secondary/80'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={prevProject}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <Button
          onClick={nextProject}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;