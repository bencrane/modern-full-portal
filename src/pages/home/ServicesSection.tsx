
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServerCog, GitMerge, Database, Router, Workflow } from 'lucide-react';

const services = [
  { 
    icon: <ServerCog className="text-purple-400" />,
    title: "Infrastructure Architecture", 
    description: "Architect scalable backend systems tailored to your business needs." 
  },
  { 
    icon: <GitMerge className="text-purple-400" />,
    title: "Systems Integration", 
    description: "Seamlessly connect your existing tools and platforms into a cohesive ecosystem." 
  },
  { 
    icon: <Database className="text-purple-400" />,
    title: "Data Pipeline Optimization", 
    description: "Streamline your data flows and processing for maximum efficiency and reliability." 
  },
  {
    icon: <Router className="text-purple-400" />,
    title: "DevOps & Deployment", 
    description: "Implement continuous integration and automated build systems for reliable delivery." 
  }
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
          <Workflow size={14} className="mr-2 text-purple-400" />
          Core Capabilities
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple">
          Technical Solutions
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          From architecture to deployment, we deliver fully integrated solutions for your internal operations stack.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <Card key={index} className="premium-card group">
            <CardHeader className="pb-2">
              {service.icon}
              <CardTitle className="text-white text-lg font-medium mt-3">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
