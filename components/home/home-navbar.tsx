import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { title: 'Getting Started', href: '/docs/getting-started/quick-start' },
  { title: 'Earning', href: '/docs/earning/usd' },
  { title: 'Security', href: '/docs/security/audits' },
]

export function HomeNavbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-18 w-full items-center justify-between border-b border-border bg-bg/90 px-5 backdrop-blur-xl sm:px-8">
      <div className="flex items-center gap-4">
        <Link className="flex items-center gap-2" href="/">
          <Image alt="Axal" height={28} src="/icon.png" width={28} />
          <span className="text-lg font-semibold text-ink">Axal</span>
        </Link>
        <div className="h-6 w-px bg-border" />
        <span className="text-sm font-medium text-stone">Help Center</span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link
            className="text-sm font-medium text-ink transition-colors hover:text-accent"
            href={link.href}
            key={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <Link
        className={cn(buttonVariants({ size: 'default' }), 'bg-accent px-5 text-white hover:bg-accent/90')}
        href="mailto:hello@getaxal.com"
      >
        Contact us
      </Link>
    </nav>
  )
}
