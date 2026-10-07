'use client'

import { useEffect, useRef } from 'react'

interface AutoplayVideoProps {
  src: string
  className?: string
}

export function AutoplayVideo({
  src,
  className = 'my-4 w-full rounded-[12px]',
}: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Autoplay can still be blocked by the browser; controls remain available.
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    // muted is required for reliable autoplay; users can unmute via controls
    <video
      ref={ref}
      className={className}
      controls
      muted
      playsInline
      preload="metadata"
      src={src}
    />
  )
}
