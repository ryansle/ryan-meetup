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
import client from '@/data/contentful';

// TODO: try to fetch in a client component and if that doesn't work, use react query
const EventsPage: NextPage = () => {
  const [events, setEvents] = useState<RyanEvent[]>([]);

  useEffect(() => {
    client.getEntries(({ content_type: 'event', order: 'sys.createdAt' }))
      .then((data) => {
        const arr = data.items.map((entry) => entry.fields);
        setEvents(arr as RyanEvent[]);
      });
  }, []);

  return (
    <Layout>
      <Heading className='mb-4'>Ryan Events</Heading>

      <Text className='mb-10'>
        Interested in hosting your own Ryan Meetup in your city? Email us at <a className='underline text-blue-500' href='mailto:theryanmeetup@gmail.com'>theryanmeetup@gmail.com</a> and we&apos;ll add your event to the page!
      </Text>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4'>
        {events.map((event) => (
          <div key={event.title} className='col-span-1'>
            <Event
              title={event.title}
              coverImage={event.coverImage}
              description={event.description}
              href={event.href}
              city={event.city}
              location={event.location}
              active={event.active}
              date={event.date}
              venue={event.venue}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EventsPage;
