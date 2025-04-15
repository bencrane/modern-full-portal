
import React from 'react';
import { Terminal, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const expertiseItems = [
  {
    title: "API Design & Integration",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "Event-Driven Architecture",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "Cloud Infrastructure",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "Authentication Systems",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "Database Optimization",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "Serverless Functions",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "System Architecture",
    icon: <Code className="text-purple-400" size={20} />
  },
  {
    title: "CI/CD Implementation",
    icon: <Code className="text-purple-400" size={20} />
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
        {expertiseItems.map((item, i) => (
          <Card key={i} className="premium-card group">
            <CardHeader className="pb-2">
              {item.icon}
              <CardTitle className="text-white text-base font-medium mt-3">
                {item.title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
