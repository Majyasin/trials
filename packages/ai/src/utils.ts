import { OpenAIProvider } from './providers/openai';
import { ClaudeProvider } from './providers/claude';
import { MistralProvider } from './providers/mistral';

export type AIProvider = 'openai' | 'claude' | 'mistral';

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model?: string;
}

export function createAIProvider(config: AIConfig) {
  switch (config.provider) {
    case 'openai':
      return new OpenAIProvider({ apiKey: config.apiKey, model: config.model });
    case 'claude':
      return new ClaudeProvider({ apiKey: config.apiKey, model: config.model });
    case 'mistral':
      return new MistralProvider({ apiKey: config.apiKey, model: config.model });
    default:
      throw new Error(`Unknown AI provider: ${config.provider}`);
  }
}

export function parseJSONFromText(text: string): any {
  // Try to extract JSON from markdown code blocks
  const jsonBlockMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
  if (jsonBlockMatch) {
    return JSON.parse(jsonBlockMatch[1]);
  }

  // Try to find JSON object in the text
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    return JSON.parse(jsonMatch[0]);
  }

  throw new Error('No valid JSON found in AI response');
}
