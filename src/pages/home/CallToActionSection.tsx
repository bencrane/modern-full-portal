
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-4xl font-bold tracking-tight text-gradient leading-[1.2] max-w-2xl">
          Let's Deploy Systems That Work
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
          Implementation-focused backend solutions for operational needs
        </p>
        <Button 
          className="premium-button px-6 py-6"
          onClick={() => window.location.href = 'mailto:hello@modernfull.com'}
        >
          Talk to Us <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
