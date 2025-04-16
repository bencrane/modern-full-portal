
import React from 'react';

const BPMNDiagram = () => {
  return (
    <svg 
      viewBox="0 0 800 300" 
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background with subtle gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#18181b', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#18181b', stopOpacity: 0.95 }} />
        </linearGradient>
        
        {/* Arrow marker definition */}
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            className="fill-purple-500/30"
          />
        </marker>
      </defs>
      
      <g className="diagram-elements">
        {/* Connecting lines with gradient and arrows */}
        <path 
          d="M 60 150 L 140 150 L 260 150 L 340 150 L 420 150 M 420 150 L 480 100 M 420 150 L 480 200 M 480 100 L 580 100 M 480 200 L 580 200 M 580 100 L 640 150 M 580 200 L 640 150 M 640 150 L 720 150" 
          className="stroke-purple-500/30"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Start Event */}
        <circle 
          cx="60" 
          cy="150" 
          r="20" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="60" y="180" className="fill-zinc-500 text-xs" textAnchor="middle">Start</text>
        
        {/* Task 1: Receive Request */}
        <rect 
          x="140" 
          y="130" 
          width="120" 
          height="40" 
          rx="6"
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="200" y="155" className="fill-zinc-400 text-xs" textAnchor="middle">Receive Request</text>
        
        {/* Task 2: Validate Data */}
        <rect 
          x="300" 
          y="130" 
          width="120" 
          height="40" 
          rx="6"
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="360" y="155" className="fill-zinc-400 text-xs" textAnchor="middle">Validate Data</text>
        
        {/* Gateway (Decision) */}
        <path 
          d="M 420 150 L 450 120 L 480 150 L 450 180 Z" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="450" y="110" className="fill-zinc-500 text-xs" textAnchor="middle">Check Path</text>
        
        {/* Task A1: Transform Data */}
        <rect 
          x="480" 
          y="80" 
          width="100" 
          height="40" 
          rx="6"
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="530" y="105" className="fill-zinc-400 text-xs" textAnchor="middle">Transform Data</text>
        
        {/* Task B1: Notify Service */}
        <rect 
          x="480" 
          y="180" 
          width="100" 
          height="40" 
          rx="6"
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="530" y="205" className="fill-zinc-400 text-xs" textAnchor="middle">Notify Service</text>
        
        {/* Merge Gateway */}
        <path 
          d="M 610 150 L 640 120 L 670 150 L 640 180 Z" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="640" y="110" className="fill-zinc-500 text-xs" textAnchor="middle">Merge</text>
        
        {/* End Event */}
        <circle 
          cx="720" 
          cy="150" 
          r="20" 
          className="stroke-purple-500/30 fill-zinc-900"
          strokeWidth="2"
        />
        <text x="720" y="180" className="fill-zinc-500 text-xs" textAnchor="middle">End</text>
      </g>
    </svg>
  );
};

export default BPMNDiagram;
