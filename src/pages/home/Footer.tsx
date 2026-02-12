
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-xs mb-4 md:mb-0 font-mono">
            © 2025 Modern Full. Modern Tools. Full Implementation.
          </div>
          <div className="flex space-x-6">
            <a href="mailto:contact@modernfull.com" 
               className="text-zinc-500 hover:text-white text-xs transition-colors font-mono">
              contact@modernfull.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
