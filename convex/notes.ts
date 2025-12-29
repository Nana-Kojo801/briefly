import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { getCurrentUserOrThrow } from './users'

export const getNotes = query({
  handler: async (ctx) => {
    const user = await getCurrentUserOrThrow(ctx)

    return await ctx.db
      .query('notes')
      .withIndex('by_userId', (q) => q.eq('userId', user._id))
      .collect()
  },
})

export const getRecentNotes = query({
  handler: async (ctx) => {
    const user = await getCurrentUserOrThrow(ctx)

    return await ctx.db
      .query('notes')
      .withIndex('by_userId', (q) => q.eq('userId', user._id))
      .order('desc')
      .take(5)
  },
})

export const addNote = mutation({
  args: {
    title: v.string(),
    preview: v.string(),
    rawInput: v.string(),
    generatedMarkdown: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUserOrThrow(ctx)

    const id = await ctx.db.insert('notes', {
      userId: user._id,
      ...args,
    })

    return id
  },
})
