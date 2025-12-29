# 📄 PROJECT SPECIFICATION — **Briefly**

---

## App Name

**Briefly**

---

## Overview

Briefly is a productivity app for students and professionals who take messy or unclear notes and want them transformed into clean, understandable explanations. Users paste raw notes, generate a structured explanation in Markdown using AI, edit the result, and save it for future reference.

---

## Core Concept

Briefly turns unstructured notes into clear, editable Markdown explanations using AI, allowing users to understand, refine, and store their notes in a clean format.

This project is built as a **full app**, including UI, authentication, and database-backed persistence.

---

## Pages in the App

---

### 1. Home (`/`)

The entry point where users paste raw notes and generate an explained version.

**Sections:**

- App Header
- Raw Notes Input Area
- Generate Explanation Action
- Generation State / Empty State

---

### 2. Editor (`/editor/:id`)

The main workspace where the AI-generated explanation is viewed and edited.

**Sections:**

- Editor Header (title, save status)
- Markdown Editor
- Markdown Preview
- Action Bar (Save, Export)

---

### 3. Notes (`/notes`)

Displays all previously generated and saved notes for the signed-in user.

**Sections:**

- Notes Page Header
- Notes List
- Note Card Items
- Empty Notes State

---

### 4. Note Detail (`/notes/:id`)

Allows users to view and continue editing an existing note.

**Sections:**

- Note Metadata Header
- Markdown Editor
- Markdown Preview
- Action Bar

---

### 5. Auth (`/sign-in`, `/sign-up`)

Authentication pages handled via Clerk.

**Sections:**

- Clerk Auth UI

---

### 6. Settings (`/settings`)

Basic application preferences and app information.

**Sections:**

- Export Preferences (UI only)
- Theme Preview
- About Briefly

---

## UI Behavior (UI-Only Phase)

- Auth is fully functional
- Data is persisted per user
- AI generation is represented visually (mocked or placeholder responses initially)
- Navigation between pages works
- Buttons open dialogs and transition between views
- Editor updates visually as content is changed
- Save actions persist data to the database

---

## Component Structure Requirements

Each page must:

- Be broken into logical UI sections
- Extract each section into its own component
- Place components inside a:
    - `components/` folder within the page’s directory

### Example Structure

**Editor page components**

- `editor-header`
- `markdown-editor`
- `markdown-preview`
- `editor-action-bar`

Pages should only compose components — minimal JSX.

---

## Data Representation

The app stores and displays:

- User accounts (via Clerk)
- Notes
    - Raw input text
    - Generated Markdown explanation
    - Last updated timestamp
- Note metadata (title, creation date)

Data is stored per user and persisted via the database.

---

## Design Requirements

- Modern
- Sleek
- Professional
- Compact
- Mobile-first
- Beautiful
- Unique UI specific to this app
- Linear-inspired hierarchy (but not copied)
- Subtle animations and micro-interactions
- Clear spacing and typography
- Somewhat flat UI (no heavy borders or shadows)

The app should feel like:

> “A calm, intelligent workspace for understanding your notes.”
> 

---

## Non-Goals (Explicitly Excluded)

- No real-time collaboration
- No sharing between users
- No version history
- No notifications
- No advanced AI tuning UI
- No analytics dashboards

---

## Definition of Done

- Authentication works correctly
- Users can create, edit, and save notes
- Notes persist across sessions
- Markdown editor and preview function correctly
- Navigation between pages works
- UI is responsive and polished
- App feels complete and usable end-to-end

---