import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Zap, Settings } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive cloud solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <CardHeader className="bg-primary/5">
                <div className="flex items-center gap-4">
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly transition your infrastructure to the cloud with our expert guidance and support.",
    icon: Cloud,
    features: [
      "Assessment and planning",
      "Data migration",
      "Application modernization",
      "Post-migration support"
    ]
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with industry-leading security practices.",
    icon: Shield,
    features: [
      "Security assessment",
      "Compliance management",
      "Threat detection",
      "24/7 monitoring"
    ]
  },
  {
    title: "Cloud Optimization",
    description: "Maximize the efficiency and performance of your cloud infrastructure.",
    icon: Zap,
    features: [
      "Cost optimization",
      "Performance tuning",
      "Resource management",
      "Automated scaling"
    ]
  },
  {
    title: "Managed Services",
    description: "Let us handle the day-to-day management of your cloud infrastructure.",
    icon: Settings,
    features: [
      "Infrastructure management",
      "Backup and recovery",
      "Updates and patches",
      "Technical support"
    ]
  }
];
