
import React from 'react';
import { Database, Server, CircuitBoard } from 'lucide-react';

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

        {/* Connector line gradient */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 0.1 }} />
          <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 0.1 }} />
        </linearGradient>

        {/* Glow filter for hover effects */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Infrastructure Elements */}
      <g className="infrastructure-elements">
        {/* Center Server Stack */}
        <g transform="translate(360, 100)">
          <rect 
            width="80" 
            height="100" 
            rx="4"
            className="fill-zinc-900 stroke-purple-500/30"
            strokeWidth="2"
          />
          <rect 
            y="20" 
            width="80" 
            height="20"
            className="fill-purple-500/10 stroke-purple-500/30"
            strokeWidth="1"
          />
          <rect 
            y="50" 
            width="80" 
            height="20"
            className="fill-purple-500/10 stroke-purple-500/30"
            strokeWidth="1"
          />
        </g>

        {/* Left Database Cluster */}
        <g transform="translate(200, 120)">
          <path 
            d="M 0,15 C 0,5 40,5 40,15 L 40,45 C 40,55 0,55 0,45 Z" 
            className="fill-zinc-900 stroke-purple-500/30"
            strokeWidth="2"
          />
          <path 
            d="M 0,15 C 0,25 40,25 40,15" 
            className="fill-none stroke-purple-500/30"
            strokeWidth="2"
          />
        </g>

        {/* Right Circuit Board */}
        <g transform="translate(520, 120)">
          <rect 
            width="60" 
            height="60" 
            rx="2"
            className="fill-zinc-900 stroke-purple-500/30"
            strokeWidth="2"
          />
          <path 
            d="M 10,10 H 50 M 10,30 H 50 M 10,50 H 50 M 10,10 V 50 M 30,10 V 50" 
            className="stroke-purple-500/30"
            strokeWidth="1"
          />
        </g>

        {/* Connecting Lines */}
        <path 
          d="M 240,150 H 360 M 440,150 H 520" 
          className="stroke-purple-500/30"
          strokeWidth="2"
          strokeDasharray="4 4"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="8" 
            to="0" 
            dur="2s" 
            repeatCount="indefinite"
          />
        </path>

        {/* Data Flow Particles */}
        <circle className="fill-purple-400" r="2">
          <animateMotion 
            path="M 240,150 H 520" 
            dur="3s" 
            repeatCount="indefinite"
          />
        </circle>
        <circle className="fill-purple-400" r="2">
          <animateMotion 
            path="M 240,150 H 520" 
            dur="3s" 
            begin="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

export default BPMNDiagram;
