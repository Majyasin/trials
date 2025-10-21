import { ChatInterface } from '@/components/chat/ChatInterface';

export default function ProjectChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Chat</h1>
        <p className="text-muted-foreground">
          Design your backend through conversation
        </p>
      </div>
      <ChatInterface />
    </div>
  );
}
