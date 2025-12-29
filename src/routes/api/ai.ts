import systemPrompt from '@/lib/system-prompt'
import { createFileRoute } from '@tanstack/react-router'
import { generateText, Output } from 'ai'
import { deepseek } from '@ai-sdk/deepseek';
import z from 'zod'

export const Route = createFileRoute('/api/ai')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { rawInput } = await request.json()

        const { output } = await generateText({
          model: deepseek('deepseek-chat'),
          output: Output.object({
            schema: z.object({
              title: z.string(),
              preview: z.string(),
              rawInput: z.string(),
              generatedMarkdown: z.string(),
            }),
          }),
          system: systemPrompt,
          prompt: rawInput,
        })

        return new Response(JSON.stringify(output))
      },
    },
  },
})
