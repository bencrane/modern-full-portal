
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

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
        <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono">
          Unlocking Opportunities for Industry Leaders
        </p>
      </div>
      
      <div className="relative">
        <div className="w-full overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="animate-scroll hover:pause">
              {[...logos, ...logos].map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4">
                  <div className="relative group h-24 flex items-center justify-center">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-h-12 w-auto object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% + 100vw));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
