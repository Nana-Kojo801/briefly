import { Link } from '@tanstack/react-router'
import { FileQuestion, Home, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <FileQuestion className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-semibold">
            Page not found
          </h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="gap-2" onClick={() => window.history.back()}>
            <a>
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </a>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Quick links:
          </p>
          <div className="flex flex-wrap gap-2 justify-center text-sm">
            <Link to="/notes" className="text-primary hover:underline">
              Your Notes
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/settings" className="text-primary hover:underline">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}