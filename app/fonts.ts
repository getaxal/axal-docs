import localFont from 'next/font/local'

export const seasonSans = localFont({
  src: [
    { path: '../public/fonts/SeasonSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/SeasonSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/SeasonSans-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-season-sans',
  display: 'swap',
})
