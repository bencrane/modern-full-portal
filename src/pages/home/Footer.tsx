
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-xs font-mono">
            © 2025 Modern Full, LLC
          </div>
          <div className="text-zinc-500 text-xs font-mono text-center">
            Modern Tools. Full Implementation.
          </div>
          <div>
            <a href="mailto:hello@modernfull.com" 
               className="text-zinc-500 hover:text-white text-xs transition-colors font-mono">
              hello@modernfull.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

