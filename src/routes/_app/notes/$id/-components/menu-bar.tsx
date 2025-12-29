import { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Code,
  Quote,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface MenuBarProps {
  editor: Editor
}

const ToolbarButton = ({
  onClick,
  children,
  disabled = false,
  tooltip,
}: {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  tooltip: string
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        disabled={disabled}
        className="h-8 w-8 p-0"
        type="button"
      >
        {children}
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>{tooltip}</p>
    </TooltipContent>
  </Tooltip>
)

// For formatting options with active states
const ToolbarToggle = ({
  onClick,
  isActive = false,
  children,
  disabled = false,
  tooltip,
}: {
  onClick: () => void
  isActive?: boolean
  children: React.ReactNode
  disabled?: boolean
  tooltip: string
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Toggle
        size="sm"
        pressed={isActive}
        onPressedChange={onClick}
        disabled={disabled}
        className="h-8 w-8 p-0"
        aria-label={tooltip}
      >
        {children}
      </Toggle>
    </TooltipTrigger>
    <TooltipContent>
      <p>{tooltip}</p>
    </TooltipContent>
  </Tooltip>
)

export function MenuBar({ editor }: MenuBarProps) {
  return (
    <TooltipProvider>
      <div className="border-b border-border bg-muted/30 p-2 flex items-center gap-1 flex-wrap">
        {/* Undo/Redo - No active state needed */}
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          tooltip="Undo"
        >
          <Undo className="h-4 w-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          tooltip="Redo"
        >
          <Redo className="h-4 w-4" />
        </ToolbarButton>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Headings - Active state needed */}
        <ToolbarToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive('heading', { level: 1 })}
          tooltip="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
          tooltip="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive('heading', { level: 3 })}
          tooltip="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </ToolbarToggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Text formatting - Active state needed */}
        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          tooltip="Bold"
        >
          <Bold className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          tooltip="Italic"
        >
          <Italic className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          tooltip="Inline code"
        >
          <Code className="h-4 w-4" />
        </ToolbarToggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Lists - Active state needed */}
        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          tooltip="Bullet list"
        >
          <List className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          tooltip="Numbered list"
        >
          <ListOrdered className="h-4 w-4" />
        </ToolbarToggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Blockquote - Active state needed */}
        <ToolbarToggle
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          tooltip="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </ToolbarToggle>

        <Separator orientation="vertical" className="h-6 mx-1" />

        {/* Text Alignment - Active state needed */}
        <ToolbarToggle
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          tooltip="Align left"
        >
          <AlignLeft className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          tooltip="Align center"
        >
          <AlignCenter className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          tooltip="Align right"
        >
          <AlignRight className="h-4 w-4" />
        </ToolbarToggle>

        <ToolbarToggle
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          isActive={editor.isActive({ textAlign: 'justify' })}
          tooltip="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </ToolbarToggle>
      </div>
    </TooltipProvider>
  )
}
