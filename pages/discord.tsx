// Components
import Head from 'next/head';

// Types
import { Layout } from '@/components/navigation';
import type { NextPage } from 'next';

const DiscordPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Discord</title>
        <meta
          name='description'
          content='Join the Ryan Meetup Discord!'
        />
        <meta
          name='keywords'
          content='ryan meetup discord'
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
      destination: 'https://discord.gg/HDugzYSHKC',
      permanent: true,
    }
  };
}

export default DiscordPage;