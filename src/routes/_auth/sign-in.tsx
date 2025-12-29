import { createFileRoute, Link } from '@tanstack/react-router'
import { GoogleSignInButton } from './-components/google-sign-in-button'

export const Route = createFileRoute('/_auth/sign-in')({
  component: SignInPage,
})

function SignInPage() {
  return (
    <>
      {/* Sign In Card */}
      <div className="bg-card border border-border rounded-lg p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to continue to your notes
          </p>
        </div>

        {/* Google Sign In Button */}
        <GoogleSignInButton />

        {/* Terms */}
        <p className="text-xs text-center text-muted-foreground">
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:text-foreground">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-foreground">
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Link to="/sign-up" className="text-primary hover:underline font-medium">
          Sign up
        </Link>
      </p>
    </>
  )
}