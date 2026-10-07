import { type MetadataRoute } from 'next/types'

import { PageRoutes } from '@/lib/pageroutes'
import { Settings } from '@/types/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const home = { url: `${Settings.metadataBase}/` }
  const docs = PageRoutes.map((page) => ({
    // Docs pages are served under /docs (app/docs/[[...slug]]), so the sitemap must include it.
    url: `${Settings.metadataBase}/docs${page.href}`,
  }))
  return [home, ...docs]
}
