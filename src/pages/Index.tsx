
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Backend Infrastructure that Powers Business Operations
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl">
            Modern Full provides comprehensive backend implementation solutions, 
            transforming complex technical challenges into streamlined operational systems.
          </p>
          <div className="flex space-x-4 pt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">Get Started</Button>
            <Button variant="outline" className="border-zinc-800 hover:bg-zinc-900">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-lg h-96 flex items-center justify-center text-zinc-500">
            Technical Infrastructure Visualization
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-24 border-t border-zinc-800/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            End-to-end backend solutions that bridge technology and business efficiency
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Infrastructure Design", 
              description: "Architect scalable backend systems tailored to your business needs." 
            },
            { 
              title: "Integration Services", 
              description: "Seamlessly connect your existing tools and platforms." 
            },
            { 
              title: "Operational Optimization", 
              description: "Streamline processes and improve overall system performance." 
            }
          ].map((service, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
