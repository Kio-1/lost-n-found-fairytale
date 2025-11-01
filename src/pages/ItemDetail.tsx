import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, Mail, Phone, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const ItemDetail = () => {
  const { id } = useParams();

  // Mock data - would come from API/database
  const item: {
    id: string;
    name: string;
    description: string;
    location: string;
    type: "lost" | "found";
    image: string;
    date: string;
    category: string;
    contactEmail: string;
    contactPhone: string;
  } = {
    id: "1",
    name: "Black Leather Wallet",
    description: "Black leather wallet with multiple card slots. Contains driver's license and some credit cards. Found near the fountain area.",
    location: "Central Park, near the fountain",
    type: "found",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&auto=format&fit=crop",
    date: "2 days ago",
    category: "Wallet",
    contactEmail: "finder@example.com",
    contactPhone: "(555) 123-4567"
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.name,
        text: `${item.type === "lost" ? "Lost" : "Found"}: ${item.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6 animate-fade-in">
          <Link to="/items" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Items
          </Link>
        </Button>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
              ) : (
                <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-9xl">📦</span>
                </div>
              )}
            </Card>
          </div>
          
          {/* Details Section */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold">{item.name}</h1>
                <Badge
                  variant={item.type === "lost" ? "destructive" : "default"}
                  className="text-sm px-3 py-1"
                >
                  {item.type}
                </Badge>
              </div>
              
              {item.category && (
                <Badge variant="outline" className="mb-4">
                  {item.category}
                </Badge>
              )}
            </div>
            
            <Card className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                  Description
                </h3>
                <p className="text-foreground leading-relaxed">{item.description}</p>
              </div>
              
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium">{item.location}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-muted-foreground">Reported</div>
                    <div className="font-medium">{item.date}</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`mailto:${item.contactEmail}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.contactEmail}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`tel:${item.contactPhone}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.contactPhone}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button asChild className="flex-1">
                  <a href={`mailto:${item.contactEmail}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
