import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, ShoppingBag, MessageSquare, Gift, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === "admin" && loginData.password === "admin123") {
      setIsLoggedIn(true);
      toast.success("Admin login successful!");
    } else {
      toast.error("Invalid admin credentials");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background py-8">
        <Card className="card-cafe p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-card-foreground">Admin Login</h1>
            <p className="text-muted-foreground mt-2">Secure access for administrators</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="admin"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter admin password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>

            <Button type="submit" variant="cafe" size="lg" className="w-full">
              <Shield className="mr-2 w-4 h-4" />
              Login
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo: username: admin, password: admin123
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setIsLoggedIn(false)}>Logout</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-cafe p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold text-card-foreground">156</p>
              </div>
            </div>
          </Card>
          <Card className="card-cafe p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold text-card-foreground">₹12,450</p>
              </div>
            </div>
          </Card>
          <Card className="card-cafe p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Feedback</p>
                <p className="text-2xl font-bold text-card-foreground">42</p>
              </div>
            </div>
          </Card>
          <Card className="card-cafe p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Offers</p>
                <p className="text-2xl font-bold text-card-foreground">4</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="offers">Manage Offers</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <div className="grid gap-4">
              {[1, 2, 3].map((order) => (
                <Card key={order} className="card-cafe p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">Order #123{order}</h3>
                      <p className="text-muted-foreground">Student ID: 2021CS{order}23</p>
                      <p className="text-sm text-muted-foreground mt-1">Items: Masala Dosa, Coffee</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">₹95.00</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Mark Complete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback">
            <div className="grid gap-4">
              <Card className="card-cafe p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-card-foreground">Student #2021CS001</h3>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-primary">★</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-muted-foreground">
                  "Excellent food quality and fast service. The new Japanese menu is amazing!"
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="offers">
            <Card className="card-cafe p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Create New Offer</h3>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Offer Title</Label>
                    <Input placeholder="e.g., Weekend Special" />
                  </div>
                  <div>
                    <Label>Discount %</Label>
                    <Input type="number" placeholder="e.g., 20" />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <textarea 
                    className="w-full p-3 border border-input rounded-md bg-background"
                    rows={3}
                    placeholder="Describe the offer..."
                  />
                </div>
                <Button variant="cafe">Create Offer</Button>
              </div>
            </Card>

            <div className="grid gap-4">
              <Card className="card-cafe p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">Student Special</h3>
                    <p className="text-muted-foreground">10% off on all orders</p>
                  </div>
                  <Button variant="destructive" size="sm">Remove</Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
