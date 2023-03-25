'use client';

import { useState, useEffect } from 'react';

// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';
import { Event } from '@/components/events/';

// Types
import type { NextPage } from 'next';

// Utilities
import client from '@/data/contentful';

// TODO: resolve typescript errors when I'm more awake
const EventsPage: NextPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    client.getEntries(({ content_type: 'event', }))
      .then((data) => {
        const arr = data.items.map((entry) => entry.fields);
        setEvents(arr);
      });
  }, []);

  return (
    <Layout className='space-y-4'>
      <Heading>Ryan Events</Heading>

      <div className='grid grid-cols-2 sm:grid-col-2 gap-x-4'>
        {events.map((event) => (
          <div key={event.title} className='col-span-1'>
            <Event
              title={event?.title}
              coverImage={event?.coverImage}
              description={event?.description}
              href={event?.href}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default EventsPage;
