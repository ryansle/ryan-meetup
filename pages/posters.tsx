// Components
import { Layout } from '@/components/navigation';
import { Heading, Button, Text } from '@/components/global';
import { Poster } from '@/components/posters';
import { FaDownload as Download } from 'react-icons/fa';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const posters = [
  { title: 'OG Ryan Meetup Poster', src: '/posters/ogposter.png' },
  { title: 'Variant Poster', src: '/posters/isyournameryan.jpg' },
  // { title: 'Calling all Ryans Poster', src: '/posters/CallingAllRyans.png' },
  // { title: 'Uncle Sam Poster', src: '/posters/unclesam.png' },
  { title: 'Know a Ryan Poster', src: '/posters/knowaryan.png' },
  // { title: 'Bryan Poster', src: '/posters/bryan2.png' },
];

const PosterPage: NextPage = () => {
  return (
    <Layout className='space-y-6'>
      <Head>
        <title>Ryan Meetup - Posters</title>
        <meta
          name='description'
          content='Download our official Ryan Meetup posters here and help bring the Ryan Meetup to your city!'
        />
        <meta
          name='keywords'
          content='ryan meetup, ryan meetup posters, is your name ryan, wanna meet other ryans, join the ryan meetup, ryan meet up, first name must be ryan, no bryans allowed, tell them to join the ryan meetup, we want you to join the ryan meetup, wanna change your name to ryan, no brians allowed, do you know a ryan, meet other ryans, absolutely no bryans'
        />
      </Head>

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
