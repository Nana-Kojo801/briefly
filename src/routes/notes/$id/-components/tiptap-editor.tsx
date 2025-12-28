import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Markdown } from '@tiptap/markdown'
import TextAlign from '@tiptap/extension-text-align'
import {
  TooltipProvider,
} from '@/components/ui/tooltip'
import { MenuBar } from './menu-bar'

interface TiptapEditorProps {
  initialContent: string
  onContentChange: (content: string) => void
}

export function TiptapEditor({
  initialContent,
  onContentChange,
}: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Markdown,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: initialContent,
    contentType: 'markdown',
    editable: true,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getMarkdown())
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[500px] px-6 py-4',
      },
    },
    immediatelyRender: false,
  })

  if (!editor) {
    return <div className="p-6">Loading editor...</div>
  }

  return (
    <TooltipProvider>
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        {/* Toolbar */}
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </TooltipProvider>
  )
}
