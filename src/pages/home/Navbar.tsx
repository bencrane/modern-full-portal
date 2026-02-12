
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="border-b border-zinc-800/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-mono text-lg tracking-tight">
          <span className="text-gradient font-semibold">Modern</span>
          <span className="text-gradient-purple font-semibold">Full</span>
        </div>
        <div className="flex items-center space-x-8">
          <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">Solutions</Button>
          <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">Process</Button>
          <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">About</Button>
          <Button size="sm" className="premium-button text-xs font-mono">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
