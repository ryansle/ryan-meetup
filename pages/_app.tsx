// Components
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { BryanChecker } from '@/components/global';

// Types
import type { AppProps } from 'next/app';

// Utilities
import '@/styles/globals.css';
import seo from '@/seo.config';
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      {router.pathname !== '/goodbye' && <BryanChecker />}
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <Analytics />
    </QueryClientProvider>
  );
};
