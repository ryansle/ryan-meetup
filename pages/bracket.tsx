// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const BracketPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - March Madness</title>
        <meta
          name='description'
          content='Ryan Meetup March Madness'
        />
        <meta
          name='keywords'
          content='ryan meetup, ryan, march madness, ryan meetup march madness'
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
      destination: 'https://fantasy.espn.com/games/tournament-challenge-bracket-2024/group?id=9466da63-5891-4b6c-97f2-d76e1901094f&joinKey=10c7ccc7-a4f0-3ff0-bc91-5c485565b9da&joining=true',
      permanent: true,
    }
  };
}

export default BracketPage;
