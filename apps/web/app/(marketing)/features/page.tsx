import { Features } from '@/components/landing/Features';

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-12 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        <Features />
      </div>
    </main>
  );
}
