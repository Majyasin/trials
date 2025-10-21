'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">Manage your backend projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <Card>
        <CardHeader className="text-center py-12">
          <CardTitle>No projects yet</CardTitle>
          <CardDescription>
            Create your first project to start building with AI
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
