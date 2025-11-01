import { Link, useLocation } from "react-router-dom";
import { Package, Search, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lost & Found
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/items") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/items" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse Items
              </Link>
            </Button>
            
            <Button
              variant={isActive("/report") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link to="/report" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Report Item
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
