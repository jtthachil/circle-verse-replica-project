
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const ServicesPage = () => {
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
    
    // Parallax effect for service cards
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
      
      // Additional effect for cards
      const cards = document.querySelectorAll('.service-card-3d');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to card center
        const distanceX = (e.clientX - cardCenterX) / (window.innerWidth / 2) * 10;
        const distanceY = (e.clientY - cardCenterY) / (window.innerHeight / 2) * 10;
        
        (card as HTMLElement).style.transform = `perspective(1000px) rotateY(${distanceX}deg) rotateX(${-distanceY}deg)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Add scroll animation
    const animateOnScroll = () => {
      const serviceCards = document.querySelectorAll('.service-main-card');
      serviceCards.forEach((card, index) => {
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

  const services = [
    {
      title: "UI/UX Design",
      description: "Create intuitive, beautiful interfaces that engage users and enhance brand identity.",
      color: "#5C6AA1",
      icon: "✏️"
    },
    {
      title: "Web Development",
      description: "Build responsive, scalable websites and web applications using modern technologies.",
      color: "#E4486C",
      icon: "💻"
    },
    {
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications for iOS and Android.",
      color: "#FDB338",
      icon: "📱"
    },
    {
      title: "Digital Marketing",
      description: "Increase visibility and engagement through strategic digital marketing campaigns.",
      color: "#5C6AA1",
      icon: "📊"
    },
    {
      title: "Brand Strategy",
      description: "Define your brand's identity, values, and positioning in the market.",
      color: "#E4486C",
      icon: "🎯"
    },
    {
      title: "Content Creation",
      description: "Produce engaging content that resonates with your audience and drives conversions.",
      color: "#FDB338",
      icon: "📝"
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
          <h1 className="text-4xl font-bold mb-4">Our <span className="text-[#5C6AA1]">Services</span></h1>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We offer a comprehensive range of digital services to help businesses thrive in the digital landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-main-card service-card-3d bg-white rounded-lg shadow-lg overflow-hidden opacity-0 transform translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-2" style={{ backgroundColor: service.color }}></div>
                <div className="p-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-4" 
                    style={{ backgroundColor: `${service.color}10`, color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-6 relative h-10 overflow-hidden">
                    <div className="stacked-pages w-full h-1 bg-gray-100">
                      <div className="stacked-page w-full h-full" style={{ backgroundColor: `${service.color}20` }}></div>
                      <div className="stacked-page w-4/5 h-full" style={{ backgroundColor: `${service.color}40` }}></div>
                      <div className="stacked-page w-3/5 h-full" style={{ backgroundColor: service.color }}></div>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center mt-4 font-medium"
                    style={{ color: service.color }}
                  >
                    Learn More 
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 relative">
            <div className="bg-[#F3F5FF] rounded-lg p-8 sm:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you bring your vision to life. Get in touch with us to discuss your project.
                </p>
                <button 
                  className="bg-[#5C6AA1] hover:bg-[#5C6AA1]/90 text-white px-8 py-3 rounded-full inline-flex items-center"
                >
                  <span>Contact Us</span>
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div 
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#FDB338]/10 rounded-full blur-xl mouse-parallax"
              style={{ transform: `translateX(${mousePosition.x * 0.05}px) translateY(${mousePosition.y * 0.05}px)` }}
            ></div>
            <div 
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5C6AA1]/10 rounded-full blur-xl mouse-parallax"
              style={{ transform: `translateX(${-mousePosition.x * 0.08}px) translateY(${-mousePosition.y * 0.08}px)` }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
