import { Link } from '@tanstack/react-router'
import { FileText, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmptyNotesState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-muted p-4 mb-4">
        <FileText className="h-8 w-8 text-muted-foreground" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2">
        No notes yet
      </h3>
      
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        Generate your first explanation to see it here. All your saved notes will appear on this page.
      </p>
      
      <Button asChild className="gap-2">
        <Link to="/">
          <Plus className="h-4 w-4" />
          Create Your First Note
        </Link>
      </Button>
    </div>
  )
}