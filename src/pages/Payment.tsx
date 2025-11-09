import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Building, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Payment successful! Your order is being prepared.", {
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    });
    
    setIsProcessing(false);
    
    // Redirect to home after payment
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground text-center">Payment</h1>

        <div className="grid gap-6">
          {/* Order Total */}
          <Card className="card-cafe p-6">
            <h3 className="text-xl font-bold mb-4 text-card-foreground">Order Total</h3>
            <div className="text-4xl font-bold text-primary">₹201.60</div>
          </Card>

          {/* Payment Method */}
          <Card className="card-cafe p-6">
            <h3 className="text-xl font-bold mb-6 text-card-foreground">Select Payment Method</h3>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center gap-3 cursor-pointer flex-1">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">UPI</div>
                    <div className="text-sm text-muted-foreground">Pay using PhonePe, Google Pay, etc.</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Credit/Debit Card</div>
                    <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay</div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                <RadioGroupItem value="netbanking" id="netbanking" />
                <Label htmlFor="netbanking" className="flex items-center gap-3 cursor-pointer flex-1">
                  <Building className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Net Banking</div>
                    <div className="text-sm text-muted-foreground">Pay via your bank account</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </Card>

          {/* Payment Details Form */}
          {paymentMethod === "upi" && (
            <Card className="card-cafe p-6 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input id="upiId" placeholder="yourname@upi" />
                </div>
              </div>
            </Card>
          )}

          {paymentMethod === "card" && (
            <Card className="card-cafe p-6 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" type="password" maxLength={3} />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {paymentMethod === "netbanking" && (
            <Card className="card-cafe p-6 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bank">Select Bank</Label>
                  <select 
                    id="bank" 
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              </div>
            </Card>
          )}

          {/* Pay Button */}
          <Button 
            variant="cafe" 
            size="lg" 
            className="w-full text-lg"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay ₹201.60"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
