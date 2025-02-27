import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudMigration() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Cloud className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cloud Migration Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly transition your infrastructure to the cloud with our expert guidance 
            and comprehensive migration solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Migration Approach</h2>
              <p className="text-muted-foreground mb-6">
                We follow a proven four-phase migration methodology that ensures a smooth 
                transition while minimizing risks and downtime.
              </p>
              <div className="grid gap-4">
                {phases.map((phase) => (
                  <Card key={phase.title}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Benefits and CTA */}
          <div className="space-y-8">
            <section className="bg-primary/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
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
                <h2 className="text-2xl font-semibold mb-4">Ready to Migrate?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your migration needs and create a tailored plan for your business.
                </p>
                <Button className="w-full">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const phases = [
  {
    title: "Assessment & Planning",
    description: "We analyze your current infrastructure, applications, and data to create a comprehensive migration strategy."
  },
  {
    title: "Preparation & Architecture",
    description: "Setting up cloud infrastructure, creating secure networks, and configuring necessary services."
  },
  {
    title: "Migration Execution",
    description: "Carefully moving applications and data while ensuring business continuity and minimal disruption."
  },
  {
    title: "Optimization & Support",
    description: "Fine-tuning performance, implementing monitoring, and providing ongoing support post-migration."
  }
];

const benefits = [
  "Reduced infrastructure costs and improved cost management",
  "Enhanced scalability and flexibility",
  "Improved security and compliance",
  "Better disaster recovery and business continuity",
  "Access to latest cloud technologies and innovations",
  "24/7 expert support and monitoring"
];
