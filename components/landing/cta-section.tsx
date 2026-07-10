import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="bg-accent px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-brand-text">
          Ready to Build Your Resume?
        </h2>

        <p className="mt-4 text-brand-secondary">
          Join thousands of professionals who landed their dream jobs.
        </p>

        <Button
          render={<Link href="/builder" />}
          size="lg"
          className="mt-8 h-12 px-8 text-base font-semibold"
        >
          Get Started — It&apos;s Free
        </Button>
      </div>
    </section>
  )
}
