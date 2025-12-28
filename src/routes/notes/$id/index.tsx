import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { NoteMetadataHeader } from './-components/note-metadata-header'
import { TiptapEditor } from './-components/tiptap-editor'
import { NoteActionBar } from './-components/note-action-bar'
import { getNoteById } from './-mock-data'

export const Route = createFileRoute('/notes/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const note = getNoteById(id)

  // If note not found, show error
  if (!note) {
    return (
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Note not found</h2>
          <p className="text-muted-foreground">
            The note you're looking for doesn't exist or has been deleted.
          </p>
        </div>
      </main>
    )
  }

  const [content, setContent] = useState(note.generatedMarkdown)

  const handleSave = () => {
    console.log('Saving note...', { id: note.id, content })
    // In real app: save to database
  }

  const handleExport = (format: string) => {
    console.log('Exporting as:', format)
    // In real app: trigger download
  }

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Header with metadata */}
        <NoteMetadataHeader 
          title={note.title} 
          updatedAt={note.updatedAt} 
        />

        {/* TipTap WYSIWYG Editor */}
        <TiptapEditor 
          initialContent={content} 
          onContentChange={setContent}
        />

        {/* Action Bar */}
        <div className="flex justify-end">
          <NoteActionBar 
            onSave={handleSave}
            onExport={handleExport}
          />
        </div>
      </div>
    </main>
  )
}