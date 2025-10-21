import { Database, Zap, MessageSquare, Rocket, Code2, GitBranch, Server, Sparkles } from 'lucide-react';
import { AnimatedStrawberry } from './AnimatedStrawberry';

export function Features() {
  return (
    <section id="features" className="container px-4 py-32 md:px-6 relative">
      <div className="flex flex-col items-center space-y-4 text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Sweet Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Everything You Need
          <span className="block gradient-text mt-2">In One Delicious Package</span>
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          From idea to production in minutes, not months. Like magic, but real!
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        {/* Large Feature Card 1 */}
        <div className="md:col-span-6 lg:col-span-7 bento-card glass rounded-3xl p-8 border border-primary/10 group">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-strawberry-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Chat Interface</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Conversational backend design with Claude, OpenAI, or Mistral. Just describe what you need
                in plain English, and watch your backend come to life!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Claude AI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">GPT-4</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Mistral</span>
              </div>
            </div>
            <div className="flex justify-end pt-6">
              <AnimatedStrawberry size={100} />
            </div>
          </div>
        </div>

        {/* Medium Feature Card */}
        <div className="md:col-span-3 lg:col-span-5 bento-card glass rounded-3xl p-8 border border-primary/10 group">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Database className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Smart Schema Design</h3>
          <p className="text-muted-foreground leading-relaxed">
            AI-powered database modeling with automatic relationship detection,
            normalization, and perfect indexing. Say goodbye to SQL headaches!
          </p>
        </div>

        {/* Small Feature Cards Row 1 */}
        <div className="md:col-span-3 lg:col-span-4 bento-card glass rounded-3xl p-6 border border-primary/10 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">API Generation</h4>
          <p className="text-sm text-muted-foreground">
            Complete REST APIs with validation, error handling, and TypeScript types in seconds.
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-4 bento-card glass rounded-3xl p-6 border border-primary/10 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">Type-Safe Code</h4>
          <p className="text-sm text-muted-foreground">
            Full TypeScript support with end-to-end type safety and autocompletion.
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-4 bento-card glass rounded-3xl p-6 border border-primary/10 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">One-Click Deploy</h4>
          <p className="text-sm text-muted-foreground">
            Deploy to Railway, Vercel, or Docker with pre-configured environments.
          </p>
        </div>

        {/* Wide Feature Card */}
        <div className="md:col-span-6 lg:col-span-8 bento-card glass rounded-3xl p-8 border border-primary/10 group relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GitBranch className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Version Control Integration</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Seamless integration with Git. Track changes, collaborate with your team,
              and deploy with confidence. Every change is tracked and reversible.
            </p>
          </div>
          <div className="absolute -right-6 -bottom-6 opacity-10">
            <AnimatedStrawberry size={150} />
          </div>
        </div>

        {/* Tall Feature Card */}
        <div className="md:col-span-3 lg:col-span-4 bento-card glass rounded-3xl p-6 border border-primary/10 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Server className="w-6 h-6 text-primary" />
          </div>
          <h4 className="text-xl font-bold mb-2">Serverless Ready</h4>
          <p className="text-sm text-muted-foreground mb-6">
            Generate serverless functions that scale automatically. No infrastructure management needed.
          </p>
          <div className="flex justify-center pt-4">
            <AnimatedStrawberry size={60} />
          </div>
        </div>
      </div>
    </section>
  );
}
