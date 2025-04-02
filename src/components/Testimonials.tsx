
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart",
      quote: "Circle transformed our digital presence. Their team delivered a website that perfectly captures our brand and has dramatically improved our conversion rates.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "Innovate Inc",
      quote: "Working with Circle was a game-changer for our company. They understood our needs and delivered a solution that exceeded our expectations.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      position: "Product Owner",
      company: "DigitalFlow",
      quote: "The team at Circle is exceptional. Their attention to detail and creative approach helped us launch our app ahead of schedule with outstanding reviews.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 testimonial-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto md:mx-0">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-circle-yellow text-circle-yellow" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">
                    {currentTestimonial.position}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-circle-purple text-white flex items-center justify-center hover:bg-circle-purple/90 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
