import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { Pricing } from '@/components/landing/Pricing';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream-100">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
}
