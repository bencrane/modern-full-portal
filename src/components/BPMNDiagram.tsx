import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const BPMNDiagram = () => {
  const isMobile = useIsMobile();
  const [viewBoxWidth, setViewBoxWidth] = useState(800);
  const [viewBoxHeight, setViewBoxHeight] = useState(300);
  
  useEffect(() => {
    if (isMobile) {
      setViewBoxWidth(400);
      setViewBoxHeight(250);
    } else {
      setViewBoxWidth(800);
      setViewBoxHeight(300);
    }
  }, [isMobile]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#18181b', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#18181b', stopOpacity: 0.95 }} />
          </linearGradient>

          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#9333ea', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 0.1 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g className="infrastructure-elements" transform={isMobile ? "scale(0.7) translate(50, 80)" : ""}>
          <g transform="translate(120, 120)">
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

          <g transform="translate(220, 100)">
            <rect 
              width="60" 
              height="80" 
              rx="4"
              className="fill-zinc-900 stroke-purple-500/30"
              strokeWidth="2"
            />
            <rect 
              y="20" 
              width="60" 
              height="15"
              className="fill-purple-500/10 stroke-purple-500/30"
              strokeWidth="1"
            />
          </g>

          <g transform="translate(340, 90)">
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

          <g transform="translate(480, 100)">
            <rect 
              width="60" 
              height="80" 
              rx="4"
              className="fill-zinc-900 stroke-purple-500/30"
              strokeWidth="2"
            />
            <rect 
              y="40" 
              width="60" 
              height="15"
              className="fill-purple-500/10 stroke-purple-500/30"
              strokeWidth="1"
            />
          </g>

          <g transform="translate(600, 110)">
            <rect 
              width="80" 
              height="60" 
              rx="2"
              className="fill-zinc-900 stroke-purple-500/30"
              strokeWidth="2"
            />
            <path 
              d="M 10,10 H 70 M 10,30 H 70 M 10,50 H 70 M 10,10 V 50 M 30,10 V 50 M 50,10 V 50" 
              className="stroke-purple-500/30"
              strokeWidth="1"
            />
          </g>

          <path 
            d="M 160,140 H 220 M 280,140 H 340 M 420,140 H 480 M 540,140 H 600" 
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

          {[0, 1, 2, 3].map((index) => (
            <circle key={index} className="fill-purple-400" r="2">
              <animateMotion 
                path={isMobile ? "M 160,140 H 500" : "M 160,140 H 600"} 
                dur={isMobile ? "2s" : "3s"} 
                begin={`${index * (isMobile ? 0.5 : 0.75)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default BPMNDiagram;
