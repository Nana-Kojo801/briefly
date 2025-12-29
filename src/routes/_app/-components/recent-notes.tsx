import { Link } from '@tanstack/react-router'
import { Clock } from 'lucide-react'
import { RecentNote } from '../-mock-data'

interface RecentNotesProps {
  notes: RecentNote[]
}

export function RecentNotes({ notes }: RecentNotesProps) {
  if (notes.length === 0) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Clock className="h-4 w-4" />
        <span>Recent notes</span>
      </div>
      
      <div className="space-y-2">
        {notes.map((note) => (
          <Link
            key={note.id}
            to="/notes/$id"
            params={{ id: note.id }}
            className="block rounded-lg border border-border bg-card p-3 hover:bg-accent transition-colors"
          >
            <h4 className="text-sm font-medium mb-1 line-clamp-1">
              {note.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
              {note.preview}
            </p>
            <span className="text-xs text-muted-foreground">
              {formatDate(note.updatedAt)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}