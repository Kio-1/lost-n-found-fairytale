import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ItemCard from "@/components/ItemCard";
import Navbar from "@/components/Navbar";

// Mock data
const mockItems = [
  {
    id: "1",
    name: "Black Leather Wallet",
    description: "Black leather wallet with multiple card slots. Contains driver's license.",
    location: "Central Park, near the fountain",
    type: "found" as const,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop",
    date: "2 days ago",
    category: "Wallet"
  },
  {
    id: "2",
    name: "iPhone 13 Pro",
    description: "Silver iPhone 13 Pro in a blue case. Lost near coffee shop.",
    location: "Downtown Starbucks",
    type: "lost" as const,
    image: "https://images.unsplash.com/photo-1592286927505-5e3e1a3c7c2a?w=800&auto=format&fit=crop",
    date: "1 day ago",
    category: "Electronics"
  },
  {
    id: "3",
    name: "Blue Backpack",
    description: "Nike blue backpack with school supplies. Has name tag inside.",
    location: "City Library, 2nd Floor",
    type: "found" as const,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop",
    date: "3 days ago",
    category: "Bag"
  },
  {
    id: "4",
    name: "House Keys",
    description: "Set of 3 keys on a red keychain with Eiffel Tower charm.",
    location: "Main Street Bus Stop",
    type: "found" as const,
    date: "5 hours ago",
    category: "Keys"
  },
  {
    id: "5",
    name: "Gold Watch",
    description: "Expensive gold wristwatch, sentimental value. Family heirloom.",
    location: "City Gym locker room",
    type: "lost" as const,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    date: "1 week ago",
    category: "Jewelry"
  },
  {
    id: "6",
    name: "Prescription Glasses",
    description: "Black frame prescription glasses in brown case.",
    location: "University Campus, Building A",
    type: "found" as const,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&auto=format&fit=crop",
    date: "4 days ago",
    category: "Accessories"
  }
];

const Items = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const categories = Array.from(new Set(mockItems.map(item => item.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Items</h1>
          <p className="text-muted-foreground">Search through lost and found items</p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 space-y-4 animate-slide-up">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items, locations, descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="lost">Lost</SelectItem>
                <SelectItem value="found">Found</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(cat => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="flex-1" />
            
            <span className="text-sm text-muted-foreground self-center">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
            </span>
          </div>
        </div>
        
        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Items;
