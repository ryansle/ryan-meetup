'use client';

// Components
import { Layout } from '@/components/navigation';

// Utilities
import { useQuery } from 'react-query';
import { fetchSingleMediaEvent } from '@/data/fetch';

type GalleryPageProps = {
  params: {
    slug: string;
  }
}

// TODO: look into ssr approaches for fetching this data
const GalleryPage = ({ params }: GalleryPageProps) => {
  const { data, isLoading } = useQuery('gallery', () => fetchSingleMediaEvent(params.slug));

  return (
    <Layout>
      test
    </Layout>
  );
};

export default GalleryPage;