import { type Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    title: 'Getting Started',
    href: '/getting-started',
    noLink: true,
    items: [
      { title: 'Quick Start', href: '/quick-start' },
      { title: 'Depositing Crypto', href: '/depositing-crypto' },
      { title: 'Depositing with Card or Bank', href: '/depositing-with-card-bank' },
      { title: 'Depositing from the App', href: '/depositing-from-app' },
    ],
  },
  { spacer: true },
  {
    title: 'Earning',
    href: '/earning',
    noLink: true,
    items: [
      { title: 'USD', href: '/usd' },
      { title: 'Bitcoin', href: '/bitcoin' },
      { title: 'Gold', href: '/gold' },
      { title: 'Tracking Your Portfolio', href: '/tracking-your-portfolio' },
      { title: 'Methodology', href: '/methodology' },
      { title: 'Strategy Stack', href: '/strategy-stack' },
      { title: 'Fee Structure', href: '/fee-structure' },
      { title: 'Risks', href: '/risks' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Glossary', href: '/glossary' },
    ],
  },
  { spacer: true },
  {
    title: 'Withdrawing',
    href: '/withdrawing',
    noLink: true,
    items: [
      { title: 'Withdrawal', href: '/withdrawal' },
      { title: 'Export Your Wallet', href: '/export-your-wallet' },
    ],
  },
  { spacer: true },
  {
    title: 'Rewards & Referrals',
    href: '/referrals',
    noLink: true,
    items: [{ title: 'Referrals Overview', href: '/overview' }],
  },
  { spacer: true },
  {
    title: 'Security',
    href: '/security',
    noLink: true,
    items: [
      { title: 'Audits', href: '/audits' },
      { title: 'Partners', href: '/partners' },
      { title: 'Authenticator', href: '/authenticator' },
    ],
  },
  { spacer: true },
  {
    title: 'Legal',
    href: '/legal',
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
    noLink: true,
    items: [
      { title: 'How Your Wallet & Security Work', href: '/wallet-and-security' },
      { title: 'Contracts', href: '/contracts' },
      { title: 'Supported Chains', href: '/supported-chains' },
    ],
  },
]
