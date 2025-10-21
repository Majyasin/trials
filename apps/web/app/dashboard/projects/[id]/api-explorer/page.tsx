import { APIExplorer } from '@/components/api/APIExplorer';

export default function ProjectAPIPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">API Explorer</h1>
        <p className="text-muted-foreground">Browse and test your API endpoints</p>
      </div>
      <APIExplorer />
    </div>
  );
}
