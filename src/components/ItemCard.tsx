import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ItemCardProps {
  id: string;
  name: string;
  description: string;
  location: string;
  type: "lost" | "found";
  image?: string;
  date: string;
  category?: string;
}

const ItemCard = ({ id, name, description, location, type, image, date, category }: ItemCardProps) => {
  return (
    <Link to={`/item/${id}`} className="group">
      <div className="overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1 animate-scale-in">
        <div className="aspect-video bg-muted overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-4xl">📦</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <Badge variant={type === "lost" ? "destructive" : "default"} className="shrink-0">
              {type}
            </Badge>
          </div>
          
          {category && (
            <Badge variant="outline" className="mb-2">
              {category}
            </Badge>
          )}
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span className="line-clamp-1">{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
