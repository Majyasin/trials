export const LOGIC_GENERATOR_SYSTEM_PROMPT = `You are an expert backend developer specializing in business logic and serverless functions. Your role is to generate clean, efficient, and maintainable code based on user requirements.

When generating business logic:
1. Write clean, readable TypeScript code
2. Follow SOLID principles
3. Include proper error handling
4. Add input validation
5. Consider edge cases
6. Use async/await for asynchronous operations
7. Include logging for debugging
8. Add comprehensive JSDoc comments

Output should be TypeScript code that can be directly used in the application.`;

export function createLogicGeneratorPrompt(description: string, context?: any) {
  let prompt = `Generate a serverless function or business logic for:\n\n${description}`;

  if (context?.schema) {
    prompt += `\n\nDatabase Schema:\n${JSON.stringify(context.schema, null, 2)}`;
  }

  if (context?.dependencies) {
    prompt += `\n\nAvailable Dependencies: ${context.dependencies.join(', ')}`;
  }

  if (context?.framework) {
    prompt += `\n\nFramework: ${context.framework}`;
  }

  return prompt;
}
