'use client';

import { useState, useEffect } from 'react';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Event } from '@/components/events/';

// Types
import type { NextPage } from 'next';
import type { RyanEvent } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchEvents } from '@/data/fetch';

// TODO: event organization
const EventsPage: NextPage = () => {
  const { data: events, isLoading } = useQuery('events', fetchEvents);

  const [activeEvents, setActiveEvents] = useState<RyanEvent[]>();
  const [inactiveEvents, setInactiveEvents] = useState<RyanEvent[]>();

  useEffect(() => {
    // @ts-ignore
    const active = events?.filter((event) => event.active);
    // @ts-ignore
    const inactive = events?.filter((event) => !event.active);

    setActiveEvents(active as RyanEvent[]);
    setInactiveEvents(inactive as RyanEvent[]);
  }, [events]);

  return (
    <Layout>
      <Heading className='mb-4'>Ryan Events</Heading>

      {/* <Text size='lg' className='mb-10'>
        Interested in hosting your own Ryan Meetup in your city? Email us at <a className='underline text-blue-500' href='mailto:theryanmeetup@gmail.com'>theryanmeetup@gmail.com</a> and we&apos;ll add your event to the page!
      </Text> */}

      <Text size='lg' className='mb-10'>
        If your name is Ryan, check out our Ryan Meetups below. No Bryans allowed.
      </Text>

      {activeEvents?.length !== 0 && (
        <div className='mb-10'>
          <Heading size='md' className='mb-4'>
            Current Events
          </Heading>

          <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 3xl:grid-cols-3'>
            {!isLoading && activeEvents && (
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

      <Heading size='md' className='mb-4'>
        Past Events
      </Heading>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 3xl:grid-cols-3'>
        {isLoading && (
          Array(6).fill('').map((_, index) => (
            <div
              key={index}
              className='animate-pulse bg-gray-700 rounded-3xl w-full h-full max-h-[450px] aspect-w-2 aspect-h-1'
            />
          ))
        )}

        {!isLoading && inactiveEvents && (
          <>
            {inactiveEvents?.map((event, index) => (
              <Event
                key={index}
                event={event as RyanEvent}
              />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default EventsPage;
