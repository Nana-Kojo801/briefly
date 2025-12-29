import { createFileRoute, Link } from '@tanstack/react-router'
import { GoogleSignInButton } from './-components/google-sign-in-button'

export const Route = createFileRoute('/_auth/sign-up')({
  component: SignUpPage,
})

function SignUpPage() {
  return (
    <>
      {/* Sign Up Card */}
      <div className="bg-card border border-border rounded-lg p-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Get started with Briefly in seconds
          </p>
        </div>

        {/* Google Sign In Button */}
        <GoogleSignInButton isSignUp />

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

      {/* Sign In Link */}
      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/sign-in" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </p>
    </>
  )
}