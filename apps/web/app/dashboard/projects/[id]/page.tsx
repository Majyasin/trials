import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Link from 'next/link';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Project Details</h1>
        <p className="text-muted-foreground">Project ID: {params.id}</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <Link href={`/dashboard/projects/${params.id}/chat`}>
            <TabsTrigger value="chat">Chat</TabsTrigger>
          </Link>
          <Link href={`/dashboard/projects/${params.id}/schema`}>
            <TabsTrigger value="schema">Schema</TabsTrigger>
          </Link>
          <Link href={`/dashboard/projects/${params.id}/api-explorer`}>
            <TabsTrigger value="api">API</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <p>Project overview and settings go here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
