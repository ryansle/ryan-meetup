import { useState, useEffect } from 'react';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Event } from '@/components/events/';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';
import type { RyanEvent } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchEvents } from '@/data/fetch';

type EventsPageProps = {
  events: RyanEvent[];
};

const EventsPage: NextPage<EventsPageProps> = (props: EventsPageProps) => {
  // @ts-ignore
  const { data, isLoading } = useQuery('events', fetchEvents, { initialData: props.events });

  const [activeEvents, setActiveEvents] = useState<RyanEvent[]>();
  const [inactiveEvents, setInactiveEvents] = useState<RyanEvent[]>();

  useEffect(() => {
    const active = data?.filter((event) => event.active);
    // @ts-ignore
    const inactive = data?.filter((event) => !event.active).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    setActiveEvents(active as unknown as RyanEvent[]);
    setInactiveEvents(inactive as unknown as RyanEvent[]);
  }, [data]);

  return (
    <Layout>
      <Head>
        <title>Ryan Meetup - Events</title>
        <meta
          name='description'
          content='Check out upcoming Ryan Meetups!'
        />
        <meta property='og:image' content='../kidryan.webp' />
        <meta
          name='keywords'
          content='when is the next ryan meetup?, ryan meetup, ryan meetup nyc, ryan meetup new york, ryan meetup new york city, ryan meetup near me, ryan meetup los angeles, ryan rendezvous, ryan roundup, ryan kickoff, ryan rodeo, ryan roundtable, ryan roadtrip, ryan rally, ryan rave, ryan run, ryan new york city, ryan meet up, ryan meetup new york city, ryan reunion, ryan syndicate, ryan retreat, ryan relay'
        />
      </Head>

      <Heading className='mb-4'>Ryan Events</Heading>

      {/* <Text size='lg' className='mb-10'>
        Interested in hosting your own Ryan Meetup in your city? Email us at <a className='underline text-blue-500' href='mailto:theryanmeetup@gmail.com'>theryanmeetup@gmail.com</a> and we&apos;ll add your event to the page!
      </Text> */}

      <Text size='lg' className='mb-10'>
        If your name is Ryan, check out our Ryan Meetups below. No Bryans allowed.
      </Text>

      {isLoading && (
        <div>
          <div className='animate-pulse bg-gray-700 rounded-3xl w-96 h-10 mb-4' />
          <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 3xl:grid-cols-3'>
            {Array(6).fill('').map((_, index) => (
              <div
                key={index}
                className='animate-pulse bg-gray-700 rounded-3xl w-full h-full max-h-[450px] aspect-w-2 aspect-h-1'
              />
            ))}
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          {activeEvents?.length !== 0 && (
            <div className='mb-10'>
              <Heading size='md' className='mb-4'>
                Upcoming Events
              </Heading>

              <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 4xl:grid-cols-3'>
                {activeEvents && (
                  <>
                    {activeEvents?.map((event, index) => (
                      <Event
                        key={index}
                        event={event as RyanEvent}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          <div>
            <Heading size='md' className='mb-4'>
              Past Events
            </Heading>

            <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 4xl:grid-cols-3'>
              {inactiveEvents?.map((event, index) => (
                <Event
                  key={index}
                  event={event as RyanEvent}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const events = await fetchEvents();

  return {
    props: {
      events,
    }
  };
}

export default EventsPage;
