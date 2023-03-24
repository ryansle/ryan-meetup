'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Button } from '@/components/global';
import { Poster } from '@/components/posters';
import { FaDownload as Download } from 'react-icons/fa';

// Types
import type { NextPage } from 'next';

const posters = [
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
];

// TODO: attach to an API so we can upload/delete posters at will
const PosterPage: NextPage = () => {
  return (
    <Layout>
      <Heading className='mb-6'>Posters</Heading>

      {/* TODO: download pdfs */}
      <Button
        className='mb-6'
        onClick={() => console.log('download')}
        leftIcon={<Download />}
      >
        Download PDF Bundle
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
