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

type RyanEvent = {
  active: boolean;
  coverImage: {
    fields: {
      title: string;
      description: string;
      file: {
        contentType: string;
        details: {
          image: {
            height: number;
            width: number;
          }
          size: number;
        }
        fileName: string;
        url: string;
      }
    },
    metaData: {
      tags: string[]
    }
    sys: {
      createdAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        }
      }
    }
    id: string;
    locale: string;
    revision: number;
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      }
      type: string;
      updatedAt: string;
    }
  }
  description: string;
  href: string;
  title: string;
}

const EventsPage: NextPage = () => {
  const [events, setEvents] = useState<RyanEvent[]>([]);

  useEffect(() => {
    client.getEntries(({ content_type: 'event', }))
      .then((data) => {
        const arr = data.items.map((entry) => entry.fields);
        setEvents(arr as RyanEvent[]);
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
