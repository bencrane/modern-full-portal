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
  ServerCog,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">
      {/* Header/Navbar */}
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

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
                <Terminal size={14} className="mr-2 text-purple-400" />
                Modern Tools. Full Implementation.
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient leading-[1.2]">
                End-to-End Backend Infrastructure Systems
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed max-w-lg">
                We architect and implement comprehensive backend solutions, transforming complex technical challenges into streamlined operational systems. No half measures.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Button className="premium-button px-6 py-6">
                  Talk to Us <ArrowRight className="ml-2" size={16} />
                </Button>
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
                  Explore Solutions
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="premium-card p-8 h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
                <div className="relative z-10">
                  <ServerCog size={32} className="text-purple-400/70 mb-6" />
                  <div className="font-mono text-xs text-zinc-500 space-y-4">
                    <div>Infrastructure Diagram</div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-zinc-800/50 h-3 rounded" />
                      ))}
                    </div>
                    <div className="text-[10px] opacity-70">system-architecture.config</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 text-xs font-mono text-zinc-400">
            <Workflow size={14} className="mr-2 text-purple-400" />
            Core Capabilities
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple">
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
              title: "Data Pipeline Optimization", 
              description: "Streamline your data flows and processing for maximum efficiency and reliability." 
            },
            {
              icon: <Router className="text-purple-400" />,
              title: "DevOps & Deployment", 
              description: "Implement continuous integration and automated build systems for reliable delivery." 
            }
          ].map((service, index) => (
            <Card key={index} className="premium-card group">
              <CardHeader className="pb-2">
                {service.icon}
                <CardTitle className="text-white text-lg font-medium mt-3">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />

      {/* Our Approach Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple mb-8">
          Our Approach
        </h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-zinc-300 leading-relaxed">
            We don't dabble. We implement.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            ModernFull exists to architect and operationalize the backend systems that power serious businesses. We specialize in stitching together modern tools into fully integrated systems that actually run — at scale, and in production.
          </p>
          <div className="space-y-4">
            <p className="text-zinc-300 leading-relaxed">Our ethos is grounded in two principles:</p>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span><span className="text-zinc-300">Real business context</span> — implementation must serve operational goals, not abstractions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-500 mr-2">•</span>
                <span><span className="text-zinc-300">No half measures</span> — we own execution end-to-end, not just strategy decks or handoff docs.</span>
              </li>
            </ul>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Whether it's building a CRM enrichment layer, automating proposal generation, or deploying a CI/CD pipeline, we don't just wire tools together — we build infrastructure that holds.
          </p>
        </div>
      </section>

      <Separator className="bg-zinc-800/50 max-w-7xl mx-auto" />

      {/* Technical Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gradient-purple mb-4">
            Technical Expertise
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            We implement modern tools end-to-end with technical precision and deep expertise.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {[
            "API Design & Integration",
            "Event-Driven Architecture",
            "Cloud Infrastructure",
            "Authentication Systems",
            "Database Optimization",
            "Serverless Functions",
            "System Architecture",
            "CI/CD Implementation"
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3 opacity-70" />
              <span className="text-zinc-300 text-sm font-mono">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Trusted By Industry Leaders</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {['Enterprise A', 'Enterprise B', 'Enterprise C', 'Enterprise D'].map((client, i) => (
            <div key={i} className="text-zinc-500 font-mono text-xs">{client}</div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
