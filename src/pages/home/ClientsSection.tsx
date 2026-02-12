
import React from 'react';

const ClientsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Trusted By Industry Leaders</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
        {['Enterprise A', 'Enterprise B', 'Enterprise C', 'Enterprise D'].map((client, i) => (
          <div key={i} className="text-zinc-500 font-mono text-xs">{client}</div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
