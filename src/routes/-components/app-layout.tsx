import { Link, Outlet } from '@tanstack/react-router'
import { BookOpen, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      {/* App Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span className="text-lg font-semibold">Briefly</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/notes">
                  Notes
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/settings">
                  <Settings className="h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <Outlet />
    </div>
  )
}