
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  
  const sectionColors = [
    "bg-gradient-to-br from-teal-500 to-rose-200", // Hero gradient
    "bg-rose-50", // Services gradient
    "bg-gradient-to-br from-teal-500 to-rose-200", // Work gradient
    "bg-rose-50", // Testimonials gradient
    "bg-gradient-to-br from-teal-500 to-rose-200", // Contact gradient
  ];

  // Initialize animations on page load
  useEffect(() => {
    // Register sections
    sectionsRef.current = Array.from(document.querySelectorAll('.page-section'));
    
    // Handle scroll effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find which section should be active based on scroll position
      let newActiveSection = 0;
      sectionsRef.current.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - windowHeight / 2) {
          newActiveSection = index;
        }
      });
      
      setActiveSection(newActiveSection);
      
      // Apply stacking effect to sections
      sectionsRef.current.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const scrollProgress = (scrollPosition - sectionTop + windowHeight) / windowHeight;
        
        if (index < newActiveSection) {
          // Sections above the active one - slide up and reduce opacity
          section.style.transform = `translateY(${Math.min(0, -100 * (newActiveSection - index))}px)`;
          section.style.opacity = `${0.7}`;
          section.style.zIndex = `${10 - index}`;
        } else if (index === newActiveSection) {
          // Active section - full visibility
          section.style.transform = 'translateY(0)';
          section.style.opacity = '1';
          section.style.zIndex = '5';
        } else {
          // Sections below the active one - normal position
          section.style.transform = `translateY(0)`;
          section.style.opacity = '1';
          section.style.zIndex = `${1 + index}`;
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
      for (let i = 0; i < 20; i++) {
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
    handleScroll();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen index-container overflow-hidden">
      <Navbar />
      
      <div className={`page-section min-h-screen flex items-center relative overflow-hidden transition-all duration-700 ease-out ${sectionColors[0]}`}>
        <div className="w-full">
          <Hero />
        </div>
      </div>
      
      <div className={`page-section min-h-screen flex items-center relative overflow-hidden transition-all duration-700 ease-out ${sectionColors[1]}`}>
        <div className="stacked-page-content w-full">
          <Services />
        </div>
      </div>
      
      <div className={`page-section min-h-screen flex items-center relative overflow-hidden transition-all duration-700 ease-out ${sectionColors[2]}`}>
        <div className="stacked-page-content w-full">
          <Work />
        </div>
      </div>
      
      <div className={`page-section min-h-screen flex items-center relative overflow-hidden transition-all duration-700 ease-out ${sectionColors[3]}`}>
        <div className="stacked-page-content w-full">
          <Testimonials />
        </div>
      </div>
      
      <div className={`page-section min-h-screen flex items-center relative overflow-hidden transition-all duration-700 ease-out ${sectionColors[4]}`}>
        <div className="stacked-page-content w-full">
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
