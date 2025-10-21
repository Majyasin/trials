import { Database, Zap, MessageSquare, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat Interface',
    description:
      'Conversational backend design with Claude, OpenAI, or Mistral. Just describe what you need.',
  },
  {
    icon: Database,
    title: 'Smart Schema Design',
    description:
      'AI-powered database modeling with automatic relationship detection and normalization.',
  },
  {
    icon: Zap,
    title: 'API Generation',
    description:
      'Generate complete REST APIs with validation, error handling, and TypeScript types.',
  },
  {
    icon: Rocket,
    title: 'One-Click Deploy',
    description:
      'Deploy to Railway, Vercel, or Docker with pre-configured environments.',
  },
];

export function Features() {
  return (
    <section className="container px-4 py-24 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Everything You Need
        </h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          From idea to production in minutes, not months.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border/50">
            <CardHeader>
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
