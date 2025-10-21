import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden stars-bg">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Build Backends with
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI-Powered Conversations
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Design complete REST APIs, database schemas, and deployment configurations
              through natural language. No code required.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
