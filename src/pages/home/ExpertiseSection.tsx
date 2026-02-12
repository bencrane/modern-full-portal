
import React from 'react';
import { Terminal } from 'lucide-react';

const expertiseItems = [
  "API Design & Integration",
  "Event-Driven Architecture",
  "Cloud Infrastructure",
  "Authentication Systems",
  "Database Optimization",
  "Serverless Functions",
  "System Architecture",
  "CI/CD Implementation"
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        {expertiseItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 opacity-70" />
            <span className="text-zinc-300 text-sm font-mono">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
