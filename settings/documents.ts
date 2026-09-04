import {
  LuLifeBuoy,
  LuRocket,
  LuScale,
  LuSettings2,
  LuShieldCheck,
  LuTrendingUp,
} from 'react-icons/lu'

import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    title: 'Start',
    href: '',
    icon: LuRocket,
    noLink: true,
    items: [
      { title: 'What is Axal?', href: '/getting-started/what-is-axal' },
      { title: 'Quick Start', href: '/getting-started/quick-start' },
      {
        title: 'How to Add Money',
        href: '',
        noLink: true,
        items: [
          { title: 'Bank or Card', href: '/getting-started/depositing-with-card-bank' },
          { title: 'From Another App', href: '/getting-started/depositing-from-app' },
          { title: 'Crypto', href: '/getting-started/depositing-crypto' },
        ],
      },
      { title: 'How to Withdraw', href: '/withdrawing/withdrawal' },
    ],
  },
  { spacer: true },
  {
    title: 'How Axal Works',
    href: '',
    icon: LuTrendingUp,
    noLink: true,
    items: [
      { title: "Where Yield Comes From", href: '/how-it-works/where-yield-comes-from' },
      { title: 'Axal vs Savings Accounts', href: '/how-it-works/axal-vs-savings' },
      { title: 'USD', href: '/how-it-works/usd' },
      { title: 'Bitcoin', href: '/how-it-works/bitcoin' },
      { title: 'Gold', href: '/how-it-works/gold' },
      { title: 'Tokenized US Stocks', href: '/how-it-works/tokenized-stocks' },
      { title: 'Fees', href: '/how-it-works/fee-structure' },
      { title: 'Strategy Stack', href: '/how-it-works/strategy-stack' },
      { title: 'Tracking Your Portfolio', href: '/how-it-works/tracking-your-portfolio' },
    ],
  },
  { spacer: true },
  {
    title: 'Trust & Safety',
    href: '',
    icon: LuShieldCheck,
    noLink: true,
    items: [
      { title: 'Is My Money Safe?', href: '/trust-safety/is-my-money-safe' },
      { title: 'How Your Wallet Works', href: '/trust-safety/how-your-wallet-works' },
      { title: 'Face ID, Passkeys & 2FA', href: '/trust-safety/authenticator' },
      { title: 'Export Your Wallet', href: '/trust-safety/export-your-wallet' },
      { title: 'Audits & Bug Bounty', href: '/trust-safety/audits' },
      { title: 'Risks', href: '/trust-safety/risks' },
      { title: 'Partners', href: '/trust-safety/partners' },
    ],
  },
  { spacer: true },
  {
    title: 'Help',
    href: '',
    icon: LuLifeBuoy,
    noLink: true,
    items: [
      { title: 'FAQ', href: '/help/faq' },
      { title: 'Troubleshooting', href: '/help/troubleshooting' },
      { title: 'Referrals', href: '/help/referrals' },
      { title: 'Contact & Support', href: '/help/contact' },
    ],
  },
  { spacer: true },
  {
    title: 'Legal',
    href: '/legal',
    icon: LuScale,
    noLink: true,
    items: [
      { title: 'Terms of Service', href: '/terms-of-service' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
      { title: 'Risk Disclosures', href: '/risk-disclosures' },
    ],
  },
  { spacer: true },
  {
    title: 'Advanced',
    href: '/advanced',
    icon: LuSettings2,
    noLink: true,
    items: [
      { title: 'Methodology', href: '/methodology' },
      { title: 'Contracts & Addresses', href: '/contracts' },
      { title: 'Supported Chains', href: '/supported-chains' },
    ],
  },
]
