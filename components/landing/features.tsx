const features = [
  {
    emoji: '📄',
    title: 'ATS Optimized',
    description:
      'Single-column layouts with clean formatting that every ATS can parse perfectly.',
  },
  {
    emoji: '⚡',
    title: 'Live Preview',
    description:
      'See your resume update in real-time as you type. What you see is what you get.',
  },
  {
    emoji: '💰',
    title: 'Free Forever',
    description:
      'No hidden fees, no watermarks, no account required. Just build and download.',
  },
]

export default function Features() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-text">
          Why ResumeFlow?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border p-6"
            >
              <span className="text-3xl" role="img" aria-label={feature.title}>
                {feature.emoji}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-brand-text">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
