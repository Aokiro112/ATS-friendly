'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-brand-text">
          ResumeFlow
        </Link>

        <Button render={<Link href="/builder" />} size="sm">
          Create Resume
        </Button>
      </nav>
    </header>
  )
}
