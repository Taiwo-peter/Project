import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    role: "CTO at TechCorp",
    content: "The cloud migration services provided were exceptional. Our infrastructure is now more efficient than ever.",
    company: "TechCorp Solutions"
  },
  {
    name: "Sarah Johnson",
    role: "IT Director",
    content: "Outstanding cloud consulting that helped us reduce costs by 40% while improving performance.",
    company: "Global Innovations"
  },
  {
    name: "Michael Chen",
    role: "DevOps Lead",
    content: "Their expertise in cloud architecture helped us build a scalable and reliable system.",
    company: "StartUp Hub"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <blockquote className="text-gray-700 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
