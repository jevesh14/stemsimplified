
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

const CategoryCard = ({ title, description, icon, path, color }: CategoryCardProps) => {
  return (
    <Link to={path} className="block transition-transform duration-300 hover:scale-105">
      <Card className={`h-full border-2 ${color} shadow-md hover:shadow-lg`}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-blue-100 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mt-auto flex items-center text-blue-600 font-medium">
            Explore <ChevronRight className="h-5 w-5 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
