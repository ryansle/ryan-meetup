// Components
import { Layout } from '@/components/navigation';
import { RyanPoster } from '@/components/home';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout className='items-center justify-center'>
      <RyanPoster />
      <hr className='h-0.5 bg-neutral-100 border w-full' />
    </Layout>
  );
};

export default HomePage;