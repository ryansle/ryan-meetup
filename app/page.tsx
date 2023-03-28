'use client';

// Components
import { Layout } from '@/components/navigation';
import { RyanPoster, FAQ } from '@/components/home';

// Types
import type { NextPage } from 'next';
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchFAQs } from '@/data/fetch';

const HomePage: NextPage = () => {
  const { data: faqs, isLoading } = useQuery('faqs', fetchFAQs);

  return (
    <Layout>
      <RyanPoster />
      <hr className='h-0.5 bg-neutral-100 border w-full my-16' />
      <FAQ
        data={faqs as FrequentlyAskedQuestion[]}
        isLoading={isLoading}
      />
    </Layout>
  );
};

export default HomePage;