import { SchemaEditor } from '@/components/schema/SchemaEditor';

export default function ProjectSchemaPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Database Schema</h1>
        <p className="text-muted-foreground">Design your database structure</p>
      </div>
      <SchemaEditor />
    </div>
  );
}
