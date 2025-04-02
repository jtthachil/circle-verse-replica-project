
import { ArrowRight, Lightbulb, Code, Smartphone, PenTool, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white p-8 rounded-xl shadow-sm hover:shadow-md">
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
    <section className="py-20 bg-circle-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
