'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { MediaTile } from '@/components/media';

// Types
import type { NextPage } from 'next';
import type { MediaEvent } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchMedia } from '@/data/fetch';

const GalleryPage: NextPage = () => {
  const { data: media, isLoading } = useQuery('photos', fetchMedia);

  return (
    <Layout>
      <Heading className='mb-4'>Ryan Media</Heading>

      <Text size='lg' className='mb-10'>
        Our gallery of Ryan media from our events.
      </Text>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
        {isLoading && (
          Array(3).fill('').map((_, index) => (
            <div
              key={index}
              className='animate-pulse bg-gray-700 rounded-3xl w-full h-80 max-h-[450px]'
            />
          ))
        )}

        {!isLoading && media && (
          <>
            {media?.map((content, index) => (
              <div key={index}>
                <MediaTile
                  id={content.sys.id}
                  data={content.fields as MediaEvent}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default GalleryPage;
