import { User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface AccountSectionProps {
  user: {
    name: string
    email: string
    imageUrl?: string
  }
  onLogout: () => void
}

export function AccountSection({ user, onLogout }: AccountSectionProps) {
  // Get initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <User className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">Account</h2>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Manage your account settings and sign out.
      </p>

      {/* User Info Card */}
      <div className="flex items-center gap-4 py-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback className="text-lg">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-1">
          <p className="text-base font-semibold">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-2">
        <Button 
          variant="outline" 
          onClick={onLogout}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}