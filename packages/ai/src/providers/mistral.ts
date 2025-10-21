import { mistral } from '@ai-sdk/mistral';
import { streamText, generateText } from 'ai';

export interface MistralConfig {
  apiKey: string;
  model?: string;
}

export class MistralProvider {
  private apiKey: string;
  private model: string;

  constructor(config: MistralConfig) {
    this.apiKey = config.apiKey;
    this.model = config.model || 'mistral-large-latest';
  }

  async generateText(prompt: string, systemPrompt?: string) {
    const { text } = await generateText({
      model: mistral(this.model),
      prompt,
      system: systemPrompt,
    });
    return text;
  }

  async streamText(prompt: string, systemPrompt?: string) {
    return streamText({
      model: mistral(this.model),
      prompt,
      system: systemPrompt,
    });
  }
}
