// Components
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

// Types
import type { AppProps } from 'next/app';

// Utilities
import '@/styles/globals.css';
import seo from '@/seo.config';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Ryan Meetup</title>
        <meta
          name='description'
          content='Wanna meet other Ryans? Join the Ryan Meetup!'
        />
        <meta property='og:image' content='/ryanroundup.png' />
        <meta
          name='keywords'
          content='ryan, ryan meetup, meetup, ryan society, no bryans allowed, is your name ryan, join the ryan meetup, wanna meet other ryans, ryan meetup posters, first name must be ryan, ryanmeetup, ryan meet up'
        />
        <meta name='author' content='Ryan Meetup' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};
