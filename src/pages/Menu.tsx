import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus } from "lucide-react";
import { toast } from "sonner";

import indianDosa from "@/assets/menu/indian-dosa.jpg";
import indianPaneer from "@/assets/menu/indian-paneer.jpg";
import chineseNoodles from "@/assets/menu/chinese-noodles.jpg";
import chineseManchurian from "@/assets/menu/chinese-manchurian.jpg";
import japaneseRamen from "@/assets/menu/japanese-ramen.jpg";
import japaneseSushi from "@/assets/menu/japanese-sushi.jpg";
import italianPasta from "@/assets/menu/italian-pasta.jpg";
import italianPizza from "@/assets/menu/italian-pizza.jpg";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderTrackingId, setOrderTrackingId] = useState("");

  const menuItems: MenuItem[] = [
    { id: 1, name: "Masala Dosa", price: "₹60", category: "Indian", image: indianDosa, description: "Crispy dosa with potato filling" },
    { id: 2, name: "Paneer Butter Masala", price: "₹90", category: "Indian", image: indianPaneer, description: "Rich paneer curry with naan" },
    { id: 3, name: "Hakka Noodles", price: "₹80", category: "Chinese", image: chineseNoodles, description: "Stir-fried noodles with vegetables" },
    { id: 4, name: "Manchurian", price: "₹85", category: "Chinese", image: chineseManchurian, description: "Crispy vegetable balls in sauce" },
    { id: 5, name: "Ramen", price: "₹120", category: "Japanese", image: japaneseRamen, description: "Authentic Japanese noodle soup" },
    { id: 6, name: "Sushi Roll", price: "₹150", category: "Japanese", image: japaneseSushi, description: "Fresh sushi with salmon & avocado" },
    { id: 7, name: "Pasta Alfredo", price: "₹100", category: "Italian", image: italianPasta, description: "Creamy fettuccine pasta" },
    { id: 8, name: "Margherita Pizza", price: "₹130", category: "Italian", image: italianPizza, description: "Classic pizza with mozzarella" },
  ];

  const categories = ["All", "Indian", "Chinese", "Japanese", "Italian"];

  const filteredItems = (category: string) => {
    let items = category === "All" ? menuItems : menuItems.filter(item => item.category === category);
    
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return items;
  };

  const handleAddToCart = (item: MenuItem) => {
    toast.success(`${item.name} added to cart!`);
  };

  const handleTrackOrder = () => {
    if (orderTrackingId) {
      toast.info(`Tracking order: ${orderTrackingId}`);
    } else {
      toast.error("Please enter an order ID");
    }
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Our Menu</h1>
          <p className="text-xl text-muted-foreground">Explore global cuisines from around the world</p>
        </div>

        {/* Search & Order Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Enter Order ID to track"
              value={orderTrackingId}
              onChange={(e) => setOrderTrackingId(e.target.value)}
            />
            <Button onClick={handleTrackOrder} variant="cafe">Track</Button>
          </div>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="w-full justify-start mb-8 flex-wrap h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-6 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems(category).map((item, index) => (
                  <Card key={item.id} className="card-cafe overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <Button 
                          size="sm" 
                          variant="cafe"
                          onClick={() => handleAddToCart(item)}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
