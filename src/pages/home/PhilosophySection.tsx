
import React from 'react';
import { Terminal } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
          <Terminal size={14} className="mr-2 text-purple-400" />
          Philosophy
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple">
          Our Principles
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          We don't dabble. We implement.
        </p>
      </div>
      <div className="space-y-6 max-w-3xl">
        <p className="text-zinc-400 leading-relaxed">
          ModernFull exists to architect and operationalize the backend systems that power serious businesses. We specialize in stitching together modern tools into fully integrated systems that actually run — at scale, and in production.
        </p>
        <div className="space-y-4">
          <p className="text-zinc-300 leading-relaxed">Our ethos is grounded in two principles:</p>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start">
              <span className="text-zinc-500 mr-2">•</span>
              <span><span className="text-zinc-300">Real business context</span> — implementation must serve operational goals, not abstractions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-500 mr-2">•</span>
              <span><span className="text-zinc-300">No half measures</span> — we own execution end-to-end, not just strategy decks or handoff docs.</span>
            </li>
          </ul>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Whether it's building a CRM enrichment layer, automating proposal generation, or deploying a CI/CD pipeline, we don't just wire tools together — we build infrastructure that holds.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
