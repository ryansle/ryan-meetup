'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Button, Text } from '@/components/global';
import { Poster } from '@/components/posters';
import { FaDownload as Download } from 'react-icons/fa';

// Types
import type { NextPage } from 'next';

const posters = [
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'Ryan Seacrest Meetup Poster', src: '/posters/ryanSEACREST.png' },
  { title: 'Ryan Reynolds Meetup Poster', src: '/posters/ryanreynolds.png' },
  { title: 'Ryan Gosling Meetup Poster', src: '/posters/ryangosling.jpeg' },
];

// TODO: attach to an API so we can upload/delete posters at will
const PosterPage: NextPage = () => {
  return (
    <Layout className='space-y-6'>
      <Heading>Posters</Heading>

      <Text size='lg'>
        Interested in hanging up Ryan Meetup posters in your city? Download our posters here!
      </Text>

      <Button
        onClick={() => window.open('/posters/posters.zip')}
        leftIcon={<Download />}
      >
        Download Poster Bundle
      </Button>

      <div className='grid md:grid-cols-3 gap-x-6 gap-y-6'>
        {posters.map((poster, index) => (
          <div className='col-span-1' key={index}>
            <Poster title={poster.title} src={poster.src} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default PosterPage;
