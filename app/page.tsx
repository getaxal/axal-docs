import { Hero } from '@/components/home/hero'
import { StartHere } from '@/components/home/start-here'
import { SupportSection } from '@/components/home/support-section'
import { Sidebar } from '@/components/sidebar'

export default function Home() {
  return (
    <div className="flex items-start gap-10 pt-10">
      <Sidebar />
      <div className="min-w-0 flex-1 md:flex-6">
        <div className="flex items-start gap-10">
          <div className="min-w-0 flex-1">
            <Hero />
            <StartHere />
            <SupportSection />
          </div>
          {/* Reserves the same width as the docs pages' "On this page" TOC aside,
              so the content column doesn't shift width when navigating to/from docs. */}
          <aside aria-hidden className="hidden h-screen min-w-57.5 xl:block" />
        </div>
      </div>
    </div>
  )
}
