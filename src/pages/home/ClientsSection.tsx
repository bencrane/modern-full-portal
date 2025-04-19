import React from 'react';

const logos = [
  { url: 'https://logo.clearbit.com/oracle.com', name: 'Oracle' },
  { url: 'https://logo.clearbit.com/google.com', name: 'Google' },
  { url: 'https://logo.clearbit.com/neimanmarcus.com', name: 'Neiman Marcus' },
  { url: 'https://logo.clearbit.com/panerabread.com', name: 'Panera Bread' },
  { url: 'https://logo.clearbit.com/redrobin.com', name: 'Red Robin' },
  { url: 'https://logo.clearbit.com/chick-fil-a.com', name: 'Chick-fil-A' },
  { url: 'https://logo.clearbit.com/compass-group.com', name: 'Compass Group' },
  { url: 'https://logo.clearbit.com/daveandbusters.com', name: "Dave & Buster's" },
  { url: 'https://logo.clearbit.com/omnihotels.com', name: 'Omni Hotels' },
  { url: 'https://logo.clearbit.com/zaxbys.com', name: "Zaxby's" },
  { url: 'https://logo.clearbit.com/dominos.com', name: "Domino's" },
  { url: 'https://logo.clearbit.com/tacombi.com', name: 'Tacombi' },
  { url: 'https://logo.clearbit.com/tanium.com', name: 'Tanium' },
  { url: 'https://logo.clearbit.com/beyondtrust.com', name: 'BeyondTrust' },
  { url: 'https://logo.clearbit.com/code42.com', name: 'Code42' },
  { url: 'https://logo.clearbit.com/xactlycorp.com', name: 'Xactly' },
  { url: 'https://logo.clearbit.com/sailpoint.com', name: 'SailPoint' },
  { url: 'https://logo.clearbit.com/origamirisk.com', name: 'Origami Risk' },
  { url: 'https://logo.clearbit.com/visitindy.com', name: 'Visit Indy' },
  { url: 'https://logo.clearbit.com/levyrestaurants.com', name: 'Levy Restaurants' },
  { url: 'https://logo.clearbit.com/plantarestaurants.com', name: 'Planta' },
  { url: 'https://logo.clearbit.com/oneoffhospitality.com', name: 'One Off Hospitality' },
  { url: 'https://logo.clearbit.com/minagroup.net', name: 'Mina Group' },
  { url: 'https://logo.clearbit.com/hcsgcorp.com', name: 'HCSG' },
];

const ClientsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono text-center">
          Unlocking Opportunities With Industry Leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="flex gap-x-12 animate-marquee hover:pause">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-none h-24 flex items-center justify-center"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 w-auto object-contain transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .animate-marquee {
            display: flex;
            animation: marquee 40s linear infinite;
            white-space: nowrap;
          }
          
          .pause {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ClientsSection;
