import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = window.location;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4 animate-fade-in">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! This page doesn't exist</p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/items" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Browse Items
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
