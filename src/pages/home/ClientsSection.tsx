
import React from 'react';

const ClientsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-white font-mono">Trusted By Industry Leaders</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {['Nostra', 'Landed', 'SecurityPal', 'Civic'].map((client, i) => (
          <div key={i} className="text-[#B0B0B0] font-mono text-base">{client}</div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
