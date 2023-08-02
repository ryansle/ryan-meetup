// Components
import { Heading, Text } from '@/components/global';
import NextLink from 'next/link';
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';

const socials = [
  {
    href: 'https://www.instagram.com/ryanmeetup/',
    icon: <Instagram className='h-5 w-5' color='gray' />
  },
  {
    href: 'https://www.meetup.com/ryanmeetup/',
    icon: <Meetup className='h-5 w-5' color='gray' />,
  }
];

const Footer = () => {
  return (
    <footer className='border-t border-gray-700 px-4 h-20 mt-24 lg:px-32 2xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <div className='w-full py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <NextLink href='/'>
              <Heading>RYAN MEETUP</Heading>
            </NextLink>

            <Text className='text-gray-600 mt-[2px]'>No Bryans Allowed!</Text>
          </div>

          {/* Resources & Follow Us */}
          <div className='grid grid-cols-4 space-x-8'>
            <div className='col-span-1'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Follow us</h2>
              <ul className='text-gray-600 font-medium'>
                <li className='mb-2'>
                  <NextLink href='https://www.instagram.com/ryanmeetup/' className='hover:underline'>Instagram</NextLink>
                </li>
                <li>
                  <NextLink href='https://www.meetup.com/ryanmeetup/' className='hover:underline'>Meetup</NextLink>
                </li>
              </ul>
            </div>
            <div className='col-span-3'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Built With</h2>
              <div className='grid grid-cols-2 space-x-4'>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://nextjs.org/' className='hover:underline'>Next.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://react.dev/' className='hover:underline'>React.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</NextLink>
                    </li>
                  </ul>
                </div>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://flowbite.com/' className='hover:underline'>Flowbite</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://headlessui.com/' className='hover:underline'>Headless UI</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://www.contentful.com/' className='hover:underline'>Contentful</NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-600 sm:text-center'>
            Website designed and developed by <NextLink href='https://ryanle.dev/' className='font-bold underline hover:text-white'>Ryan</NextLink>. All Rights Reserved.
          </span>

          {/* Socials */}
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
            {socials.map((channel, index) => (
              <NextLink key={index} href={channel.href}>
                {channel.icon}
              </NextLink>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export { Footer };