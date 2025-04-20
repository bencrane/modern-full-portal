
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Navbar from './home/Navbar';
import HeroSection from './home/HeroSection';
import ServicesSection from './home/ServicesSection';
import ApproachSection from './home/ApproachSection';
import ExpertiseSection from './home/ExpertiseSection';
import ClientsSection from './home/ClientsSection';
import CallToActionSection from './home/CallToActionSection';
import Footer from './home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      <Navbar />
      <HeroSection />
      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />
      <ServicesSection />
      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />
      <ApproachSection />
      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />
      <ExpertiseSection />
      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />
      <ClientsSection />
      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
