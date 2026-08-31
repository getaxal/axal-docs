import Image from 'next/image'
import Link from 'next/link'

const PHONE_TEL = 'tel:+17819719463'
const PHONE_WHATSAPP = 'https://wa.me/17819719463'

const items = [
  {
    icon: '/home-icons/chat-with-us.svg',
    title: 'Chat with us',
    subtitle: 'Message us on WhatsApp',
    href: PHONE_WHATSAPP,
    external: true,
  },
  {
    icon: '/home-icons/call-us.svg',
    title: 'Call us at',
    subtitle: '(781) 971-9463 · Mon–Fri, 9 AM–6:30 PM ET',
    href: PHONE_TEL,
    external: false,
  },
]

export function SupportSection() {
  return (
    <section className="mx-auto w-full max-w-6xl py-8">
      <h2 className="mb-6 text-base font-semibold text-ink">Support</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            className="flex items-center gap-4 rounded-[12px] bg-ink/[0.04] px-5 py-4 transition-transform hover:-translate-y-0.5"
            href={item.href}
            key={item.href}
            rel={item.external ? 'noopener noreferrer' : undefined}
            target={item.external ? '_blank' : undefined}
          >
            <Image alt="" className="size-11 shrink-0" height={44} src={item.icon} width={44} />
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
