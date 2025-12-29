import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Save, Download, Check, Loader2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface NoteActionBarProps {
  onSave: () => void
  onExport: (format: string) => void
}

export function NoteActionBar({ onSave, onExport }: NoteActionBarProps) {
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    onSave()
    
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setIsSaving(false)
    setIsSaved(true)
    
    // Reset saved state after 2 seconds
    setTimeout(() => setIsSaved(false), 2000)
  }

  const handleExport = (format: string) => {
    onExport(format)
    // In a real app, this would trigger a download
  }

  return (
    <div className="flex items-center gap-2">
      {/* Save Button */}
      <Button
        onClick={handleSave}
        disabled={isSaving || isSaved}
        className="gap-2"
      >
        {isSaving ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : isSaved ? (
          <>
            <Check className="h-4 w-4" />
            Saved
          </>
        ) : (
          <>
            <Save className="h-4 w-4" />
            Save
          </>
        )}
      </Button>

      {/* Export Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleExport('markdown')}>
            Export as Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport('pdf')} disabled>
            Export as PDF
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleExport('html')} disabled>
            Export as HTML
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}