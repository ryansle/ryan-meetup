// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const MerchPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Merchandise</title>
        <meta
          name='description'
          content='Buy official Ryan Meetup merchandise!'
        />
        <meta
          name='keywords'
          content='ryan merch, ryan shirts, ryan t-shirts, ryan long sleeve shirts, ryan clothing, ryan clothes, ryan merchandise, ryan meetup merch'
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
      destination: 'https://www.etsy.com/shop/RyanMeetup',
      permanent: true,
    }
  };
}

export default MerchPage;
