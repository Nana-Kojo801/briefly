import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface RawNotesInputProps {
  value: string
  onChange: (value: string) => void
}

export function RawNotesInput({ value, onChange }: RawNotesInputProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor="raw-notes" className="text-sm font-medium">
        Paste your notes
      </Label>
      <Textarea
        id="raw-notes"
        placeholder="Paste your messy notes here... they can be unclear, incomplete, or just rough ideas."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[240px] resize-none font-mono text-sm"
      />
      <p className="text-xs text-muted-foreground">
        Briefly will transform your notes into a clear, structured explanation.
      </p>
    </div>
  )
}