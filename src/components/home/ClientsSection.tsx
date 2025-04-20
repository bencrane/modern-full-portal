
import React from 'react';

const clients = ['Nostra', 'Landed', 'SecurityPal', 'Civic'];

const ClientsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-center w-full mb-12">
        <p className="text-sm uppercase tracking-wider text-zinc-500 font-mono text-center w-full">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
        {clients.map((client, index) => (
          <div 
            key={index} 
            className="flex-none"
          >
            <span className="text-[0.85em] text-zinc-400">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
