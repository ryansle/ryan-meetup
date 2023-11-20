import { useState } from 'react';

// Components
import { Layout } from '@/components/navigation';
import { FAQ, Landing } from '@/components/home';
import { Modal } from '@/components/global';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';
import type { FrequentlyAskedQuestion } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchFAQs } from '@/data/fetch';
import { useRouter } from 'next/router';

type HomePageProps = {
  faqs: FrequentlyAskedQuestion[];
};

const HomePage: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { data: faqs, isLoading } = useQuery('faqs', fetchFAQs, { initialData: props.faqs });

  const [showModal, setShowModal] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const router = useRouter();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

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
      <div className='my-16 border border-gray-700' />
      <FAQ
        data={faqs as FrequentlyAskedQuestion[]}
        isLoading={isLoading}
      />

      <Modal
        open={showModal}
        setIsOpen={setShowModal}
        title='Welcome to the Ryan Meetup.'
        closable={false}
        cancelButtonText='Leave'
        continueButtonText='Continue'
        isContinueDisabled={!isChecked}
        cancelAction={() => router.push('/goodbye')}
        continueAction={() => setShowModal(false)}
      >
        <div className='flex items-center' onClick={handleChange}>
          <input
            className='w-4 h-4 text-blue-600 rounded focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
            type='checkbox'
            checked={isChecked}
            onChange={handleChange}
          />
          <label className='font-medium ml-4'>
            I certify my name is not Bryan or Brian.
          </label>
        </div>
      </Modal>
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