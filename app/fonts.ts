import localFont from 'next/font/local'

export const seasonSans = localFont({
  src: [
    { path: '../public/SeasonSans-Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/SeasonSans-Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/SeasonSans-SemiBold.otf', weight: '600', style: 'normal' },
  ],
  variable: '--font-season-sans',
  display: 'swap',
})
