'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Send } from 'lucide-react';

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { role: 'user', content: message }]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'This is a placeholder AI response. Connect your AI provider in settings.',
        },
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-auto space-y-4 p-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            Start a conversation to design your backend
          </div>
        ) : (
          messages.map((msg, i) => (
            <Card key={i} className={`p-4 ${msg.role === 'user' ? 'ml-12' : 'mr-12'}`}>
              <p className="text-sm font-semibold mb-2">
                {msg.role === 'user' ? 'You' : 'AI'}
              </p>
              <p>{msg.content}</p>
            </Card>
          ))
        )}
      </div>
      <div className="border-t p-4 flex gap-2">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your backend requirements..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
