import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/server/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  FolderKanban,
  Rocket,
  Settings,
  LogOut,
} from 'lucide-react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-border/40 bg-background/95">
        <div className="flex h-14 items-center border-b border-border/40 px-6">
          <Link href="/dashboard" className="font-bold text-xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Woap
            </span>
          </Link>
        </div>
        <nav className="space-y-2 p-4">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/projects">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FolderKanban className="h-4 w-4" />
              Projects
            </Button>
          </Link>
          <Link href="/dashboard/deployments">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Rocket className="h-4 w-4" />
              Deployments
            </Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-border/40">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-semibold">
                {session.user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{session.user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {session.user?.email}
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full gap-2" size="sm">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="container py-6 px-8">{children}</div>
      </main>
    </div>
  );
}
