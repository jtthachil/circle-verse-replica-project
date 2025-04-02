
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-gray-600 mb-8">
              Have a project in mind? Let's talk about how we can help you achieve your goals. Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-circle-purple/10 rounded-full flex items-center justify-center text-circle-purple">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email us</h4>
                  <p className="text-gray-600">hello@circle.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-circle-purple/10 rounded-full flex items-center justify-center text-circle-purple">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-circle-purple/10 rounded-full flex items-center justify-center text-circle-purple">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit us</h4>
                  <p className="text-gray-600">123 Design Street, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Project Discussion" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  className="w-full min-h-[150px]" 
                />
              </div>
              
              <Button className="bg-circle-purple hover:bg-circle-purple/90 text-white px-8 py-6 rounded-full circle-btn w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
