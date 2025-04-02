
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const WorkPage = () => {
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
    
    // Parallax effect for project cards
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add scroll animation
    const animateOnScroll = () => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
          setTimeout(() => {
            (card as HTMLElement).style.opacity = '1';
            (card as HTMLElement).style.transform = 'translateY(0)';
          }, index * 100);
        }
      });
    };
    
    // Initialize scroll animation
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

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
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="pt-32 pb-20 relative">
        <div 
          ref={contentRef} 
          className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <h1 className="text-4xl font-bold mb-4">Our <span className="text-[#5C6AA1]">Work</span></h1>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Explore our portfolio of award-winning designs, innovative web applications, and transformative digital experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card card-3d bg-white rounded-lg shadow-lg overflow-hidden opacity-0 transform translate-y-10 transition-all duration-700"
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg) translateY(10px)` 
                }}
              >
                <div className="h-48" style={{ backgroundColor: `${project.color}10` }}></div>
                <div className="p-6 card-3d-content">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2" 
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600 mt-2">
                    An innovative solution that transformed the client's business and improved user engagement.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center mt-4 font-medium"
                    style={{ color: project.color }}
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
      <Footer />
    </div>
  );
};

export default WorkPage;
