import { Card } from "@/components/ui/card";
import { Code, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-foreground">About Us</h1>
          <p className="text-xl text-muted-foreground">
            Building the future of campus dining
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* About Canteen */}
          <Card className="card-cafe p-8 animate-slide-in">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">
                  About MEC Canteen
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Welcome to the Madras Engineering College Canteen Management System! 
                  Our mission is to revolutionize the campus dining experience by making 
                  it faster, more convenient, and more enjoyable for every student.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With our digital platform, students can browse menus, place orders, 
                  track deliveries, and enjoy exclusive offers - all from the comfort 
                  of their devices. We're committed to serving delicious, hygienic food 
                  from cuisines around the world.
                </p>
              </div>
            </div>
          </Card>

          {/* Features */}
          <Card className="card-cafe p-8">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">What We Offer</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>✨ Global menu featuring Indian, Chinese, Japanese, and Italian cuisines</li>
                  <li>🎯 Real-time order tracking</li>
                  <li>💰 Exclusive student discounts and combo deals</li>
                  <li>🤖 AI-powered chatbot for instant assistance</li>
                  <li>📱 Easy online payment options</li>
                  <li>⚡ Fast service and quality food</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Developer Info */}
          <Card className="card-cafe p-8">
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">Developer Information</h2>
                <div className="text-lg text-muted-foreground space-y-3">
                  <p>
                    <strong className="text-card-foreground">Developed by:</strong> Sanjay Sivakumar and Team
                  </p>
                  <p>
                    <strong className="text-card-foreground">Institution:</strong> Madras Engineering College
                  </p>
                  <p>
                    <strong className="text-card-foreground">Technologies:</strong> React, TypeScript, 
                    Tailwind CSS, Supabase, and AI Integration
                  </p>
                  <p className="pt-4 border-t border-border">
                    This project was created with passion to improve the daily lives of 
                    MEC students. We believe technology should make everyday tasks simpler 
                    and more enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <div className="text-center pt-8">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Get in Touch</h3>
            <p className="text-muted-foreground">
              Have suggestions or feedback? We'd love to hear from you!
            </p>
            <p className="text-primary font-semibold mt-2">
              contact@meccanteen.edu.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
