import { Button } from '@/components/ui/button'
import { useUserStoreActions } from '@/stores/user-store'
import { api } from '@convex/_generated/api'
import { Navigate } from '@tanstack/react-router'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useConvex, useConvexAuth } from 'convex/react'
import { BookOpen, Loader2, Settings } from 'lucide-react'
import { useEffect } from 'react'

export const Route = createFileRoute('/_app')({
  component: AppLayout,
})

function AppLayout() {
  const { isLoading, isAuthenticated } = useConvexAuth()
  const convex = useConvex()
  const { setUser } = useUserStoreActions()

  useEffect(() => {
    const init = async () => {
      if (!isLoading && isAuthenticated) {
        const user = await convex.query(api.users.current)
        setUser(user)
      }
    }
    init()
  }, [isLoading, isAuthenticated])

  if (isLoading) {
    return (
      <div className="w-screen h-dvh grid place-content-center">
        <Loader2 className="text-primary animate-spin size-11" />
      </div>
    )
  }

  if (!isLoading && !isAuthenticated) return <Navigate to="/sign-in" />

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
                <Link to="/notes">Notes</Link>
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
