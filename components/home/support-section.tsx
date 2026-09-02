import Link from 'next/link'

import { IconBadge } from '@/components/home/icon-badge'

const PHONE_NUMBER = '+17819719463'
const PHONE_DISPLAY = '+1 (781) 971-9463'
const PHONE_WHATSAPP = `https://wa.me/${PHONE_NUMBER.replace('+', '')}`
const SUPPORT_EMAIL = 'support@axal.com'

const items = [
  {
    icon: '/home-icons/mail.svg',
    title: 'Email us',
    subtitle: SUPPORT_EMAIL,
    href: `mailto:${SUPPORT_EMAIL}`,
    external: false,
  },
  {
    icon: '/home-icons/phone.svg',
    title: 'Call or text us',
    subtitle: PHONE_DISPLAY,
    href: `tel:${PHONE_NUMBER}`,
    external: false,
  },
  {
    icon: '/home-icons/chat-with-us.svg',
    title: 'Reach us on WhatsApp',
    subtitle: 'Message or call anytime',
    href: PHONE_WHATSAPP,
    external: true,
  },
]

export function SupportSection() {
  return (
    <section className="mx-auto w-full max-w-6xl py-8">
      <h2 className="mb-6 text-base font-semibold text-ink">Support</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            className="flex items-center gap-4 rounded-[12px] bg-ink/[0.04] px-5 py-4 transition-transform hover:-translate-y-0.5"
            href={item.href}
            key={item.href}
            rel={item.external ? 'noopener noreferrer' : undefined}
            target={item.external ? '_blank' : undefined}
          >
            <IconBadge icon={item.icon} />
            <span className="flex flex-col gap-0.5">
              <span className="text-[18px] font-medium text-ink">{item.title}</span>
              <span className="text-sm text-ink/60">{item.subtitle}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
