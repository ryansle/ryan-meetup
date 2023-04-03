'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';
import { Photo } from '@/components/media/Photo';

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
  const { data, isLoading } = useQuery('gallery', () => fetchSingleMediaEvent(params.slug));

  return (
    <Layout>
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