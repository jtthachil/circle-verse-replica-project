
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const WorkPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Simple fade-in animation on page load
    const content = contentRef.current;
    if (content) {
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
    }
    
    // Register project cards
    projectRefs.current = Array.from(document.querySelectorAll('.project-card'));
    
    // Parallax effect for project cards
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
      
      // Apply parallax to project cards
      projectRefs.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;
          
          // Calculate distance from mouse to card center (normalized)
          const distanceX = (e.clientX - cardCenterX) / window.innerWidth;
          const distanceY = (e.clientY - cardCenterY) / window.innerHeight;
          
          // Apply rotation based on mouse position relative to card
          card.style.transform = `
            perspective(1000px) 
            rotateY(${distanceX * 10}deg) 
            rotateX(${-distanceY * 10}deg) 
            translateZ(10px)
          `;
        }
      });
    };
    
    // Add scroll animation with stacking effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      projectRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const cardTop = card.offsetTop;
          const parentTop = card.offsetParent ? (card.offsetParent as HTMLElement).offsetTop : 0;
          const absoluteTop = cardTop + parentTop;
          
          // Calculate how far the card is from the center of the viewport
          const distanceFromCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
          const normalizedDistance = distanceFromCenter / (windowHeight / 2);
          
          // Apply scaling and translation based on scroll position
          const scale = 1 - Math.min(0.1, Math.abs(normalizedDistance) * 0.1);
          const translateY = normalizedDistance * -10;
          const translateZ = -Math.abs(normalizedDistance) * 30;
          const opacity = 1 - Math.min(0.3, Math.abs(normalizedDistance) * 0.3);
          
          // Apply stacking effect
          card.style.transform = `
            perspective(1000px) 
            rotateY(${mousePosition.x * 0.01}deg) 
            rotateX(${-mousePosition.y * 0.01}deg) 
            translateY(${translateY}px) 
            translateZ(${translateZ}px) 
            scale(${scale})
          `;
          card.style.opacity = `${opacity}`;
          card.style.zIndex = `${10 - Math.abs(Math.round(normalizedDistance * 10))}`;
        }
      });
    };
    
    // Initialize scroll animation
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleScroll);
    };
  }, [mousePosition.x, mousePosition.y]);

  const projects = [
    {
      title: "E-commerce Redesign",
      category: "UI/UX Design",
      color: "#5C6AA1"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      color: "#E4486C"
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      color: "#FDB338"
    },
    {
      title: "Travel Booking Platform",
      category: "Full-stack Development",
      color: "#5C6AA1"
    },
    {
      title: "Real Estate Marketplace",
      category: "UI/UX & Development",
      color: "#E4486C"
    },
    {
      title: "Educational Platform",
      category: "Web Development",
      color: "#FDB338"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-teal-500 to-rose-200">
      <Navbar />
      <div className="pt-32 pb-20 relative">
        <div 
          ref={contentRef} 
          className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl">
            <h1 className="text-4xl font-bold mb-4">Our <span className="text-[#5C6AA1]">Work</span></h1>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Explore our portfolio of award-winning designs, innovative web applications, and transformative digital experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="project-card card-3d bg-white rounded-lg shadow-lg overflow-hidden transform-gpu transition-all duration-300"
                  ref={el => projectRefs.current[index] = el}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform, opacity'
                  }}
                >
                  <div className="h-48 transform-gpu" style={{ 
                    backgroundColor: `${project.color}10`,
                    transformStyle: 'preserve-3d'
                  }}></div>
                  <div className="p-6 transform-gpu card-3d-content" style={{ 
                    transformStyle: 'preserve-3d', 
                    transform: 'translateZ(30px)'
                  }}>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 transform-gpu" 
                      style={{ 
                        backgroundColor: `${project.color}20`, 
                        color: project.color,
                        transform: 'translateZ(10px)'
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold transform-gpu" style={{ transform: 'translateZ(20px)' }}>{project.title}</h3>
                    <p className="text-gray-600 mt-2 transform-gpu" style={{ transform: 'translateZ(15px)' }}>
                      An innovative solution that transformed the client's business and improved user engagement.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center mt-4 font-medium transform-gpu"
                      style={{ 
                        color: project.color,
                        transform: 'translateZ(25px)'
                      }}
                    >
                      View Project 
                      <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
