import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}
