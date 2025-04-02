
import { ArrowRight, Lightbulb, Code, Smartphone, PenTool, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, color, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add staggered entrance animation
    const card = cardRef.current;
    if (card) {
      // Add delay based on index for staggered animation
      setTimeout(() => {
        card.classList.add('animate-fade-in');
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
      
      // Add mouse-follow effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on mouse position
        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = -(x - rect.width / 2) / 20;
        
        // Apply subtle 3D rotation
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      
      const handleMouseLeave = () => {
        // Reset transform on mouse leave
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [index]);

  return (
    <div 
      ref={cardRef} 
      className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md opacity-0 transform translate-y-8 transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="link" className="p-0 text-circle-purple font-medium group">
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const sectionElement = sectionRef.current;
    const handleScroll = () => {
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          sectionElement.classList.add('is-visible');
          document.removeEventListener('scroll', handleScroll);
        }
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <PenTool className="text-white h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that delight your customers.",
      color: "bg-circle-purple"
    },
    {
      icon: <Code className="text-white h-6 w-6" />,
      title: "Web Development",
      description: "Building scalable and robust web applications with modern technologies.",
      color: "bg-circle-blue"
    },
    {
      icon: <Smartphone className="text-white h-6 w-6" />,
      title: "App Development",
      description: "Developing cross-platform mobile applications that perform flawlessly.",
      color: "bg-circle-pink"
    },
    {
      icon: <Lightbulb className="text-white h-6 w-6" />,
      title: "Product Strategy",
      description: "Crafting effective product strategies to maximize your business potential.",
      color: "bg-circle-yellow"
    },
    {
      icon: <BarChart className="text-white h-6 w-6" />,
      title: "Digital Marketing",
      description: "Driving growth through targeted and effective digital marketing campaigns.",
      color: "bg-circle-orange"
    },
    {
      icon: <Globe className="text-white h-6 w-6" />,
      title: "Branding",
      description: "Building memorable brands that resonate with your target audience.",
      color: "bg-green-500"
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-circle-light animate-on-scroll">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-8 transition-all duration-500" 
             style={{ opacity: 0, transform: 'translateY(20px)' }}
             ref={el => {
               if (el) {
                 setTimeout(() => {
                   el.style.opacity = '1';
                   el.style.transform = 'translateY(0)';
                 }, 100);
               }
             }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Actually Do</h2>
          <p className="text-gray-600">
            We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
