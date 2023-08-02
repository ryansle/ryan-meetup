// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { List, Venmo } from '@/components/support';
import Head from 'next/head';

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
          We&apos;re currently paying for the Ryan Meetup out of our own pockets. All money goes towards setting up future Ryan Meetup events (ie: renting out spaces, buying nametags, trophies, decorations and more, as well as tightening up security against the Bryan threat, and expanding to new cities).
        </Text>

        <Text>
          Our events are and will remain <span className='font-bold'>free to attend</span> for Ryans.
        </Text>


        <div className='space-y-3'>
          <Heading size='md'>
            Ways to Support
          </Heading>
          <List content={waysToSupport} />
        </div>
      </div>

      <Venmo />
    </Layout>
  );
};

export default DonatePage;
