// Components
import { Layout } from '@/components/navigation';
import PageNotFound from '@/components/404';

// Types
import type { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  );
};

export default NotFoundPage;
