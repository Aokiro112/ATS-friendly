import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import Features from '@/components/landing/features'
import TemplateCards from '@/components/landing/template-cards'
import CTASection from '@/components/landing/cta-section'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <TemplateCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
