
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stemTopics = [
    { title: "Science", description: "Discover the natural world through observation and experimentation" },
    { title: "Technology", description: "Explore tools, machinery, and digital systems that solve problems" },
    { title: "Engineering", description: "Learn how to design and build solutions to real-world challenges" },
    { title: "Mathematics", description: "Master the language of numbers, patterns, and logical reasoning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">STEM SIMPLIFIED</h1>
          <p className="text-xl text-gray-700 mb-8">
            Making Science, Technology, Engineering, and Mathematics accessible and engaging for everyone
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Topics Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Explore STEM Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stemTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-700">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{topic.description}</CardDescription>
                <Link to={`/${topic.title.toLowerCase()}`} className="text-indigo-600 font-medium flex items-center mt-4 hover:text-indigo-800">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-sm my-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Why STEM Simplified?</h2>
          <p className="text-lg text-gray-700 mb-4">
            We believe that STEM education should be accessible to everyone, regardless of background or prior knowledge.
            Our platform breaks down complex concepts into easy-to-understand modules, providing interactive learning
            experiences that make STEM subjects engaging and fun.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a student, educator, or lifelong learner, STEM Simplified offers resources to help you
            explore and master STEM topics at your own pace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
