import { Button } from "@/components/ui/button";
import { Cloud, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <PageTransition>
        <div className="min-h-screen">
          <section className="bg-gradient-to-r from-background to-secondary/10 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-pink-500 text-transparent bg-clip-text mb-6">
                    Tyledeclouds Consulting
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Empowering your business with innovative cloud solutions. We help organizations 
                    navigate their digital transformation journey with confidence.
                  </p>
                  <Button size="lg" className="font-semibold">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Cloud className="w-full h-full text-primary opacity-20 absolute" />
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
                    alt="Cloud Technology"
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                  >
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />
        </div>
      </PageTransition>
    </>
  );
}

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly transition your infrastructure to the cloud with minimal disruption to your operations.",
    icon: Cloud
  },
  {
    title: "Cloud Optimization",
    description: "Maximize the efficiency and performance of your cloud infrastructure while minimizing costs.",
    icon: Cloud
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud assets with industry-leading security practices and continuous monitoring.",
    icon: Cloud
  }
];