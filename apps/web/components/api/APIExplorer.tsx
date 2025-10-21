'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function APIExplorer() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">API Endpoints</h3>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Endpoint
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>No endpoints yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Use the AI chat to generate endpoints or add them manually
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
