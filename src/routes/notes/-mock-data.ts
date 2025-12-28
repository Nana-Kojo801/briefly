// Mock data for notes list page

export interface Note {
  id: string
  title: string
  preview: string
  rawInput: string
  generatedMarkdown: string
  createdAt: string
  updatedAt: string
}

export const mockNotes: Note[] = [
  {
    id: "1",
    title: "React Hooks Fundamentals",
    preview: "Understanding useState, useEffect, and custom hooks. The hook system provides a way to use state and lifecycle features...",
    rawInput: "useState useEffect custom hooks\ndependency array\nclosure issues\nrules of hooks\nperformance optimization",
    generatedMarkdown: "# React Hooks Fundamentals\n\n## Overview\nReact Hooks provide a way to use state and other React features without writing a class...",
    createdAt: "2024-12-20T10:30:00Z",
    updatedAt: "2024-12-20T14:30:00Z"
  },
  {
    id: "2",
    title: "Database Indexing Strategies",
    preview: "Exploring B-tree vs Hash indexes, composite indexes, and when to use each type for optimal query performance...",
    rawInput: "B-tree hash indexes\ncomposite indexes\nquery performance\nindex overhead\ncovering indexes",
    generatedMarkdown: "# Database Indexing Strategies\n\n## Index Types\n\n### B-tree Indexes\nB-tree indexes are the most common type...",
    createdAt: "2024-12-19T09:15:00Z",
    updatedAt: "2024-12-19T09:15:00Z"
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    preview: "When to use CSS Grid for two-dimensional layouts versus Flexbox for one-dimensional layouts. Common patterns and best practices...",
    rawInput: "grid vs flexbox\n2d vs 1d layouts\nresponsive design\ngrid-template-areas\nflex-wrap",
    generatedMarkdown: "# CSS Grid vs Flexbox\n\n## When to Use Each\n\n### CSS Grid\nUse Grid when you need to control both rows and columns...",
    createdAt: "2024-12-18T16:45:00Z",
    updatedAt: "2024-12-18T16:45:00Z"
  },
  {
    id: "4",
    title: "REST API Design Principles",
    preview: "Best practices for designing RESTful APIs including proper HTTP methods, status codes, versioning strategies...",
    rawInput: "REST principles\nHTTP methods GET POST PUT DELETE\nstatus codes\nversioning\nidempotency",
    generatedMarkdown: "# REST API Design Principles\n\n## HTTP Methods\n\n### GET\nUsed to retrieve resources...",
    createdAt: "2024-12-17T13:20:00Z",
    updatedAt: "2024-12-17T13:20:00Z"
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    preview: "Introduction to supervised vs unsupervised learning, training data, model evaluation metrics, and overfitting prevention...",
    rawInput: "supervised unsupervised learning\ntraining data test data\noverfitting underfitting\nmodel evaluation\ncross-validation",
    generatedMarkdown: "# Machine Learning Basics\n\n## Learning Types\n\n### Supervised Learning\nThe algorithm learns from labeled data...",
    createdAt: "2024-12-16T11:00:00Z",
    updatedAt: "2024-12-16T11:00:00Z"
  }
]