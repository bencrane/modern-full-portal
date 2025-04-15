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
    <section id="expertise" className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
      {/* Header Section */}
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
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

      {/* Responsive Grid Section using auto-fit/minmax */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-items-center">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-zinc-900 border border-zinc-700 rounded-lg text-center hover:shadow-lg transition shadow-sm"
          >
            <div className="text-purple-400 text-lg mb-4">◇</div>
            <div className="text-white text-sm font-medium">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
