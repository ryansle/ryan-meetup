// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';
import { FaCity as City } from 'react-icons/fa';
import { MdLocationPin as Pin } from 'react-icons/md';

// Types
import type { RyanEvent } from '@/lib/types';

const Event = (props: RyanEvent) => {
  const {
    title,
    coverImage,
    description,
    href,
    city,
    location,
    active,
    date,
    venue
  } = props;

  const convertDate = (date: Date) => {
    const dateObject = new Date(date);

    const dateString = dateObject.toDateString();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    const hour = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    return `${dateString.slice(0, 3)}, ${dateString.slice(4, 8)} ${day} ${year} @ ${hour}:${minutes === 0 ? `${minutes}0` : `${minutes}`} PM`;
  };

  return (
    <NextLink href={href}>
      <div className='border border-gray-700 rounded-3xl h-full hover:scale-105 hover:transition hover:ease-in-out'>
        <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1'>
          <NextImage
            className='rounded-t-3xl border-b border-gray-700'
            src={`https://${coverImage.fields.file.url.replace('//', '')}`}
            fill={true}
            alt={coverImage.fields.title}
          />
        </div>
        <div className='px-5 pt-3 pb-6'>
          <div className='flex items-center justify-between mb-3'>
            <div>
              <Text size='xs'>{convertDate(date)}</Text>
              <Heading size='sm'>{title}</Heading>
            </div>

            <div className='space-y-1'>
              <div className='flex items-center space-x-2'>
                <City />
                <Text size='xs'>{city}</Text>
              </div>
              <div className='flex items-center space-x-2'>
                <Pin />
                <Text size='xs'>{venue}</Text>
              </div>
            </div>
          </div>
          <Text size='xs'>{description}</Text>
        </div>
      </div>
    </NextLink>
  );
};

export { Event };
