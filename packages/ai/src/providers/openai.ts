import { openai } from '@ai-sdk/openai';
import { streamText, generateText } from 'ai';

export interface OpenAIConfig {
  apiKey: string;
  model?: string;
}

export class OpenAIProvider {
  private apiKey: string;
  private model: string;

  constructor(config: OpenAIConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'gpt-4-turbo-preview';
  }

  async generateText(prompt: string, systemPrompt?: string) {
    const { text } = await generateText({
      model: openai(this.model),
      prompt,
      system: systemPrompt,
    });
    return text;
  }

  async streamText(prompt: string, systemPrompt?: string) {
    return streamText({
      model: openai(this.model),
      prompt,
      system: systemPrompt,
    });
  }
}
