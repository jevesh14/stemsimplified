
import Navbar from "@/components/Navbar";

const BreakthroughBriefs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Breakthrough Briefs</h1>
        <p className="text-gray-600 mb-8">
          Quick summaries of the latest STEM breakthroughs and discoveries.
        </p>
        
        <div className="text-center py-16">
          <p className="text-gray-600">
            Articles will appear here after you upload content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakthroughBriefs;
