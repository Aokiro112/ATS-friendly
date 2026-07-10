import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-4 py-20 text-center md:py-32">
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-brand-text md:text-5xl lg:text-6xl">
        Build Your ATS-Friendly Resume in Minutes
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-secondary">
        Create a professional resume that passes Applicant Tracking Systems. No
        account needed. Free forever.
      </p>

      <Button
        render={<Link href="/builder" />}
        size="lg"
        className="mt-10 h-12 px-8 text-base font-semibold"
      >
        Create Your Resume →
      </Button>

      <p className="mt-4 text-sm text-brand-secondary">
        No signup required · Free · Takes 5 minutes
      </p>
    </section>
  )
}
