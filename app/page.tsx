// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';
import NextImage from 'next/image';

// Utilities
import { Inter } from 'next/font/google';

// Types
import type { NextPage } from 'next';

// TODO: inter
const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPage = () => {
  const underlineStyle = 'underline underline-offset-4 decoration-blue-500';

  return (
    <Layout className='items-center justify-center'>
      {/* TODO: image fade up */}
      <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1 mb-6'>
        <NextImage
          className='rounded-3xl'
          src='/ryanroundup.png'
          fill={true}
          alt='Ryan Meetup Founders'
        />
      </div>

      <div className='mb-4'>
        {/* regular size header */}
        <div className='hidden sm:block'>
          <Heading size='2xl'>
            Is your name <span className={underlineStyle}>Ryan</span>?
          </Heading>
        </div>

        {/* mobile header */}
        <div className='sm:hidden'>
          <Heading size='xl'>
            Is your name <span className={`${underlineStyle} text-8xl`}>Ryan</span>
            <span className='text-8xl'>?</span>
          </Heading>
        </div>
      </div>

      <Heading className='mb-10' size='md'>
        Wanna meet other <span className={underlineStyle}>Ryans</span>?
      </Heading>

      <Heading size='lg'>Join our Ryan Meetups</Heading>
    </Layout>
  );
};

export default HomePage;