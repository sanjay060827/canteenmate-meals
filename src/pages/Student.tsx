import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, User, ShoppingBag, Star, Gift } from "lucide-react";
import { toast } from "sonner";

const Student = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      toast.success("Login successful!");
    } else {
      toast.error("Please enter valid credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background py-8">
        <Card className="card-cafe p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <User className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-card-foreground">Student Login</h1>
            <p className="text-muted-foreground mt-2">Access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@mec.edu.in"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" variant="cafe" size="lg" className="w-full">
              <Lock className="mr-2 w-4 h-4" />
              Login
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Don't have an account? Contact admin for registration
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Student Dashboard</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="orders"><ShoppingBag className="w-4 h-4 mr-2" />My Orders</TabsTrigger>
            <TabsTrigger value="offers"><Gift className="w-4 h-4 mr-2" />Available Offers</TabsTrigger>
            <TabsTrigger value="feedback"><Star className="w-4 h-4 mr-2" />Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <div className="grid gap-4">
              <Card className="card-cafe p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Order #1234</h3>
                    <p className="text-muted-foreground">2 items • ₹201.60</p>
                    <p className="text-sm text-muted-foreground mt-1">Placed today at 12:30 PM</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Delivered
                  </span>
                </div>
              </Card>
              <Card className="card-cafe p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Order #1233</h3>
                    <p className="text-muted-foreground">1 item • ₹120.00</p>
                    <p className="text-sm text-muted-foreground mt-1">Placed yesterday at 1:45 PM</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Preparing
                  </span>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="offers">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="card-cafe p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">Student Special</h3>
                <p className="text-3xl font-bold text-primary mb-2">10% OFF</p>
                <p className="text-muted-foreground">Valid on all orders with student ID</p>
              </Card>
              <Card className="card-cafe p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-2">Happy Hours</h3>
                <p className="text-3xl font-bold text-primary mb-2">15% OFF</p>
                <p className="text-muted-foreground">2 PM - 4 PM on beverages</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback">
            <Card className="card-cafe p-6">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Submit Feedback</h3>
              <div className="space-y-4">
                <div>
                  <Label>Rate your experience</Label>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-8 h-8 text-primary cursor-pointer hover:fill-primary" />
                    ))}
                  </div>
                </div>
                <div>
                  <Label>Comments</Label>
                  <textarea 
                    className="w-full p-3 border border-input rounded-md mt-2 bg-background"
                    rows={4}
                    placeholder="Share your feedback..."
                  />
                </div>
                <Button variant="cafe">Submit Feedback</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Student;
