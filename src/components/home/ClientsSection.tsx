
import React from 'react';

const clients = ['Nostra', 'Landed', 'SecurityPal', 'Civic'];

const ClientsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-center w-full mb-12">
        <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono text-center w-full">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex gap-x-16 animate-marquee hover:pause">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="flex-none"
            >
              <span className="text-lg text-zinc-400 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
