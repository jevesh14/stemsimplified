
import Navbar from "@/components/Navbar";

const Games = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Games & Fun</h1>
        <p className="text-gray-600 mb-8">
          Interactive games and activities to make learning STEM fun.
        </p>
        
        <div className="text-center py-16">
          <p className="text-gray-600">
            Games and activities will appear here after you upload content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
