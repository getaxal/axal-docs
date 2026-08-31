import Link from 'next/link'

export function HomeFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-8 text-sm text-stone sm:px-8">
      <p>&copy; {new Date().getFullYear()} Axal.</p>
      <div className="flex items-center gap-6">
        <Link className="transition-colors hover:text-ink" href="/docs/legal/terms-of-service">
          Terms
        </Link>
        <Link className="transition-colors hover:text-ink" href="/docs/legal/privacy-policy">
          Privacy
        </Link>
        <Link className="transition-colors hover:text-ink" href="mailto:hello@getaxal.com">
          hello@getaxal.com
        </Link>
      </div>
    </footer>
  )
}
