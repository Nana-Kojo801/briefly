import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    name: v.string(),
    image: v.string(),
    email: v.string(),
    externalId: v.string(),
  }).index('byExternalId', ['externalId']),
  notes: defineTable({
    userId: v.id("users"),
    title: v.string(),
    preview: v.string(),
    rawInput: v.string(),
    generatedMarkdown: v.string()
  }).index('by_userId', ['userId'])
})
