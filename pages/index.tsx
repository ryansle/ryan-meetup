// Components
import { Layout } from '@/components/navigation';
import { FAQ, Landing } from '@/components/home';

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
    <Layout homePage>
      <Landing />
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