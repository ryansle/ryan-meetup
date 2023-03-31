'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';

// Types
import type { NextPage } from 'next';

// Utilities
import { useQuery } from 'react-query';
import { fetchMedia } from '@/data/fetch';

const GalleryPage: NextPage = () => {
  const { data: media, isLoading } = useQuery('photos', fetchMedia);

  console.log(media);

  return (
    <Layout>
      <Heading>Ryan Media</Heading>
    </Layout>
  );
};

export default GalleryPage;
