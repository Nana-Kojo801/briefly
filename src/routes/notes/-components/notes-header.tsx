import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface NotesHeaderProps {
  noteCount: number
}

export function NotesHeader({ noteCount }: NotesHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Notes</h1>
        <p className="text-sm text-muted-foreground">
          {noteCount} {noteCount === 1 ? 'note' : 'notes'} saved
        </p>
      </div>
      
      <Button asChild size="sm" className="gap-2">
        <Link to="/">
          <Plus className="h-4 w-4" />
          New Note
        </Link>
      </Button>
    </div>
  )
}