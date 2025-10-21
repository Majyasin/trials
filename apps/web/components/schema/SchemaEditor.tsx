'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function SchemaEditor() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Database Schema</h3>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Table
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>No tables yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Use the AI chat to generate a schema or add tables manually
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
