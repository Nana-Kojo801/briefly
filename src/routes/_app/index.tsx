import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { RawNotesInput } from './-components/raw-notes-input'
import { GenerateAction } from './-components/generate-action'
import { EmptyState } from './-components/empty-state'
import { RecentNotes } from './-components/recent-notes'
import { useFetchRecentNotes } from '@/queries-and-mutations/notes/note-queries'
import { RecentNotesSkeleton } from './-components/recent-notes-skeleton'

export const Route = createFileRoute('/_app/')({ component: App })

function App() {
  const recentNotesQuery = useFetchRecentNotes()
  const [rawInput, setRawInput] = useState('')

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Section */}
      <div className="space-y-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Transform messy notes into clarity
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Paste your rough notes and get a clear, structured explanation that
          helps you understand and remember.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <RawNotesInput value={rawInput} onChange={setRawInput} />
        <GenerateAction rawInput={rawInput} />
      </div>

      {/* Recent Notes or Empty State */}
      <div className="bg-card border border-border rounded-lg p-6">
        {recentNotesQuery.isLoading ? (
          <RecentNotesSkeleton />
        ) : recentNotesQuery.data?.length! > 0 ? (
          <RecentNotes notes={recentNotesQuery.data!} />
        ) : (
          <EmptyState />
        )}
      </div>
    </main>
  )
}
