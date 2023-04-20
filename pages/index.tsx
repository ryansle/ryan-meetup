// Components
import { Layout } from '@/components/navigation';
import { RyanPoster, FAQ } from '@/components/home';
import { Button } from '@/components/global';
import { FaMeetup as Meetup } from 'react-icons/fa';

// Types
import type { NextPage } from 'next';
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchFAQs } from '@/data/fetch';
import { useRouter } from 'next/navigation';

type HomePageProps = {
  faqs: FrequentlyAskedQuestion[];
};

const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { data: faqs, isLoading } = useQuery('faqs', fetchFAQs, { initialData: props.faqs });

  const router = useRouter();

  return (
    <Layout>
      <RyanPoster />
      <Button
        className='mt-4'
        onClick={() => router.push('https://www.meetup.com/ryanmeetup/')}
        leftIcon={<Meetup />}
      >
        Join us on Meetup
      </Button>
      <hr className='my-16' />
      <FAQ
        data={faqs as FrequentlyAskedQuestion[]}
        isLoading={isLoading}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
  const faqs = await fetchFAQs();

  return {
    props: {
      faqs,
    }
  };
}

export default HomePage;