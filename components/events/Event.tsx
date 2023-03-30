// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { FaCity as City } from 'react-icons/fa';
import { MdLocationPin as Pin } from 'react-icons/md';
import { FaMeetup as Meetup } from 'react-icons/fa';

// Types
import type { RyanEvent } from '@/lib/types';

// Utilities
import { convertDateToDateTimeString } from '@/utils/convert';

type EventProps = {
  event: RyanEvent;
}

const Event = (props: EventProps) => {
  const {
    title,
    coverImage,
    description,
    href,
    city,
    date,
    venue
  } = props.event;

  return (
    <NextLink href={href}>
      <div className='border border-gray-700 rounded-3xl h-full hover:scale-102 transition ease-in duration-300'>
        <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1 overflow-hidden'>
          <NextImage
            className='rounded-t-3xl border-b border-gray-700'
            src={`https://${coverImage?.fields.file.url.replace('//', '')}`}
            fill={true}
            alt={coverImage?.fields.title}
          />
        </div>

        {/* Event Description */}
        <div className='px-5 pt-3 pb-6 space-y-1'>
          <div className='flex items-center justify-between mb-3'>
            <div>
              <Text size='xs'>{convertDateToDateTimeString(date)}</Text>
              <Heading size='sm'>{title}</Heading>
            </div>
            <div>
              <Meetup className='w-10 h-10' />
            </div>
          </div>
          <Text size='xs'>{description}</Text>

          <div className='grid grid-cols-2 text-gray-400 mt-2'>
            <div className='col-span-1 flex items-center space-x-2'>
              <City />
              <Text size='xs'>{city}</Text>
            </div>

            <div className='col-span-1 flex items-center space-x-2'>
              <Pin />
              <Text size='xs'>{venue}</Text>
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Event };