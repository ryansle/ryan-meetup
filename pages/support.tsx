// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { List, Venmo } from '@/components/support';
import Head from 'next/head';
import NextImage from 'next/image';
import QRCode from 'react-qr-code';

// Types
import type { NextPage } from 'next';

const DonatePage: NextPage = () => {
  const waysToSupport = [
    {
      main: 'Buy our merchandise.',
      sub: 'We design every piece of merchandise in-house, and you can rest assured that it was drawn up by a fellow Ryan.'
    },
    {
      main: 'Invite the Ryans in your life to join the Ryan Meetup.',
      sub: 'Help us move one step closer to hosting RyanCon, the largest gathering of the Ryans in the world.',
    },
    {
      main: 'Hang up flyers in your city,',
      sub: 'and help us grow the Ryan Meetup there.'
    },
    {
      main: 'Share your skills.',
      sub: 'Are you a Ryan with a unique skillset? Let\'s talk about it - email us at theryanmeetup@gmail.com.'
    },
    {
      main: 'Consider Venmoing us.',
      sub: 'All donations go towards setting up future Ryan Meetup events (ie: renting out spaces, buying nametags, trophies, decorations and more, as well as tightening up security against the Bryan threat, and expanding to new cities).'
    }
  ];



  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Support Us</title>
        <meta
          name='description'
          content='Help support the Ryan Meetup'
        />
        <meta
          name='keywords'
          content='ryan meetup, donate to the ryan meetup, support the ryan meetup, ryan meetup on venmo, ryan'
        />
      </Head>

      <div className='space-y-6'>
        <Heading>
          Support the Ryan Meetup
        </Heading>

        <Text>
          We have an army of Ryans at our disposal, so let&apos;s take advantage of it. The more Ryans who pitch in, the faster we&apos;ll grow.
        </Text>

        <div className='space-y-3'>
          <Heading size='md'>
            Ways to Support
          </Heading>
          <div className='grid grid-cols-12 flex items-center'>
            <div className='col-span-12 space-y-4 xl:col-span-9'>
              <List content={waysToSupport} />
            </div>
            <div className='col-span-0 xl:col-span-1' />
            <div className='col-span-12 flex flex-col items-center mt-10 xl:mt-0 xl:col-span-2'>
              <QRCode
                value='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
                size={200}
              />
              <div className='relative w-28 h-14'>
                <NextImage
                  src='/venmo-logo.png'
                  fill
                  alt='Venmo Logo'
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Venmo /> */}
    </Layout>
  );
};

export default DonatePage;
