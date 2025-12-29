import { NoteCard } from './note-card'
import { useSuspenseFetchNotes } from '@/queries-and-mutations/notes/note-queries'

export function NotesList() {
  const { data: notes } = useSuspenseFetchNotes()
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  )
}