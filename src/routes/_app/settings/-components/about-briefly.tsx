import { Info, Check } from 'lucide-react'

interface AboutBrieflyProps {
  version: string
  description: string
  features: string[]
}

export function AboutBriefly({ version, description, features }: AboutBrieflyProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Info className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-lg font-semibold">About Briefly</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            {description}
          </p>
          <p className="text-xs text-muted-foreground">
            Version {version}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Features</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Built with care for students and professionals who want to understand their notes better.
          </p>
        </div>
      </div>
    </div>
  )
}