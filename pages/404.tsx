// Components
import { Layout } from '@/components/navigation';
import PageNotFound from '@/components/404';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>404: Ryan Not Found</title>
        <meta
          name='description'
          content='Sorry, Ryan, but this page does not exist'
        />
      </Head>

      <PageNotFound />
    </Layout>
  );
};

export default NotFoundPage;
