
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
            <div className="premium-card p-8 h-[400px] relative overflow-hidden flex items-center justify-center">
              {/* Animated Infrastructure Pipeline */}
              <svg viewBox="0 0 400 200" className="w-full h-auto max-w-md">
                {/* Connection lines */}
                <line x1="60" y1="100" x2="120" y2="100" stroke="#6C3AED" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                <line x1="160" y1="100" x2="220" y2="100" stroke="#6C3AED" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <line x1="260" y1="100" x2="320" y2="100" stroke="#6C3AED" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '0.4s' }} />

                {/* Node 1: Database */}
                <g className="animate-pulse">
                  <ellipse cx="40" cy="85" rx="20" ry="10" fill="none" stroke="#6C3AED" strokeWidth="1.5" />
                  <path d="M20 85 L20 115 Q40 128 60 115 L60 85" fill="none" stroke="#6C3AED" strokeWidth="1.5" />
                  <ellipse cx="40" cy="115" rx="20" ry="10" fill="none" stroke="#6C3AED" strokeWidth="1.5" />
                </g>
                <text x="40" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">Source</text>

                {/* Node 2: Processing */}
                <g style={{ animationDelay: '0.15s' }} className="animate-pulse">
                  <rect x="120" y="80" width="40" height="40" rx="4" fill="none" stroke="#6C3AED" strokeWidth="1.5" />
                  <line x1="128" y1="92" x2="152" y2="92" stroke="#6C3AED" strokeWidth="1" opacity="0.5" />
                  <line x1="128" y1="100" x2="152" y2="100" stroke="#6C3AED" strokeWidth="1" opacity="0.5" />
                  <line x1="128" y1="108" x2="152" y2="108" stroke="#6C3AED" strokeWidth="1" opacity="0.5" />
                </g>
                <text x="140" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">Process</text>

                {/* Node 3: Central Hub */}
                <g style={{ animationDelay: '0.3s' }} className="animate-pulse">
                  <rect x="220" y="75" width="50" height="50" rx="6" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  <circle cx="245" cy="100" r="4" fill="#8B5CF6" opacity="0.6" />
                  <circle cx="245" cy="100" r="12" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" />
                </g>
                <text x="245" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">Hub</text>

                {/* Node 4: Output */}
                <g style={{ animationDelay: '0.45s' }} className="animate-pulse">
                  <rect x="320" y="80" width="40" height="40" rx="4" fill="none" stroke="#6C3AED" strokeWidth="1.5" />
                  <path d="M330 95 L350 95 M330 100 L345 100 M330 105 L350 105" stroke="#6C3AED" strokeWidth="1" opacity="0.5" />
                </g>
                <text x="340" y="145" textAnchor="middle" className="fill-zinc-500 text-[8px] font-mono">Deploy</text>

                {/* Floating particles */}
                <circle cx="90" cy="100" r="2" fill="#8B5CF6" opacity="0.8">
                  <animate attributeName="cx" values="60;120" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="190" cy="100" r="2" fill="#8B5CF6" opacity="0.8">
                  <animate attributeName="cx" values="160;220" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="290" cy="100" r="2" fill="#8B5CF6" opacity="0.8">
                  <animate attributeName="cx" values="260;320" dur="2s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>
              </svg>

                          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
