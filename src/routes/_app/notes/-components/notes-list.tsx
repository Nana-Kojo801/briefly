import { NoteCard } from './note-card'
import { Note } from '../-mock-data'

interface NotesListProps {
  notes: Note[]
}

export function NotesList({ notes }: NotesListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}