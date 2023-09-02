// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const TravelPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Travel</title>
        <meta
          name='description'
          content='Where did you travel from, Ryan?'
        />
        <meta
          name='keywords'
          content='ryan meetup, the ryan that traveled the farthest to attend the ryan meetup award, ryan meetup award, ryan award, trophy, ryan trophy, ryan meetup trophy'
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
      destination: 'https://forms.gle/tHvNkrTJZcS8x48d6',
      permanent: true,
    }
  };
}

export default TravelPage;
