import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock } from 'lucide-react'

interface NoteMetadataHeaderProps {
  title: string
  updatedAt: string
}

export function NoteMetadataHeader({ title, updatedAt }: NoteMetadataHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-4">
      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild className="gap-2 -ml-2">
        <Link to="/notes">
          <ArrowLeft className="h-4 w-4" />
          Back to Notes
        </Link>
      </Button>

      {/* Title and Metadata */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated {formatDate(updatedAt)}</span>
        </div>
      </div>
    </div>
  )
}