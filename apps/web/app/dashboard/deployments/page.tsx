import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function DeploymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Deployments</h1>
        <p className="text-muted-foreground">View your deployment history</p>
      </div>

      <Card>
        <CardHeader className="text-center py-12">
          <CardTitle>No deployments yet</CardTitle>
          <CardDescription>
            Deploy your first project to see deployments here
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
