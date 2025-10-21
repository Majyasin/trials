import { Check, Sparkles, Crown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedStrawberry } from './AnimatedStrawberry';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Woap',
    icon: Sparkles,
    features: [
      '3 projects',
      'Basic AI chat',
      'Schema designer',
      'API generator',
      'Community support',
      'Export code',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious developers',
    icon: Crown,
    features: [
      'Unlimited projects',
      'Advanced AI (GPT-4, Claude)',
      'Priority support',
      'Team collaboration',
      'Custom deployments',
      'API analytics',
      'Version control',
      'Advanced templates',
    ],
    cta: 'Go Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large teams',
    icon: Building2,
    features: [
      'Everything in Pro',
      'Dedicated support',
      'SLA guarantees',
      'On-premise deployment',
      'Custom integrations',
      'Training & onboarding',
      'Custom AI models',
      'Audit logs',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="container px-4 py-32 md:px-6 relative">
      <div className="flex flex-col items-center space-y-4 text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
          <Crown className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Sweet Pricing</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Simple, Transparent
          <span className="block gradient-text mt-2">Strawberry-Sweet Pricing</span>
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Choose the plan that fits your needs. All plans include our delicious AI magic! 🍓
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.name}
              className={`relative bento-card glass rounded-3xl p-8 border transition-all animate-fade-in-up ${
                plan.popular
                  ? 'border-primary/30 shadow-xl shadow-primary/10 scale-105'
                  : 'border-primary/10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-strawberry-gradient text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl ${plan.popular ? 'bg-strawberry-gradient' : 'bg-gradient-to-br from-primary/20 to-accent/20'} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>

                <Link href="/signup">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-strawberry-gradient hover:opacity-90'
                        : 'border-primary/20 hover:bg-primary/5'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.popular && (
                <div className="absolute -bottom-6 right-6 opacity-20">
                  <AnimatedStrawberry size={80} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="mt-32 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h4 className="font-semibold mb-2">Can I change plans later?</h4>
            <p className="text-sm text-muted-foreground">
              Of course! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h4 className="font-semibold mb-2">Is there a free trial?</h4>
            <p className="text-sm text-muted-foreground">
              Yes! Our Starter plan is free forever. No credit card required. Upgrade when you're ready!
            </p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
            <p className="text-sm text-muted-foreground">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
