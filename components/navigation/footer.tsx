'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { HomeFooter } from '@/components/home/home-footer'
import { Settings } from '@/types/settings'

export function Footer() {
  const pathname = usePathname()

  if (pathname === '/') {
    return <HomeFooter />
  }

  return (
    <footer className="h-16 w-full border-t text-sm text-foreground">
      <div className="mx-auto flex h-full w-full max-w-[1400px] flex-wrap items-center justify-center gap-4 px-2 py-3 sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
        <p className="items-center">
          &copy; 2024{' '}
          <Link
            aria-label={Settings.name}
            className="font-semibold"
            href={Settings.link}
            title={Settings.name}
          >
            {Settings.name}
          </Link>
          .
        </p>
        {Settings.branding !== false && (
          <div className="hidden items-center md:block">
            <Link
              aria-label="Rubix Studios"
              className="font-semibold"
              href="https://axal.com/"
              target="_blank"
              title="Rubix Studios"
            >
              <Image
                alt="Rubix Studios logo"
                aria-label="Rubix Studios logo"
                height={30}
                priority={false}
                src="/logo.svg"
                title="Rubix Studios logo"
                width={30}
              />
            </Link>
          </div>
        )}
      </div>
    </footer>
  )
}
