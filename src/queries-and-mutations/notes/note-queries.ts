import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { getFetchNotesQueryOptions, getFetchRecentNotesQueryOptions } from './query-options'

export const useFetchNotes = () => useQuery(getFetchNotesQueryOptions())
export const useSuspenseFetchNotes = () => useSuspenseQuery(getFetchNotesQueryOptions())

export const useFetchRecentNotes = () => useQuery(getFetchRecentNotesQueryOptions())