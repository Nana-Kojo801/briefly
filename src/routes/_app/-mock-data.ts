// Mock data for the home page

export interface RecentNote {
  id: string
  title: string
  preview: string
  updatedAt: string
}

// Recent notes to show in the home page (optional quick access)
export const recentNotes: RecentNote[] = [
  {
    id: '1',
    title: 'React Hooks Fundamentals',
    preview: 'Understanding useState, useEffect, and custom hooks...',
    updatedAt: '2024-12-20T14:30:00Z',
  },
  {
    id: '2',
    title: 'Database Indexing Strategies',
    preview: 'B-tree vs Hash indexes, when to use composite indexes...',
    updatedAt: '2024-12-19T09:15:00Z',
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox',
    preview: 'When to use each layout system, common patterns...',
    updatedAt: '2024-12-18T16:45:00Z',
  },
]

// Sample raw input for placeholder/demo
export const sampleRawInput = `useState useEffect custom hooks
dependency array
closure issues
rules of hooks
performance optimization`
