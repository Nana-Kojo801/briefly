// Mock data for settings page

export interface ExportFormat {
  id: string
  name: string
  description: string
  enabled: boolean
}

export const exportFormats: ExportFormat[] = [
  {
    id: 'markdown',
    name: 'Markdown',
    description: 'Export as .md file',
    enabled: true
  },
  {
    id: 'pdf',
    name: 'PDF',
    description: 'Export as PDF document',
    enabled: false
  },
  {
    id: 'html',
    name: 'HTML',
    description: 'Export as HTML file',
    enabled: false
  }
]

export const appInfo = {
  version: '1.0.0',
  description: 'Transform messy notes into clear, structured explanations.',
  features: [
    'AI-powered note transformation',
    'Markdown editing and preview',
    'Persistent note storage',
    'Export to multiple formats'
  ]
}

// Mock user data
export const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
}