import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Users, Trophy, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Tyledeclouds</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of cloud experts dedicated to helping businesses 
            leverage the power of cloud technology to achieve their goals.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower organizations with innovative cloud solutions that drive 
              growth, efficiency, and digital transformation. We strive to make 
              cloud technology accessible and beneficial for businesses of all sizes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the leading cloud consulting firm known for excellence, 
              innovation, and customer success. We aim to shape the future of 
              cloud computing through our expertise and dedication to our clients.
            </p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { label: "Clients Served", value: "500+", icon: Users },
  { label: "Cloud Projects", value: "1000+", icon: Cloud },
  { label: "Awards Won", value: "50+", icon: Trophy },
  { label: "Success Rate", value: "99%", icon: Target },
];

const team = [
  {
    name: "John Smith",
    role: "CEO",
    bio: "20+ years of experience in cloud computing and digital transformation.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Cloud architecture expert with a focus on security and optimization.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    bio: "Specializes in cloud infrastructure and service delivery excellence.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];
