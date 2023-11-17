// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const TravelPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Register for the Rytoberfest Tournament</title>
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
      destination: 'https://forms.gle/iVTVjsixVo9ghrNm6',
      permanent: true,
    }
  };
}

export default TravelPage;