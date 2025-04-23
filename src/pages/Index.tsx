
import { Book, GameController, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const categories = [
    {
      title: "Breakthrough Briefs",
      description: "Quick summaries of the latest STEM breakthroughs and discoveries",
      icon: <Book className="h-8 w-8" />,
      path: "/breakthrough-briefs",
      color: "border-blue-400"
    },
    {
      title: "Delve Deeper",
      description: "In-depth articles exploring complex STEM topics and concepts",
      icon: <Layers className="h-8 w-8" />,
      path: "/delve-deeper",
      color: "border-blue-600"
    },
    {
      title: "Games & Fun",
      description: "Interactive games and activities to make learning STEM fun",
      icon: <GameController className="h-8 w-8" />,
      path: "/games",
      color: "border-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Making STEM Simple & Accessible
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Explore Science, Technology, Engineering, and Mathematics through 
            easy-to-understand content designed for everyone
          </p>
        </div>
      </div>

      {/* Main Categories Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10">
          Choose Your Learning Path
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              path={category.path}
              color={category.color}
            />
          ))}
        </div>
      </div>

      {/* Recent Articles Preview */}
      <div className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-sm my-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Recent Articles</h2>
            <a 
              href="/recent-articles" 
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              View all
            </a>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600">
              Articles will be displayed here after you upload content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
