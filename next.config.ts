import { type NextConfig } from 'next'

// Pages from the old Astro docs site that Google still has indexed, mapped to
// their current location under /docs.
const legacyRedirects: Record<string, string> = {
  '/api/coming-soon': '/',

  '/getting-started': '/docs/getting-started/quick-start',
  '/getting-started/introduction': '/docs/getting-started/quick-start',
  '/getting-started/quick-start': '/docs/getting-started/quick-start',
  '/getting-started/mobile': '/docs/getting-started/quick-start',
  '/getting-started/starting-to-earn': '/docs/getting-started/quick-start',
  '/getting-started/depositing-crypto': '/docs/getting-started/depositing-crypto',
  '/getting-started/depositing-from-app': '/docs/getting-started/depositing-from-app',
  '/getting-started/depositing-from-bank': '/docs/getting-started/depositing-with-card-bank',
  '/getting-started/depositing-with-card-bank': '/docs/getting-started/depositing-with-card-bank',
  '/getting-started/portfolio-performance': '/docs/earning/tracking-your-portfolio',
  '/getting-started/withdrawing-funds': '/docs/withdrawing/withdrawal',

  '/how-it-works': '/docs/earning/strategy-stack',
  '/how-it-works/strategies': '/docs/earning/strategy-stack',
  '/how-it-works/optimizing-portfolio': '/docs/earning/strategy-stack',
  '/how-it-works/gold': '/docs/earning/gold',
  '/how-it-works/tracking-your-portfolio': '/docs/earning/tracking-your-portfolio',
  '/how-it-works/on-ramping': '/docs/getting-started/depositing-with-card-bank',
  '/how-it-works/export-your-wallet': '/docs/withdrawing/export-your-wallet',
  '/how-it-works/withdraw': '/docs/withdrawing/withdrawal',
  '/how-it-works/withdrawal': '/docs/withdrawing/withdrawal',
  '/how-it-works/contracts': '/docs/advanced/contracts',
  '/how-it-works/supported-chains': '/docs/advanced/supported-chains',
  '/how-it-works/7702-transactions': '/docs/advanced/wallet-and-security',
  '/how-it-works/self-custodied-wallets': '/docs/advanced/wallet-and-security',
  '/how-it-works/verified-signing': '/docs/advanced/wallet-and-security',

  '/yield/getting-started': '/docs/getting-started/quick-start',
  '/yield/strategy-stack': '/docs/earning/strategy-stack',
  '/yield/detailed-strategies': '/docs/earning/strategy-stack',
  '/yield/methodology': '/docs/earning/methodology',
  '/yield/fee-structure': '/docs/earning/fee-structure',
  '/yield/risks': '/docs/earning/risks',
  '/yield/glossary': '/docs/earning/glossary',
  '/yield/faq': '/docs/earning/faq',

  '/rewards/overview': '/docs/rewards/overview',
  '/rewards/points': '/docs/rewards/points',
  '/rewards/cash-back': '/docs/rewards/cash-back',
  '/rewards/referrals': '/docs/referrals/overview',
  '/axal-points/overview': '/docs/rewards/overview',
  '/axal-points/points': '/docs/rewards/points',
  '/referrals': '/docs/referrals/overview',
  '/referrals/overview': '/docs/referrals/overview',

  '/security/audits': '/docs/security/audits',
  '/security/bug-bounties': '/docs/security/audits',
  '/security/authenticator': '/docs/security/authenticator',
  '/security/partners': '/docs/security/partners',
  '/security/smart-wallets': '/docs/advanced/wallet-and-security',
  '/security/wallet-authentication': '/docs/advanced/wallet-and-security',

  '/terms/terms': '/docs/legal/terms-of-service',
  '/terms/terms-of-service': '/docs/legal/terms-of-service',
  '/terms/privacy-policy': '/docs/legal/privacy-policy',
}

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    useTypeScriptCli: true,
  },
  async redirects() {
    return Object.entries(legacyRedirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
}

export default nextConfig
