import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ManagedServices() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Settings className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Managed Cloud Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud management solutions that keep your infrastructure 
            running smoothly while you focus on your core business.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Management Services</h2>
              <p className="text-muted-foreground mb-6">
                Our managed services provide comprehensive coverage for all your cloud 
                infrastructure needs.
              </p>
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card key={service.title}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Features and CTA */}
          <div className="space-y-8">
            <section className="bg-primary/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Service Features</h2>
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
                <p className="text-muted-foreground mb-6">
                  Let us handle your cloud infrastructure while you focus on innovation.
                </p>
                <Button className="w-full">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "24/7 Infrastructure Monitoring",
    description: "Round-the-clock monitoring and management of your cloud infrastructure with proactive issue resolution."
  },
  {
    title: "Security Management",
    description: "Continuous security monitoring, updates, and patch management to protect your cloud environment."
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Automated backup solutions and comprehensive disaster recovery planning and testing."
  },
  {
    title: "Performance Optimization",
    description: "Regular performance analysis and optimization to ensure optimal cloud resource utilization."
  }
];

const features = [
  "Dedicated support team available 24/7",
  "Proactive monitoring and issue resolution",
  "Regular security updates and patch management",
  "Automated backup and recovery solutions",
  "Detailed monthly performance reports",
  "Scalable support plans to match your needs"
];
