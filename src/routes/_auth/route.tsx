import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { BookOpen } from 'lucide-react'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Brand */}
        <div className="text-center space-y-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">Briefly</span>
          </Link>
          <p className="text-muted-foreground">
            Transform messy notes into clarity
          </p>
        </div>

        {/* Auth Content */}
        <Outlet />
      </div>
    </div>
  )
}
