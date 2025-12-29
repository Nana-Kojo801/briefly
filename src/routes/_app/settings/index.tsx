import { createFileRoute } from '@tanstack/react-router'
import { SettingsHeader } from './-components/settings-header'
import { AccountSection } from './-components/account-section'
import { ExportPreferences } from './-components/export-preferences'
import { ThemePreview } from './-components/theme-preview'
import { AboutBriefly } from './-components/about-briefly'
import { exportFormats, appInfo, mockUser } from './-mock-data'

export const Route = createFileRoute('/_app/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const handleLogout = () => {
    console.log('Logging out...')
    // In real app: call Clerk's signOut()
    alert('Logout functionality will be connected to Clerk authentication')
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <SettingsHeader />

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <AccountSection 
              user={mockUser}
              onLogout={handleLogout}
            />
          </div>

          {/* Export Preferences */}
          <div className="bg-card border border-border rounded-lg p-6">
            <ExportPreferences formats={exportFormats} />
          </div>

          {/* Theme Preview */}
          <div className="bg-card border border-border rounded-lg p-6">
            <ThemePreview />
          </div>

          {/* About */}
          <div className="bg-card border border-border rounded-lg p-6">
            <AboutBriefly 
              version={appInfo.version}
              description={appInfo.description}
              features={appInfo.features}
            />
          </div>
        </div>
      </div>
    </main>
  )
}