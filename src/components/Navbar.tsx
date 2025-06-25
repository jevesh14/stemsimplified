import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/LOGO.jpeg" alt="STEM Simplified Logo" className="h-8 w-auto rounded" />
            <span className="text-2xl font-bold text-blue-700">STEM SIMPLIFIED</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/recent-articles" className="text-blue-600 hover:text-blue-800 transition-colors">
            Recent Articles
          </Link>
          <Link to="/article-requests" className="text-blue-600 hover:text-blue-800 transition-colors">
            Article Requests
          </Link>
          <Link to="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
            About
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
