
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">About STEM Simplified</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            STEM Simplified is dedicated to making Science, Technology, Engineering, and Mathematics accessible and engaging for everyone.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to break down complex STEM concepts into easy-to-understand content through three main approaches:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2"><strong>Breakthrough Briefs:</strong> Quick summaries of the latest STEM breakthroughs</li>
            <li className="mb-2"><strong>Delve Deeper:</strong> In-depth explorations of complex topics</li>
            <li className="mb-2"><strong>Games & Fun:</strong> Interactive content to make learning enjoyable</li>
          </ul>
          <p className="text-lg text-gray-700">
            Whether you're a student, educator, or simply curious about the world of STEM, our platform is designed to help you explore and learn at your own pace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
