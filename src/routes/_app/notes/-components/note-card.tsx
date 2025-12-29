import { Link } from '@tanstack/react-router'
import { Clock, FileText } from 'lucide-react'
import { type DataModel } from '@convex/_generated/dataModel'

interface NoteCardProps {
  note: DataModel['notes']['document']
}

export function NoteCard({ note }: NoteCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <Link
      to="/notes/$id"
      params={{ id: note._id }}
      className="block group"
    >
      <div className="bg-card border border-border rounded-lg p-5 hover:bg-accent transition-colors">
        {/* Title */}
        <h3 className="text-base font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {note.title}
        </h3>
        
        {/* Preview */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {note.preview}
        </p>
        
        {/* Footer */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDate(new Date(note._creationTime).toISOString())}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5" />
            <span>{note.rawInput.split('\n').length} lines</span>
          </div>
        </div>
      </div>
    </Link>
  )
}