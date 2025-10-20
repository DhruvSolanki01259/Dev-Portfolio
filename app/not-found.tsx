import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        {/* 404 Heading */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h2>
          <p className="text-muted-foreground text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline" className="w-full sm:w-auto bg-transparent">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-muted-foreground mt-8">
          If you think this is a mistake, feel free to{" "}
          <Link href="/#contact" className="text-primary hover:underline font-medium">
            contact me
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
