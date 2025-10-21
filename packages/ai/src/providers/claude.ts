import { anthropic } from '@ai-sdk/anthropic';
import { streamText, generateText } from 'ai';

export interface ClaudeConfig {
  apiKey: string;
  model?: string;
}

export class ClaudeProvider {
  private apiKey: string;
  private model: string;

  constructor(config: ClaudeConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'claude-3-5-sonnet-20241022';
  }

  async generateText(prompt: string, systemPrompt?: string) {
    const { text } = await generateText({
      model: anthropic(this.model),
      prompt,
      system: systemPrompt,
    });
    return text;
  }

  async streamText(prompt: string, systemPrompt?: string) {
    return streamText({
      model: anthropic(this.model),
      prompt,
      system: systemPrompt,
    });
  }
}
