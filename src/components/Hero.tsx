
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for decorative elements
    const decorativeElements = heroRef.current?.querySelectorAll('.decorative-element');
    decorativeElements?.forEach((element) => {
      // Random movement properties for each element
      let speedX = Math.random() * 0.5 + 0.5;
      let speedY = Math.random() * 0.5 + 0.5;
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const directionY = Math.random() > 0.5 ? 1 : -1;
      
      let posX = 0;
      let posY = 0;
      
      // Float animation frame
      const animate = () => {
        posX += speedX * directionX * 0.05;
        posY += speedY * directionY * 0.05;
        
        // Reverse direction at boundaries
        if (Math.abs(posX) > 10) {
          posX = 10 * Math.sign(posX);
          speedX = Math.random() * 0.5 + 0.5;
        }
        
        if (Math.abs(posY) > 10) {
          posY = 10 * Math.sign(posY);
          speedY = Math.random() * 0.5 + 0.5;
        }
        
        (element as HTMLElement).style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    });
    
    // Entrance animation
    const heroContent = heroRef.current?.querySelector('.hero-content');
    const heroImage = heroRef.current?.querySelector('.hero-image');
    
    if (heroContent) {
      heroContent.classList.add('animate-fade-in');
    }
    
    if (heroImage) {
      setTimeout(() => {
        heroImage.classList.add('animate-scale-in');
      }, 300);
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-28 pb-20 relative overflow-hidden bg-[#5C6AA1]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 hero-content opacity-0 transform translate-y-4 transition-all duration-700">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#5C6AA1]">Simplifying</span> Digital Experiences For Your Business
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              We help businesses grow, launch products, and build award-winning digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#5C6AA1] hover:bg-[#5C6AA1]/90 text-white px-8 py-6 rounded-full circle-btn">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-[#5C6AA1] text-[#5C6AA1] hover:bg-[#5C6AA1]/10 px-8 py-6 rounded-full">
                Learn More
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-gray-600">Trusted by:</span>
              <div className="flex space-x-6">
                <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  Brand 1
                </div>
                <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  Brand 2
                </div>
                <div className="w-20 h-10 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                  Brand 3
                </div>
              </div>
            </div>
          </div>
          <div className="relative hero-image opacity-0 transform scale-95 transition-all duration-700">
            <div className="relative z-10">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg mx-auto">
                <div className="w-full h-60 bg-[#F3F5FF] rounded-lg mb-6"></div>
                <h3 className="text-xl font-semibold mb-2">Digital Product Design</h3>
                <p className="text-gray-600 mb-4">
                  Creating intuitive digital products that users love.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#5C6AA1]"></div>
                    <div className="w-8 h-8 rounded-full bg-[#E4486C]"></div>
                    <div className="w-8 h-8 rounded-full bg-[#FDB338]"></div>
                  </div>
                  <span className="text-sm text-gray-500">+28 Reviews</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements with enhanced animation */}
            <div className="decorative-element absolute -top-10 -right-10 w-40 h-40 bg-[#FDB338]/20 rounded-full blur-xl transition-transform duration-3000 ease-in-out"></div>
            <div className="decorative-element absolute -bottom-10 -left-10 w-40 h-40 bg-[#5C6AA1]/20 rounded-full blur-xl transition-transform duration-3000 ease-in-out"></div>
            <div className="decorative-element absolute top-1/2 -right-5 w-10 h-10 bg-[#E4486C] rounded-full animate-pulse-light transition-transform duration-3000 ease-in-out"></div>
            <div className="decorative-element absolute bottom-1/4 left-0 w-12 h-12 bg-[#5C6AA1]/30 rounded-full transition-transform duration-3000 ease-in-out"></div>
          </div>
        </div>
      </div>
      
      {/* Background Shapes with random movement */}
      <div className="decorative-element hidden sm:block absolute top-1/4 left-0 w-24 h-24 bg-[#5C6AA1]/10 rounded-full transition-transform duration-3000 ease-in-out"></div>
      <div className="decorative-element hidden sm:block absolute bottom-1/3 right-10 w-20 h-20 bg-[#E4486C]/10 rounded-full transition-transform duration-3000 ease-in-out"></div>
    </section>
  );
};

export default Hero;
