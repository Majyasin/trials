'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FolderKanban, Zap, Rocket, TrendingUp } from 'lucide-react';

const stats = [
  {
    title: 'Total Projects',
    value: '0',
    icon: FolderKanban,
    description: 'Active projects',
  },
  {
    title: 'APIs Generated',
    value: '0',
    icon: Zap,
    description: 'Total endpoints',
  },
  {
    title: 'Deployments',
    value: '0',
    icon: Rocket,
    description: 'Successful deploys',
  },
  {
    title: 'Growth',
    value: '0%',
    icon: TrendingUp,
    description: 'This month',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Create your first project to start building backends with AI.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
