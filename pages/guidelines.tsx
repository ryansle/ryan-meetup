// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const GuidelinesPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Guidelines</title>
        <meta
          name='description'
          content='Hosting Ryan Meetups 101'
        />
        <meta
          name='keywords'
          content='how to host a ryan meetup, guidelines for hosting ryan meetup, can I host my own ryan meetup'
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
      destination: 'https://docs.google.com/document/d/1xo3LgF4k5RQSkcdgc95-bah1zT9pPI8rr0Tx6zLoaYE/edit?usp=sharing',
      permanent: true,
    }
  };
}

export default GuidelinesPage;
