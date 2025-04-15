import React from 'react';
import { Code, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const approaches = [
  { 
    title: "Real business context", 
    description: "Implementation must serve operational goals, not abstractions." 
  },
  { 
    title: "No half measures", 
    description: "We own execution end-to-end, not just strategy decks or handoff docs." 
  }
];

const ApproachSection = () => {
  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
          <Code size={14} className="mr-2 text-purple-400" />
          Our Philosophy
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple">
          Our Approach
        </h2>
        <p className="text-sm text-zinc-400 max-w-lg">
          We don't dabble. We implement.
        </p>
      </div>

      <div className="mb-8 text-zinc-400 leading-relaxed">
        ModernFull exists to architect and operationalize the backend systems that power serious businesses. We specialize in stitching together modern tools into fully integrated systems that actually run — at scale, and in production.
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {approaches.map((approach, index) => (
          <Card key={index} className="premium-card group">
            <CardHeader className="pb-2">
              <Check size={20} className="text-purple-400 mb-2" />
              <CardTitle className="text-white text-lg font-medium">
                {approach.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {approach.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-zinc-400 leading-relaxed">
        Whether it's building a CRM enrichment layer, automating proposal generation, or deploying a CI/CD pipeline, we don't just wire tools together — we build infrastructure that holds.
      </div>
    </section>
  );
};

export default ApproachSection;
