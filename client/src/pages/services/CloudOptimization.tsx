import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudOptimization() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cloud Cost Optimization</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Maximize cloud efficiency and reduce costs through intelligent resource 
            optimization and performance tuning.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Optimization Strategies</h2>
              <p className="text-muted-foreground mb-6">
                Our comprehensive optimization approach focuses on both immediate cost 
                savings and long-term efficiency improvements.
              </p>
              <div className="grid gap-4">
                {strategies.map((strategy) => (
                  <Card key={strategy.title}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{strategy.title}</h3>
                      <p className="text-muted-foreground">{strategy.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Benefits and CTA */}
          <div className="space-y-8">
            <section className="bg-primary/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Optimization Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Start Optimizing Today</h2>
                <p className="text-muted-foreground mb-6">
                  Get a detailed analysis of your cloud infrastructure and discover potential savings.
                </p>
                <Button className="w-full">
                  Request Cost Analysis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const strategies = [
  {
    title: "Resource Right-sizing",
    description: "Analyze and adjust cloud resource allocation to match actual usage patterns and requirements."
  },
  {
    title: "Cost Monitoring & Analytics",
    description: "Real-time tracking of cloud spending with detailed breakdowns and optimization recommendations."
  },
  {
    title: "Automated Scaling",
    description: "Implement intelligent auto-scaling policies to optimize resource usage during peak and off-peak times."
  },
  {
    title: "Reserved Instance Planning",
    description: "Strategic planning and management of reserved instances to maximize cost savings."
  }
];

const benefits = [
  "Reduce cloud infrastructure costs by up to 30%",
  "Improve application performance and efficiency",
  "Automated resource scaling and management",
  "Detailed cost allocation and tracking",
  "Regular optimization recommendations",
  "Continuous monitoring and refinement"
];
