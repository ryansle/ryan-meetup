// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { MediaTile } from '@/components/media';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';
import type { MediaEvent } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchMedia } from '@/data/fetch';

type GalleryPageProps = {
  media: MediaEvent[];
};

const GalleryPage: NextPage<GalleryPageProps> = (props: GalleryPageProps) => {
  // @ts-ignore
  const { data: media, isLoading } = useQuery('photos', fetchMedia, { initialData: props.media });

  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Gallery</title>
        <meta
          name='description'
          content='Download our official Ryan Meetup posters here and help bring the Ryan Meetup to your city!'
        />
        <meta property='og:image' content='/retreat.png' />
        <meta
          name='keywords'
          content='ryan meetup, ryan meetup gallery, ryan meetup photos, ryan meetup media, pictures of ryan meetup, ryan photos, ryans'
        />
      </Head>

      <Heading className='mb-4'>Ryan Media</Heading>

      <Text size='lg' className='mb-10'>
        Our gallery of Ryan media from previous events.
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
              <MediaTile
                key={index}
                id={content.sys.id}
                data={content.fields as unknown as MediaEvent}
              />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const media = await fetchMedia();

  return {
    props: {
      media,
    }
  };
}

export default GalleryPage;
