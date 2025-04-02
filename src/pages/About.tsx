
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Simple fade-in animation on page load
    const content = contentRef.current;
    if (content) {
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
    }
    
    // Parallax effect for stacked pages
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Setup moving dots
    const container = document.querySelector('.about-container');
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
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen about-container overflow-hidden">
      <Navbar />
      <div className="pt-32 pb-20 relative">
        <div 
          ref={contentRef} 
          className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <h1 className="text-4xl font-bold mb-8">About <span className="text-[#5C6AA1]">Circle</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                We're a dynamic team of creatives, designers, and developers who create innovative digital experiences that engage and inspire.
              </p>
              
              <p className="text-gray-600">
                Founded in 2014, Circle has been at the forefront of digital design and development, working with brands across the globe to create impactful digital solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-[#5C6AA1]">150+</p>
                  <p className="text-gray-500">Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-[#5C6AA1]">80+</p>
                  <p className="text-gray-500">Happy Clients</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-[#5C6AA1]">32+</p>
                  <p className="text-gray-500">Team Members</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-[#5C6AA1]">14+</p>
                  <p className="text-gray-500">Years of Experience</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] perspective-[1000px]">
              <div 
                className="stacked-pages mx-auto max-w-md h-full"
                style={{
                  transform: `rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)`
                }}
              >
                <div className="stacked-page flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#5C6AA1] rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-gray-600 mt-2">
                      To create meaningful digital experiences that transform businesses.
                    </p>
                  </div>
                </div>
                <div className="stacked-page flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#E4486C] rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                    <p className="text-gray-600 mt-2">
                      Shaping the digital future through innovative solutions.
                    </p>
                  </div>
                </div>
                <div className="stacked-page flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#FDB338] rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold">Our Values</h3>
                    <p className="text-gray-600 mt-2">
                      Innovation, quality, and client satisfaction guide everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
