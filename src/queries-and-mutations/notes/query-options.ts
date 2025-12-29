import { convexQuery } from '@convex-dev/react-query'
import { api } from '@convex/_generated/api'

const GC_TIME = 60 * 1000

export const getFetchNotesQueryOptions = () => {
  return {
    ...convexQuery(api.notes.getNotes, {}),
    gcTime: GC_TIME,
  }
}

export const getFetchRecentNotesQueryOptions = () => {
  return {
    ...convexQuery(api.notes.getRecentNotes, {}),
    gcTime: 60 * 1000,
  }
}
