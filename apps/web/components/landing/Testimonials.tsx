import { Star, Quote } from 'lucide-react';
import { AnimatedStrawberry } from './AnimatedStrawberry';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder @ TechStart',
    avatar: '👩‍💻',
    content: 'Woap helped me build my entire backend in a weekend! The AI understood exactly what I needed. Absolutely game-changing! 🍓',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Senior Dev @ DataCorp',
    avatar: '👨‍💻',
    content: 'I was skeptical at first, but the quality of generated code is incredible. Saved our team weeks of work!',
    rating: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'CTO @ StartupHub',
    avatar: '👩‍🚀',
    content: 'The sweetest dev tool I've ever used! Beautiful interface and powerful AI. Can't imagine building backends any other way now.',
    rating: 5,
  },
  {
    name: 'Alex Kim',
    role: 'Indie Hacker',
    avatar: '🧑‍💼',
    content: 'As a solo developer, Woap is my secret weapon. I ship features 10x faster now. The strawberry theme is adorable too! 🍓',
    rating: 5,
  },
  {
    name: 'Jordan Lee',
    role: 'Product Manager',
    avatar: '👨‍💼',
    content: 'Even non-technical team members can understand and contribute to backend design now. Amazing collaboration tool!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Full-Stack Dev',
    avatar: '👩‍🔬',
    content: 'The API generation is mind-blowing. What used to take days now takes minutes. Plus, the code is production-ready!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="container px-4 py-32 md:px-6 relative overflow-hidden">
      {/* Background strawberries */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <AnimatedStrawberry size={80} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 animate-bounce">
        <AnimatedStrawberry size={70} delay={1000} />
      </div>

      <div className="flex flex-col items-center space-y-4 text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
          <Quote className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Loved by Developers</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          What Our Sweet Users
          <span className="block gradient-text mt-2">Are Saying</span>
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Join thousands of developers building amazing backends with Woap
        </p>
      </div>

      {/* Testimonials Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="bento-card glass rounded-3xl p-6 border border-primary/10 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
        <div className="glass rounded-2xl p-6 border border-primary/10">
          <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
          <div className="text-sm text-muted-foreground">Average Rating</div>
        </div>
        <div className="glass rounded-2xl p-6 border border-primary/10">
          <div className="text-4xl font-bold gradient-text mb-2">2,500+</div>
          <div className="text-sm text-muted-foreground">Happy Reviews</div>
        </div>
        <div className="glass rounded-2xl p-6 border border-primary/10">
          <div className="text-4xl font-bold gradient-text mb-2">99%</div>
          <div className="text-sm text-muted-foreground">Would Recommend</div>
        </div>
      </div>
    </section>
  );
}
