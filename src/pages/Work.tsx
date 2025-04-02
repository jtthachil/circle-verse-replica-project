
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";

const WorkPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple fade-in animation on page load
    const content = contentRef.current;
    if (content) {
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div 
          ref={contentRef} 
          className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(20px)' }}
        >
          <h1 className="text-4xl font-bold mb-8">Our Work</h1>
          <p className="text-gray-600 mb-12">
            Our portfolio page is coming soon. Navigate back to the homepage to see our complete design.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkPage;
