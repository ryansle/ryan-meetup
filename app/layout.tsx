// Components
import { Header, Footer } from '@/components/navigation';
import ReactQueryWrapper from './ReactQueryWrapper';

// Utilities
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

// Types
import type { ReactNode } from 'react';

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
        url: '/ryanroundup.png',
        width: 3284,
        height: 2189,
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
    icon: 'https://www.ryanmeetup.com/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Meetup',
    description: 'A monthly meetup for people named Ryan',
    images: ['https://ryanmeetup.com/ryan.jpeg'],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <html lang='en'>
      <body className='h-full'>
        <ReactQueryWrapper>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;