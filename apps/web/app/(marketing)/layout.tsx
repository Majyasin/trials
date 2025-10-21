import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedStrawberry } from '@/components/landing/AnimatedStrawberry';
import { Heart, Github, Twitter } from 'lucide-react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 glass backdrop-blur-lg">
        <div className="container flex h-16 items-center">
          <div className="mr-8 flex">
            <Link href="/" className="mr-8 flex items-center space-x-2 group">
              <AnimatedStrawberry size={32} className="group-hover:scale-110 transition-transform" />
              <span className="font-bold text-2xl gradient-text">
                Woap
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/#features"
                className="transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center space-x-3">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-primary/5">Login</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-strawberry-gradient hover:opacity-90">Sign Up Free</Button>
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-primary/10 bg-white/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <AnimatedStrawberry size={40} />
                <span className="font-bold text-2xl gradient-text">Woap</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Building sweet backends with AI magic. From idea to production in minutes,
                not months. 🍓
              </p>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/5">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/5">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Roadmap</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by developers, for developers. © 2024 Woap.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
