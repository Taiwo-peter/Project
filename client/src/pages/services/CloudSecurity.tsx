import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CloudSecurity() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Cloud Security Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protect your cloud infrastructure with industry-leading security practices 
            and comprehensive threat management.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Comprehensive Security Services</h2>
              <p className="text-muted-foreground mb-6">
                Our multi-layered security approach ensures your cloud infrastructure 
                is protected against evolving threats.
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
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
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
                <h2 className="text-2xl font-semibold mb-4">Secure Your Cloud</h2>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive security assessment and customized protection plan.
                </p>
                <Button className="w-full">
                  Get Security Assessment <ArrowRight className="ml-2 h-4 w-4" />
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
    title: "Security Assessment & Compliance",
    description: "Comprehensive evaluation of your cloud infrastructure security and compliance with industry standards."
  },
  {
    title: "Threat Detection & Response",
    description: "24/7 monitoring and automated response to security threats and vulnerabilities."
  },
  {
    title: "Identity & Access Management",
    description: "Secure access control and user authentication across your cloud resources."
  },
  {
    title: "Data Protection & Encryption",
    description: "Advanced encryption and data protection measures for your sensitive information."
  }
];

const features = [
  "Real-time threat monitoring and alerting",
  "Automated security responses and remediation",
  "Compliance with industry standards (ISO 27001, SOC 2, HIPAA)",
  "Regular security audits and penetration testing",
  "Zero-trust security architecture",
  "Secure backup and disaster recovery"
];
