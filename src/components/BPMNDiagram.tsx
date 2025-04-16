
import React from 'react';
import { Circle, Database, Server, ArrowRight, GitBranch } from 'lucide-react';

const BPMNDiagram = () => {
  return (
    <svg 
      viewBox="0 0 400 300" 
      className="w-full h-full"
    >
      {/* Background with subtle gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#18181b', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#18181b', stopOpacity: 0.95 }} />
        </linearGradient>
      </defs>
      
      {/* Main diagram group */}
      <g className="diagram-elements">
        {/* Connection lines with gradient */}
        <path 
          d="M 80 150 L 160 150 M 240 150 L 320 150 M 200 110 L 200 190" 
          stroke="rgba(139, 92, 246, 0.3)" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Start Event */}
        <circle 
          cx="80" 
          cy="150" 
          r="20" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="80" y="180" className="fill-zinc-500 text-xs" textAnchor="middle">Start</text>
        
        {/* Task Node */}
        <rect 
          x="160" 
          y="130" 
          width="80" 
          height="40" 
          rx="6"
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="200" y="155" className="fill-zinc-400 text-xs" textAnchor="middle">Process</text>
        
        {/* Gateway */}
        <path 
          d="M 190 110 L 200 100 L 210 110 L 210 130 L 200 140 L 190 130 Z" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="200" y="90" className="fill-zinc-500 text-xs" textAnchor="middle">Gateway</text>
        
        {/* End Event */}
        <circle 
          cx="320" 
          cy="150" 
          r="20" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="320" y="180" className="fill-zinc-500 text-xs" textAnchor="middle">End</text>
        
        {/* Data Store */}
        <path 
          d="M 190 190 L 210 190 C 210 200 190 200 190 190" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="200" y="220" className="fill-zinc-500 text-xs" textAnchor="middle">Data</text>
      </g>
    </svg>
  );
};

export default BPMNDiagram;
