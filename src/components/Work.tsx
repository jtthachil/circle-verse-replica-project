
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WorkItemProps {
  image: string;
  category: string;
  title: string;
}

const WorkItem = ({ image, category, title }: WorkItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <div className="aspect-[4/3] w-full bg-gray-200 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-circle-yellow font-medium mb-2">{category}</span>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Web Design",
      title: "Financial Dashboard"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "UI/UX Design",
      title: "E-commerce App"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "App Development",
      title: "Fitness Tracker"
    },
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Branding",
      title: "Finance Startup"
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-gray-600">
              We've had the pleasure of working with many amazing clients to create outstanding digital products.
            </p>
          </div>
          <Button className="bg-circle-purple hover:bg-circle-purple/90 text-white px-6 py-2 rounded-full circle-btn self-start">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <WorkItem
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
