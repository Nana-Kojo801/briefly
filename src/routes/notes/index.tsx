import { createFileRoute } from '@tanstack/react-router'
import { NotesHeader } from './-components/notes-header'
import { NotesList } from './-components/notes-list'
import { EmptyNotesState } from './-components/empty-notes-state'
import { mockNotes } from './-mock-data'

export const Route = createFileRoute('/notes/')({
  component: NotesPage,
})

function NotesPage() {
  // Use mockNotes for demonstration
  // To show empty state, change to: const notes = []
  const notes = mockNotes

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <NotesHeader noteCount={notes.length} />

        {/* Notes List or Empty State */}
        {notes.length > 0 ? (
          <NotesList notes={notes} />
        ) : (
          <div className="bg-card border border-border rounded-lg">
            <EmptyNotesState />
          </div>
        )}
      </div>
    </main>
  )
}