import { useViewCounter } from "@/hooks/useViewCounter";
import { Eye } from "lucide-react";

interface ViewCounterProps {
  articleId: string;
  className?: string;
}

const ViewCounter = ({ articleId, className = "" }: ViewCounterProps) => {
  const { views, loading } = useViewCounter(articleId);

  if (loading) {
    return (
      <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
        <Eye className="h-4 w-4" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 text-sm text-muted-foreground ${className}`}>
      <Eye className="h-4 w-4" />
      <span>{views} view{views !== 1 ? 's' : ''}</span>
    </div>
  );
};

export default ViewCounter; 