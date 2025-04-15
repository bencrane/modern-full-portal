
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Backend Infrastructure that Powers Business Operations
          </h1>
          <p className="text-xl text-muted-foreground">
            Modern Full provides comprehensive backend implementation solutions, 
            transforming complex technical challenges into streamlined operational systems.
          </p>
          <div className="flex space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          {/* Placeholder for technical illustration or graphic */}
          <div className="bg-secondary/20 rounded-lg h-96 flex items-center justify-center text-muted-foreground">
            Technical Infrastructure Visualization
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16 bg-secondary/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Our Core Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end backend solutions that bridge technology and business efficiency
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
