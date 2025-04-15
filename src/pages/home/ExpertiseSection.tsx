
import React from 'react';
import { Terminal } from 'lucide-react';

// Note how the actual rendered items have diamond symbols
const expertiseItems = [
  {
    title: "API Design & Integration",
    icon: "◇" // Using a diamond character that matches what's in your screenshot
  },
  {
    title: "Event-Driven Architecture",
    icon: "◇" 
  },
  {
    title: "Cloud Infrastructure",
    icon: "◇"
  },
  {
    title: "Authentication Systems",
    icon: "◇"
  },
  {
    title: "Database Optimization",
    icon: "◇"
  },
  {
    title: "Serverless Functions",
    icon: "◇"
  },
  {
    title: "System Architecture",
    icon: "◇"
  },
  {
    title: "CI/CD Implementation",
    icon: "◇"
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
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {expertiseItems.map((item, index) => (
          <div key={index} className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-md">
            <div className="text-purple-400 mb-2">{item.icon}</div>
            <div className="text-white text-sm font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
