import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'
import { generateText, Output, gateway } from 'ai'
import systemPrompt from '@/lib/system-prompt'
import { useConvex } from 'convex/react'
import { z } from 'zod'

interface GenerateActionProps {
  rawInput: string
}

export function GenerateAction({ rawInput }: GenerateActionProps) {
  const navigate = useNavigate()
  const convex = useConvex()
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!rawInput.trim()) return

    setIsGenerating(true)

    // Simulate AI generation
    try {
      const output = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rawInput }),
      }).then((res) => res.json())
      console.log(output)
      setIsGenerating(false)
    } catch (error) {
      console.log(error)
      setIsGenerating(false)
    }

    // Navigate to editor with a mock ID
    // navigate({ to: '/notes/$id', params: { id: 'new-note-1' } })
  }

  const isDisabled = !rawInput.trim() || isGenerating

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={handleGenerate}
        disabled={isDisabled}
        size="lg"
        className="w-full sm:w-auto gap-2"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating explanation...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Generate Explanation
          </>
        )}
      </Button>

      {isGenerating && (
        <p className="text-sm text-muted-foreground animate-pulse">
          Transforming your notes into a clear explanation...
        </p>
      )}
    </div>
  )
}
