
import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, ServerCog, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
              <Terminal size={14} className="mr-2 text-purple-400" />
              Modern Tools. Full Implementation.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient leading-[1.2]">
              End-to-End Backend Infrastructure Systems
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
              We architect and implement comprehensive backend solutions, transforming complex technical challenges into streamlined operational systems. No half measures.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="mailto:ben@modernfull.com">
                <Button className="premium-button px-6 py-6">
                  Talk to Us <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="premium-card p-8 h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
              <div className="relative z-10">
                <ServerCog size={32} className="text-purple-400/70 mb-6" />
                <div className="font-mono text-xs text-zinc-500 space-y-4">
                  <div>Infrastructure Diagram</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-zinc-800/50 h-3 rounded" />
                    ))}
                  </div>
                  <div className="text-[10px] opacity-70">system-architecture.config</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
