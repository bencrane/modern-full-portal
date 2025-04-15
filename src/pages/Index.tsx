
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Terminal, 
  Database, 
  GitMerge, 
  Workflow,
  Router, 
  ServerCog
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {/* Header/Navbar */}
      <header className="border-b border-zinc-800/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-mono text-lg font-semibold tracking-tight">
            <span className="text-white">Modern</span>
            <span className="text-purple-400">Full</span>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">Solutions</Button>
            <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">Approach</Button>
            <Button variant="ghost" className="text-sm text-zinc-400 hover:text-white">About</Button>
            <Button size="sm" className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono">
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
            <Code size={14} className="mr-2 text-purple-400" />
            Modern Tools. Full Implementation.
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient leading-tight max-w-xl">
            End-to-End Backend Infrastructure Systems
          </h1>
          <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
            We architect and implement comprehensive backend solutions, transforming complex technical challenges into streamlined operational systems. No half measures.
          </p>
          <div className="flex space-x-4 pt-6">
            <Button className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-6 text-white">
              Talk to Us
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
              Explore Solutions
            </Button>
          </div>
        </div>
        <div className="md:w-2/5 hidden md:block">
          <div className="glass-card subtle-border subtle-glow rounded-lg p-6 h-80 flex items-center justify-center">
            <div className="font-mono text-xs text-zinc-500 flex flex-col items-center">
              <Terminal size={32} className="mb-4 text-purple-400/70" />
              <div className="text-center">
                <div className="mb-1">Infrastructure Diagram</div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-zinc-800/50 h-3 rounded"></div>
                  ))}
                </div>
                <div className="text-[10px] opacity-70">system-architecture.config</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-zinc-800/50 container mx-auto" />

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
            <Workflow size={14} className="mr-2 text-purple-400" />
            Core Capabilities
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient-purple">
            Technical Solutions
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            From architecture to deployment, we deliver fully integrated solutions for your internal operations stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              icon: <ServerCog className="text-purple-400" />,
              title: "Infrastructure Architecture", 
              description: "Architect scalable backend systems tailored to your business needs." 
            },
            { 
              icon: <GitMerge className="text-purple-400" />,
              title: "Systems Integration", 
              description: "Seamlessly connect your existing tools and platforms into a cohesive ecosystem." 
            },
            { 
              icon: <Database className="text-purple-400" />,
              title: "Operational Optimization", 
              description: "Streamline data pipelines and processes for maximum efficiency and reliability." 
            },
            {
              icon: <Router className="text-purple-400" />,
              title: "DevOps & Deployment", 
              description: "Implement continuous integration and automated build systems for reliable delivery." 
            }
          ].map((service, index) => (
            <Card key={index} className="glass-card hover:border-zinc-700/80 transition-all duration-300">
              <CardHeader className="pb-2">
                {service.icon}
                <CardTitle className="text-white text-lg font-medium mt-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-zinc-800/50 container mx-auto" />

      {/* Technical Expertise Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient-purple">
            Technical Expertise
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            We implement modern tools end-to-end with technical precision and deep expertise.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {[
            "API Integrations", "Data Pipelines", "Cloud Infrastructure", "Authentication Systems",
            "Database Design", "Serverless Functions", "System Architecture", "CI/CD Workflows"
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
              <span className="text-zinc-300 text-sm font-mono">{item}</span>
            </div>
          ))}
        </div>
      </section>
      
      {/* Clients Section (Minimal) */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Trusted By</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {['Client A', 'Client B', 'Client C', 'Client D'].map((client, i) => (
            <div key={i} className="text-zinc-500 font-mono text-xs">{client}</div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800/50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-xs mb-4 md:mb-0">
              © 2025 Modern Full. Modern Tools. Full Implementation.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@modernfull.com" className="text-zinc-500 hover:text-white text-xs transition-colors">
                contact@modernfull.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
