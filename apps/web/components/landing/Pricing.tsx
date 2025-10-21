import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying out Woap',
    features: [
      '3 projects',
      'Basic AI chat',
      'Schema designer',
      'API generator',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For serious developers',
    features: [
      'Unlimited projects',
      'Advanced AI (GPT-4, Claude)',
      'Priority support',
      'Team collaboration',
      'Custom deployments',
      'API analytics',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'SLA guarantees',
      'On-premise deployment',
      'Custom integrations',
      'Training & onboarding',
    ],
  },
];

export function Pricing() {
  return (
    <section className="container px-4 py-24 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Simple Pricing
        </h2>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          Choose the plan that works for you.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? 'border-primary' : 'border-border/50'}
          >
            <CardHeader>
              {plan.popular && (
                <span className="text-xs font-semibold text-primary mb-2">
                  MOST POPULAR
                </span>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-400">/month</span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
