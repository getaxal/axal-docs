import { readFileSync } from 'node:fs'
import path from 'node:path'

const cache = new Map<string, string>()

function readIconSvg(iconPath: string): string {
  if (!cache.has(iconPath)) {
    const filePath = path.join(process.cwd(), 'public', iconPath)
    const raw = readFileSync(filePath, 'utf-8')
    // These badges are loaded as external image files elsewhere, which can't see the
    // page's CSS variables. Inlining the markup lets the white base swap for our
    // --surface token so it responds to dark mode instead of staying a fixed white square.
    let svg = raw.replaceAll('fill="white"', 'fill="var(--surface)"')

    // The inner-shadow rim is now colored to match each icon, which reads a bit strong
    // in dark mode. Overlay a --surface-tinted rect (clipped to the same rounded shape,
    // opacity-0 by default) that only shows up under .dark, muting the rim a touch
    // without touching the filter math itself.
    const clipId = svg.match(/id="(clip\d[^"]*)"/)?.[1]
    if (clipId) {
      svg = svg.replace(
        '</svg>',
        `<rect width="44" height="44" rx="8.97959" fill="var(--surface)" clip-path="url(#${clipId})" class="icon-badge-dim" /></svg>`
      )
    }

    cache.set(iconPath, svg)
  }
  return cache.get(iconPath)!
}

interface IconBadgeProps {
  icon: string
  className?: string
}

export function IconBadge({ icon, className = 'size-11 shrink-0' }: IconBadgeProps) {
  const svg = readIconSvg(icon)
  // biome-ignore lint: trusted, build-time-only SVG markup from our own asset files
  return <span className={className} dangerouslySetInnerHTML={{ __html: svg }} />
}
