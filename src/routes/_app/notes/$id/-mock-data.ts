// Mock data for note detail page

export interface NoteDetail {
  id: string
  title: string
  rawInput: string
  generatedMarkdown: string
  createdAt: string
  updatedAt: string
}

// Mock note lookup function
export const getNoteById = (id: string): NoteDetail | undefined => {
  const notes: Record<string, NoteDetail> = {
    "1": {
      id: "1",
      title: "React Hooks Fundamentals",
      rawInput: "useState useEffect custom hooks\ndependency array\nclosure issues\nrules of hooks\nperformance optimization",
      generatedMarkdown: `# React Hooks Fundamentals

## Overview

React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to provide a more direct API to the React concepts you already know.

## Core Hooks

### useState

The \`useState\` hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

### useEffect

The \`useEffect\` hook lets you perform side effects in functional components. It serves the same purpose as lifecycle methods in class components.

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They must start with "use" and can call other hooks.

## Rules of Hooks

1. Only call hooks at the top level
2. Only call hooks from React functions
3. Don't call hooks inside loops, conditions, or nested functions

## Performance Optimization

Use \`useMemo\` and \`useCallback\` to optimize performance by memoizing values and functions.`,
      createdAt: "2024-12-20T10:30:00Z",
      updatedAt: "2024-12-20T14:30:00Z"
    },
    "2": {
      id: "2",
      title: "Database Indexing Strategies",
      rawInput: "B-tree hash indexes\ncomposite indexes\nquery performance\nindex overhead\ncovering indexes",
      generatedMarkdown: `# Database Indexing Strategies

## Index Types

### B-tree Indexes

B-tree indexes are the most common type of database index. They maintain sorted data and allow searches, sequential access, insertions, and deletions in logarithmic time.

**When to use:**
- Range queries
- Sorting operations
- Most general-purpose queries

### Hash Indexes

Hash indexes use a hash function to map keys to index locations. They provide O(1) lookup time but don't support range queries.

**When to use:**
- Exact match queries
- High-performance lookups
- When range queries aren't needed

## Composite Indexes

Composite indexes span multiple columns. The order of columns matters - queries can use the index if they filter on the leftmost columns.

## Query Performance

Indexes dramatically speed up reads but slow down writes. Each index must be updated on INSERT, UPDATE, and DELETE operations.

## Covering Indexes

A covering index includes all columns needed by a query, eliminating the need to access the table itself.`,
      createdAt: "2024-12-19T09:15:00Z",
      updatedAt: "2024-12-19T09:15:00Z"
    },
    "3": {
      id: "3",
      title: "CSS Grid vs Flexbox",
      rawInput: "grid vs flexbox\n2d vs 1d layouts\nresponsive design\ngrid-template-areas\nflex-wrap",
      generatedMarkdown: `# CSS Grid vs Flexbox

## When to Use Each

### CSS Grid

Use CSS Grid when you need to control both rows and columns simultaneously. It's ideal for two-dimensional layouts.

**Best for:**
- Page layouts
- Card grids
- Complex, overlapping designs

### Flexbox

Use Flexbox for one-dimensional layouts where items flow in a single direction (row or column).

**Best for:**
- Navigation bars
- Card layouts in one direction
- Centering content
- Distributing space between items

## Key Differences

Grid is **two-dimensional** - it can handle rows and columns at the same time. Flexbox is **one-dimensional** - it handles either rows or columns.

## Responsive Design

Both Grid and Flexbox are excellent for responsive design:

- **Grid**: Use \`grid-template-columns\` with \`auto-fit\` and \`minmax()\`
- **Flexbox**: Use \`flex-wrap\` to allow items to wrap to new lines

## Grid Template Areas

Grid's template areas feature lets you name regions of your layout for more readable code:

\`\`\`css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
\`\`\``,
      createdAt: "2024-12-18T16:45:00Z",
      updatedAt: "2024-12-18T16:45:00Z"
    }
  }

  return notes[id]
}