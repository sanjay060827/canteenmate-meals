import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Utensils, Sparkles, Bell } from "lucide-react";
import heroImage from "@/assets/canteen-hero.jpg";

const Home = () => {
  const specials = [
    { name: "Masala Dosa Special", price: "₹50", discount: "20% OFF" },
    { name: "Combo Meal", price: "₹99", discount: "Special Price" },
    { name: "Fresh Juice", price: "₹30", discount: "Buy 1 Get 1" },
  ];

  const announcements = [
    "New Japanese menu items added!",
    "Happy Hours: 2 PM - 4 PM - 15% off on all beverages",
    "Student discount: Show your ID for 10% off",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] cafe-gradient overflow-hidden">
        <img 
          src={heroImage} 
          alt="Canteen"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            Welcome to MEC Canteen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Experience delicious global cuisines right at your campus
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/menu">
              <Button variant="cafe" size="lg" className="text-lg">
                <Utensils className="mr-2 w-5 h-5" />
                View Menu
              </Button>
            </Link>
            <Link to="/offers">
              <Button variant="secondary" size="lg" className="text-lg">
                <Sparkles className="mr-2 w-5 h-5" />
                Today's Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Specials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Today's Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specials.map((special, index) => (
              <Card key={index} className="card-cafe p-6 text-center">
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {special.discount}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{special.name}</h3>
                <p className="text-3xl font-bold text-primary">{special.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground flex items-center justify-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            Announcements
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {announcements.map((announcement, index) => (
              <Card key={index} className="card-cafe p-5">
                <p className="text-lg text-card-foreground">{announcement}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
