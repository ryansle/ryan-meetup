'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Photo } from '@/components/media/Photo';
import PageNotFound from '@/components/404';
import NextLink from 'next/link';

// Types
import { RyanPhoto } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchSingleMediaEvent } from '@/data/fetch';

type GalleryPageProps = {
  params: {
    slug: string;
  }
}

// TODO: look into ssr approaches for fetching this data
// TODO: 404 for junk slugs
const GalleryPage = ({ params }: GalleryPageProps) => {
  const { data, isLoading, isError } = useQuery('gallery', () => fetchSingleMediaEvent(params.slug));

  return (
    <Layout>
      {isError && (
        <PageNotFound>
          <Text className='text-center' size='lg'>
            Looks like there&apos;s no pictures to see here. Try heading <NextLink className='underline text-blue-500' href='/gallery'>back to the gallery page</NextLink> and choosing a different photo gallery.
          </Text>
        </PageNotFound>
      )}

      {/* TODO: loading header */}
      {!isLoading && (
        <Heading className='mb-4'>
          {/* @ts-ignore */}
          {data?.title}
        </Heading>
      )}

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        <>
          {isLoading && (
            Array(4).fill('').map((_, index) => (
              <div
                key={index}
                className='animate-pulse bg-gray-700 rounded-3xl w-full h-full max-h-[450px] aspect-w-2 aspect-h-1'
              />
            ))
          )}

          {/* TODO: remove extra fragments and containers on all pages */}
          {!isLoading && data && (
            <>
              {/* @ts-ignore */}
              {data.photos.map((content: RyanPhoto, index: number) => (
                <div key={index}>
                  <Photo image={content as RyanPhoto} />
                </div>
              ))}
            </>
          )}
        </>
      </div>
    </Layout>
  );
};

export default GalleryPage;