import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, MessageSquare, Database } from 'lucide-react';
import { AnimatedStrawberry, StrawberryPattern } from './AnimatedStrawberry';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden strawberry-bg">
      <StrawberryPattern />

      <div className="container px-4 md:px-6 py-20 relative z-10">
        {/* Main Content - Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Main Hero Content - Takes up 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Backend Builder</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Build Backends
                <span className="block mt-2 gradient-text">
                  with Sweet AI Magic
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Design complete REST APIs, database schemas, and deployment configurations
                through delightful conversations. As easy as strawberry shortcake! 🍓
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Link href="/signup">
                <Button size="lg" className="gap-2 bg-strawberry-gradient hover:opacity-90 transition-opacity">
                  Get Started Free <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5">
                  <Sparkles className="h-5 w-5" />
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10k+</div>
                <div className="text-sm text-muted-foreground">APIs Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5k+</div>
                <div className="text-sm text-muted-foreground">Happy Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Bento Grid Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Feature Card 1 - Tall */}
            <div className="col-span-2 row-span-2 bento-card glass rounded-2xl p-6 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-strawberry-gradient flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Chat Interface</h3>
                  <p className="text-sm text-muted-foreground">
                    Just describe what you need, and watch the magic happen.
                    Our AI understands your backend requirements perfectly.
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <AnimatedStrawberry size={80} />
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bento-card glass rounded-2xl p-6 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Smart Schemas</h4>
              <p className="text-xs text-muted-foreground">
                Auto-designed databases with perfect relationships
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bento-card glass rounded-2xl p-6 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Instant APIs</h4>
              <p className="text-xs text-muted-foreground">
                Production-ready endpoints in seconds
              </p>
            </div>
          </div>
        </div>

        {/* Floating Strawberries */}
        <div className="absolute top-20 right-10 animate-float hidden xl:block">
          <AnimatedStrawberry size={60} />
        </div>
        <div className="absolute bottom-40 left-10 animate-bounce hidden xl:block">
          <AnimatedStrawberry size={50} delay={1000} />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
}
