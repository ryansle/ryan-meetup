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
  { title: 'Variant Poster', src: '/posters/isyournameryan.jpg' },
  { title: 'Calling all Ryans Poster', src: '/posters/CallingAllRyans.png' },
  { title: 'Uncle Sam Poster', src: '/posters/unclesam.png' },
  { title: 'Know a Ryan Poster', src: '/posters/knowaryan.png' },
  { title: 'Bryan Poster', src: '/posters/bryan2.png' },
];

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

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6'>
        {posters.map((poster, index) => (
          <Poster
            key={index}
            title={poster.title}
            src={poster.src}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PosterPage;
