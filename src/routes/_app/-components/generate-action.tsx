import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Sparkles, Loader2 } from 'lucide-react'

interface GenerateActionProps {
  rawInput: string
}

export function GenerateAction({ rawInput }: GenerateActionProps) {
  const navigate = useNavigate()
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!rawInput.trim()) return

    setIsGenerating(true)
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Navigate to editor with a mock ID
    navigate({ to: '/editor/$id', params: { id: 'new-note-1' } })
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