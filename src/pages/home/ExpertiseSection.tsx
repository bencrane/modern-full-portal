
import React from 'react';
import { Terminal, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const expertiseItems = [
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "API Design & Integration",
    description: "Connect systems and services through well-structured APIs."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "Event-Driven Architecture",
    description: "Build reactive systems that respond to business events."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "Cloud Infrastructure",
    description: "Design and implement scalable cloud-based solutions."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "Authentication Systems",
    description: "Secure your applications with robust authentication."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "Database Optimization",
    description: "Enhance performance and reliability of your data storage."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "Serverless Functions",
    description: "Deploy code without managing underlying infrastructure."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "System Architecture",
    description: "Design comprehensive technical solutions for complex needs."
  },
  {
    icon: <Code className="text-purple-400" size={20} />,
    title: "CI/CD Implementation",
    description: "Automate your build and deployment processes."
  }
];

const ExpertiseSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
          <Terminal size={14} className="mr-2 text-purple-400" />
          Capabilities
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple">
          Technical Expertise
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          We implement modern tools end-to-end with technical precision and deep expertise.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {expertiseItems.map((item, index) => (
          <Card key={index} className="premium-card group">
            <CardHeader className="pb-2">
              {item.icon}
              <CardTitle className="text-white text-lg font-medium mt-3">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
