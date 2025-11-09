import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Clock, Gift } from "lucide-react";
import { toast } from "sonner";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Student Special",
      description: "Show your student ID and get 10% off on all orders",
      discount: "10% OFF",
      type: "Student Discount",
      icon: Gift,
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Happy Hours",
      description: "Get 15% off on all beverages between 2 PM - 4 PM",
      discount: "15% OFF",
      type: "Time Based",
      icon: Clock,
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Combo Meal Deal",
      description: "Main Course + Beverage + Dessert for just ₹99",
      discount: "₹99 Only",
      type: "Combo",
      icon: Percent,
      color: "bg-accent"
    },
    {
      id: 4,
      title: "Weekend Special",
      description: "Get 20% off on all orders above ₹200 on weekends",
      discount: "20% OFF",
      type: "Weekend Offer",
      icon: Gift,
      color: "bg-primary"
    }
  ];

  const handleApplyOffer = (offerId: number) => {
    toast.success("Offer applied successfully! Proceed to cart to use it.");
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Special Offers</h1>
          <p className="text-xl text-muted-foreground">Save more on your favorite meals</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card 
                key={offer.id} 
                className="card-cafe p-6 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${offer.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-card-foreground">{offer.title}</h3>
                      <Badge variant="secondary">{offer.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary">{offer.discount}</span>
                      <Button variant="cafe" onClick={() => handleApplyOffer(offer.id)}>
                        Apply Offer
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Terms */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="card-cafe p-6">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Terms & Conditions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Offers cannot be combined unless specified</li>
              <li>• Student discount requires valid college ID</li>
              <li>• Happy hours valid from 2 PM - 4 PM on all days</li>
              <li>• Weekend offers valid on Saturday and Sunday only</li>
              <li>• Management reserves the right to modify offers</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Offers;
