// Components
import { Layout } from '@/components/navigation';
import { FAQ, Landing } from '@/components/home';
import { Divider } from '@/components/global';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchFAQs } from '@/data/fetch';

type HomePageProps = {
  faqs: FrequentlyAskedQuestion[];
};

const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { data: faqs, isLoading } = useQuery('faqs', fetchFAQs, { initialData: props.faqs });

  return (
    <Layout homePage>
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
      <Landing />
      <Divider margins='xl' />
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