// Components
import { Heading } from '@/components/global';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const GoodbyePage: NextPage = () => {
  return (
    <div className='text-center flex flex-col justify-center items-center h-screen space-y-8'>
      <Head>
        <title>No Bryans Allowed at the Ryan Meetup</title>
        <meta
          name='description'
          content='Get outta here, Bryan. No Bryans allowed at the Ryan Meetup.'
        />
      </Head>

      <div className='block md:hidden'>
        <Heading size='xl'>
          Goodbye, Bryan.
        </Heading>
      </div>
      <div className='hidden md:block'>
        <Heading size='3xl'>
          Goodbye, Bryan.
        </Heading>
      </div>
    </div>
  );
};

export default GoodbyePage;
