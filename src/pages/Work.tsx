
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WorkPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
