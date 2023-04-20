// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const MerchPage: NextPage = () => {
  return (
    <Layout>
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
