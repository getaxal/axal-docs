'use client'

import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaReddit, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { LuArrowUpRight, LuShare2 } from 'react-icons/lu'
import { SiSubstack } from 'react-icons/si'

import { Anchor } from '@/components/anchor'
import { Logo } from '@/components/navigation/logo'
import { Search } from '@/components/navigation/search'
import { SheetLeft } from '@/components/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SheetClose } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { Navigations, SocialLinks } from '@/settings/navigation'

const socialIcons = {
  github: FaGithub,
  x: FaXTwitter,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  reddit: FaReddit,
  youtube: FaYoutube,
  substack: SiSubstack,
}

export function Navbar() {
  return (
    <nav className="bg-opacity-5 sticky top-0 z-50 h-16 w-full border-b backdrop-blur-xl backdrop-filter">
      <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between p-1 px-2 sm:p-3 md:gap-2 md:px-4">
        <div className="flex items-center gap-5">
          <SheetLeft />
          <Logo />
          <div className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex">
            <NavMenu />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Search />
          <div className="flex gap-2 sm:ml-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Connect with Axal"
                  className={buttonVariants({ variant: 'outline', size: 'icon-lg' })}
                  title="Connect with Axal"
                  variant="outline"
                >
                  <LuShare2 className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {SocialLinks.map((social) => {
                  const Icon = socialIcons[social.icon]
                  return (
                    <DropdownMenuItem asChild key={social.href}>
                      <Link
                        href={social.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icon className="size-4" />
                        {social.label}
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            absolute
            activeClassName="font-bold text-primary"
            className="flex items-center gap-1 text-sm"
            href={item.href}
            key={item.title + item.href}
            rel={item.external ? 'noopener noreferrer' : undefined}
            target={item.external ? '_blank' : undefined}
          >
            {item.title}{' '}
            {item.external && <LuArrowUpRight className="h-3 w-3 align-super" strokeWidth={3} />}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose asChild key={item.title + item.href}>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
