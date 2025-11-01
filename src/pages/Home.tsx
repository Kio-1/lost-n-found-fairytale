import { Link } from "react-router-dom";
import { Search, FileText, Users, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary/5 pt-20 pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Reunite with Your
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Lost Belongings
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                  A community-driven platform to help people find what they've lost and return what they've found.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" asChild className="text-lg h-12 shadow-lg">
                    <Link to="/items" className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      Search Items
                    </Link>
                  </Button>
                  
                  <Button size="lg" variant="outline" asChild className="text-lg h-12">
                    <Link to="/report" className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Report an Item
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-4 max-w-md lg:max-w-lg animate-slide-up">
                <div className="col-span-2 bg-card rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm text-muted-foreground">Items Reported</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-lg border">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-3">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold mb-1">300+</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-lg border">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-xs text-muted-foreground">Items Reunited</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Three simple steps to help reunite lost items with their owners
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-background border animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Report an Item</h3>
                <p className="text-muted-foreground">
                  Found or lost something? Create a report with details and photos.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-background border animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Search & Browse</h3>
                <p className="text-muted-foreground">
                  Look through reported items to find what you're looking for.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-background border animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Connected</h3>
                <p className="text-muted-foreground">
                  Contact the reporter to arrange the return of the item.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Lost & Found Platform. Helping reunite people with their belongings.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
