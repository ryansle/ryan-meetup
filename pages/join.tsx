// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const JoinPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Join</title>
        <meta
          name='description'
          content='Join the Ryan Meetup!'
        />
        <meta
          name='keywords'
          content='ryan meetup, when is the next ryan meetup, ryan'
        />
      </Head>

      <div className='h-full flex items-center justify-center'>
        <p className='text-2xl font-bold'>
          Redirecting...
        </p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.meetup.com/ryanmeetup/',
      permanent: true,
    }
  };
}

export default JoinPage;
