'use client';

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

  return (
    <Layout>
      <Heading className='mb-4'>Ryan Events</Heading>

      <Text className='mb-10'>
        Interested in hosting your own Ryan Meetup in your city? Email us at <a className='underline text-blue-500' href='mailto:theryanmeetup@gmail.com'>theryanmeetup@gmail.com</a> and we&apos;ll add your event to the page!
      </Text>

      <Heading size='md' className='mb-4'>
        Past Events
      </Heading>

      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2'>
        {/* TODO: better skeleton component */}
        {isLoading && (
          Array(4).fill('').map((_, index) => (
            <div
              key={index}
              className='animate-pulse bg-gray-700 rounded-3xl w-full h-full max-h-[450px] aspect-w-2 aspect-h-1'
            />
          ))
        )}

        {!isLoading && events && (
          <>
            {events?.map((event, index) => (
              <div key={index}>
                <Event event={event as RyanEvent} />
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};

export default EventsPage;
