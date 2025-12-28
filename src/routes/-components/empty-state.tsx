import { FileText } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="rounded-full bg-muted p-3 mb-4">
        <FileText className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">
        No notes yet
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm">
        Paste your messy or unclear notes above to transform them into a clear, structured explanation.
      </p>
    </div>
  )
}