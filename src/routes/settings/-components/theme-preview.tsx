import { useState } from 'react'
import { Palette, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ThemePreview() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    // In a real app, this would update the document class
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Appearance</h2>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Choose how Briefly looks on your device.
      </p>

      <div className="pt-2">
        <Button
          variant="outline"
          onClick={toggleTheme}
          className="w-full sm:w-auto gap-2"
        >
          {theme === 'light' ? (
            <>
              <Moon className="h-4 w-4" />
              Switch to Dark Mode
            </>
          ) : (
            <>
              <Sun className="h-4 w-4" />
              Switch to Light Mode
            </>
          )}
        </Button>
      </div>

      {/* Color Preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
        <div className="space-y-2">
          <div className="h-12 rounded-md bg-primary" />
          <p className="text-xs text-center text-muted-foreground">Primary</p>
        </div>
        <div className="space-y-2">
          <div className="h-12 rounded-md bg-secondary" />
          <p className="text-xs text-center text-muted-foreground">Secondary</p>
        </div>
        <div className="space-y-2">
          <div className="h-12 rounded-md bg-accent" />
          <p className="text-xs text-center text-muted-foreground">Accent</p>
        </div>
        <div className="space-y-2">
          <div className="h-12 rounded-md bg-muted" />
          <p className="text-xs text-center text-muted-foreground">Muted</p>
        </div>
      </div>
    </div>
  )
}