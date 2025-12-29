import { createFileRoute } from '@tanstack/react-router'
import { NotesHeader } from './-components/notes-header'
import { NotesList } from './-components/notes-list'
import { EmptyNotesState } from './-components/empty-notes-state'
import { useSuspenseFetchNotes } from '@/queries-and-mutations/notes/note-queries'
import { NotesSkeleton } from './-components/notes-skeleton'

export const Route = createFileRoute('/_app/notes/')({
  component: NotesPage,
  pendingComponent: NotesSkeleton,
})

function NotesPage() {
  const { data: notes } = useSuspenseFetchNotes()

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <NotesHeader noteCount={notes.length} />

        {/* Notes List or Empty State */}
        {notes.length > 0 ? (
          <NotesList />
        ) : (
          <div className="bg-card border border-border rounded-lg">
            <EmptyNotesState />
          </div>
        )}
      </div>
    </main>
  )
}
