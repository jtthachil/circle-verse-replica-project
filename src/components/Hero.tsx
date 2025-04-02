
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-circle-purple">Simplifying</span> Digital Experiences For Your Business
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              We help businesses grow, launch products, and build award-winning digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-circle-purple hover:bg-circle-purple/90 text-white px-8 py-6 rounded-full circle-btn">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-circle-purple text-circle-purple hover:bg-circle-purple/10 px-8 py-6 rounded-full">
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
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg mx-auto">
                <div className="w-full h-60 bg-circle-light rounded-lg mb-6"></div>
                <h3 className="text-xl font-semibold mb-2">Digital Product Design</h3>
                <p className="text-gray-600 mb-4">
                  Creating intuitive digital products that users love.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-circle-blue"></div>
                    <div className="w-8 h-8 rounded-full bg-circle-pink"></div>
                    <div className="w-8 h-8 rounded-full bg-circle-orange"></div>
                  </div>
                  <span className="text-sm text-gray-500">+28 Reviews</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-circle-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-circle-blue/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 -right-5 w-10 h-10 bg-circle-pink rounded-full animate-pulse-light"></div>
            <div className="absolute bottom-1/4 left-0 w-12 h-12 bg-circle-purple/30 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Background Shapes */}
      <div className="hidden sm:block absolute top-1/4 left-0 w-24 h-24 bg-circle-blue/10 rounded-full"></div>
      <div className="hidden sm:block absolute bottom-1/3 right-10 w-20 h-20 bg-circle-pink/10 rounded-full"></div>
    </section>
  );
};

export default Hero;
