import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const templates = [
  {
    name: 'Classic',
    slug: 'classic',
    accent: false,
  },
  {
    name: 'Minimal',
    slug: 'minimal',
    accent: false,
  },
  {
    name: 'Modern',
    slug: 'modern',
    accent: true,
  },
]

/** Gray placeholder line used inside the mock resume previews. */
function Line({ className }: { className?: string }) {
  return (
    <div className={cn('h-2 rounded-full bg-gray-200', className)} />
  )
}

function ClassicPreview() {
  return (
    <div className="space-y-3 p-5">
      {/* Name */}
      <Line className="mx-auto h-3 w-32 bg-gray-300" />
      {/* Contact */}
      <Line className="mx-auto h-1.5 w-48 bg-gray-200" />
      {/* Divider */}
      <div className="border-t border-gray-300" />
      {/* Section heading */}
      <Line className="h-2 w-24 bg-gray-300" />
      <Line className="w-full" />
      <Line className="w-11/12" />
      <Line className="w-4/5" />
      {/* Divider */}
      <div className="border-t border-gray-300" />
      {/* Section heading */}
      <Line className="h-2 w-20 bg-gray-300" />
      <Line className="w-full" />
      <Line className="w-10/12" />
    </div>
  )
}

function MinimalPreview() {
  return (
    <div className="space-y-4 p-6">
      {/* Name */}
      <Line className="mx-auto h-3 w-28 bg-gray-200" />
      {/* Contact */}
      <Line className="mx-auto h-1.5 w-40 bg-gray-100" />
      {/* Spacer */}
      <div className="h-2" />
      {/* Section heading */}
      <Line className="h-1.5 w-20 bg-gray-200" />
      <Line className="h-1.5 w-full bg-gray-100" />
      <Line className="h-1.5 w-11/12 bg-gray-100" />
      {/* Spacer */}
      <div className="h-2" />
      {/* Section heading */}
      <Line className="h-1.5 w-16 bg-gray-200" />
      <Line className="h-1.5 w-full bg-gray-100" />
      <Line className="h-1.5 w-9/12 bg-gray-100" />
    </div>
  )
}

function ModernPreview() {
  return (
    <div className="flex">
      {/* Blue accent bar */}
      <div className="w-1 shrink-0 bg-brand-blue" />
      <div className="space-y-3 p-5">
        {/* Name */}
        <Line className="h-3 w-32 bg-brand-blue/30" />
        {/* Contact */}
        <Line className="h-1.5 w-48 bg-gray-200" />
        {/* Section heading in blue */}
        <Line className="mt-2 h-2 w-24 bg-brand-blue/40" />
        <Line className="w-full" />
        <Line className="w-11/12" />
        <Line className="w-4/5" />
        {/* Section heading in blue */}
        <Line className="mt-1 h-2 w-20 bg-brand-blue/40" />
        <Line className="w-full" />
        <Line className="w-10/12" />
      </div>
    </div>
  )
}

const previews: Record<string, React.FC> = {
  classic: ClassicPreview,
  minimal: MinimalPreview,
  modern: ModernPreview,
}

export default function TemplateCards() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-text">
          Choose Your Template
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {templates.map((template) => {
            const Preview = previews[template.slug]
            return (
              <div
                key={template.slug}
                className="group overflow-hidden rounded-xl border border-border transition-shadow hover:shadow-lg"
              >
                {/* Mock resume preview */}
                <div className="aspect-[210/297] bg-gray-50">
                  <Preview />
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between border-t border-border px-4 py-3">
                  <span className="font-semibold text-brand-text">
                    {template.name}
                  </span>
                  <Button
                    render={
                      <Link href={`/builder?template=${template.slug}`} />
                    }
                    variant="outline"
                    size="sm"
                  >
                    Use Template
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
