
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize animations on page load
  useEffect(() => {
    // Scroll animation initialization
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.section-animate');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };
    
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
      
      // Apply parallax to elements
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const depth = (element as HTMLElement).dataset.depth || '1';
        const moveX = x * parseFloat(depth);
        const moveY = y * parseFloat(depth);
        (element as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };
    
    // Add floating dots background
    const container = document.querySelector('.index-container');
    if (container) {
      for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.classList.add('moving-dots');
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animationDuration = `${15 + Math.random() * 30}s`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(dot);
      }
    }
    
    // Run once on initial load
    animateOnScroll();
    
    // Add event listeners
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen index-container overflow-hidden">
      <Navbar />
      <Hero />
      <div className="section-animate">
        <Services />
      </div>
      <div className="section-animate">
        <Work />
      </div>
      <div className="section-animate">
        <Testimonials />
      </div>
      <div className="section-animate">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
