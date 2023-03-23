import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Ryan Meetup',
  description: 'A monthly meetup for people named Ryan',
  themeColor: 'black',
  openGraph: {
    title: 'Ryan Meetup',
    description: 'A monthly meetup for people named Ryan',
    url: 'https://ryanmeetup.com',
    siteName: 'Ryan Meetup',
    images: [
      {
        url: '/ryan.jpeg',
        width: 1024,
        height: 576,
        alt: 'Ryan',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  manifest: '/site.manifest',
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Meetup',
    description: 'A monthly meetup for people named Ryan',
    images: ['https://ryanmeetup.com/ryan.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>

    </Head>
      <body>{children}</body>
    </html>
  )
}
