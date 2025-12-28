import { useState } from 'react'
import { Download } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { ExportFormat } from '../-mock-data'

interface ExportPreferencesProps {
  formats: ExportFormat[]
}

export function ExportPreferences({ formats: initialFormats }: ExportPreferencesProps) {
  const [formats, setFormats] = useState(initialFormats)

  const toggleFormat = (id: string) => {
    setFormats(prev => 
      prev.map(format => 
        format.id === id ? { ...format, enabled: !format.enabled } : format
      )
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Download className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Export Preferences</h2>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Choose which formats are available when exporting your notes.
      </p>

      <div className="space-y-4 pt-2">
        {formats.map((format) => (
          <div 
            key={format.id}
            className="flex items-center justify-between py-3 border-b border-border last:border-0"
          >
            <div className="space-y-0.5">
              <Label htmlFor={format.id} className="text-sm font-medium cursor-pointer">
                {format.name}
              </Label>
              <p className="text-xs text-muted-foreground">
                {format.description}
              </p>
            </div>
            <Switch
              id={format.id}
              checked={format.enabled}
              onCheckedChange={() => toggleFormat(format.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}