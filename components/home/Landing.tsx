// Components
import NextImage from 'next/image';
import NextLink from 'next/link';
import { Heading } from '@/components/global';
import { FaMeetup as Meetup } from 'react-icons/fa';
import { Transition } from '@headlessui/react';

const Landing = () => {
  return (
    <div className='grid grid-cols-12 h-full flex items-center'>
      <div className='col-span-12 order-last xl:order-first xl:col-span-7'>
        <div className='space-y-4'>
          <Heading size='xl'>
            If your name is Ryan,
          </Heading>
          <Heading size='md'>
            You&apos;re in the right place.
          </Heading>
        </div>

        <div className='my-4 text-xl text-gray-400 xl:mr-32'>
          <div className='space-y-4'>
            <p>
              Welcome to the Ryan Meetup, an organization run by Ryans - for Ryans, with the ultimate goal of gathering as many Ryans as possible.
            </p>
            <p>
              We&apos;re slowly expanding across the United States, and hope to one day hold RyanCon, the largest first name gathering in the world.
            </p>
            <p>
              We hope to see you soon, Ryan.
            </p>
          </div>

          <div className='mt-4 transition ease-in-out duration-300 hover:scale-102'>
            <NextLink
              className='px-2 py-3 border rounded-xl font-cooper italic text-white flex items-center justify-center'
              href='https://www.meetup.com/ryanmeetup/'
            >
              <Meetup className='mr-4' />
              Join the Ryan Meetup!
            </NextLink>
          </div>
        </div>
      </div>
      <div className='col-span-12 order-first mb-4 xl:col-span-5 xl:order-last xl:mb-0'>
        <Transition
          appear={true}
          show={true}
          enter='transition-opacity ease-linear duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
        >
          <div className='relative w-full h-56 xl:h-96'>
            <NextImage
              className='rounded-xl shadow'
              src='/nametags.jpeg'
              fill
              alt='Ryan Roundup, March 2023'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Transition>
      </div>
    </div>
  );
};

export { Landing };