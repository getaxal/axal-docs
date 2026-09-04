import Link from 'next/link'

import { IconBadge } from '@/components/home/icon-badge'

interface StartHereItem {
  icon: string
  question: string
  answer: string
  href: string
}

const items: StartHereItem[] = [
  {
    icon: '/home-icons/start-earning.svg',
    question: 'How do I start earning?',
    answer: 'Set up your account and make your first deposit.',
    href: '/docs/getting-started/quick-start',
  },
  {
    icon: '/home-icons/how-it-works.svg',
    question: 'Where does my yield come from?',
    answer: 'See exactly how your balance earns, in plain terms.',
    href: '/docs/how-it-works/where-yield-comes-from',
  },
  {
    icon: '/home-icons/safe.svg',
    question: 'Is my money safe?',
    answer: "Self-custodial, audited, and honest about what's not insured.",
    href: '/docs/trust-safety/is-my-money-safe',
  },
  {
    icon: '/home-icons/start-earning.svg',
    question: 'How do I add money?',
    answer: 'Bank, card, or an app you already use.',
    href: '/docs/getting-started/depositing-with-card-bank',
  },
  {
    icon: '/home-icons/money-out.svg',
    question: 'How do I get my money out?',
    answer: 'Withdraw to your bank or an external wallet any time.',
    href: '/docs/withdrawing/withdrawal',
  },
  {
    icon: '/home-icons/fees.svg',
    question: 'Are there fees?',
    answer: 'A simple 15% fee on yield earned — nothing else.',
    href: '/docs/how-it-works/fee-structure',
  },
]

export function StartHere() {
  return (
    <section className="mx-auto w-full max-w-6xl py-8">
      <h2 className="mb-6 text-2xl font-semibold text-ink">Start here</h2>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            className="flex items-center gap-4 rounded-[12px] bg-ink/[0.04] px-5 py-4 transition-transform hover:-translate-y-0.5"
            href={item.href}
            key={item.href}
          >
            <IconBadge icon={item.icon} />
            <span className="flex flex-col gap-0.5">
              <span className="text-[18px] font-medium text-ink">{item.question}</span>
              <span className="text-sm text-ink/60">{item.answer}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
