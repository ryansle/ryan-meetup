'use client';

// Components
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';
import { MobileMenu } from '@/components/navigation';
import NextImage from 'next/image';
import NextLink from 'next/link';

// TODO: uncomment pages as they are built
const Header = () => {
  const routes = [
    { text: 'Events', href: '/events' },
    // { text: 'Merch', href: '/merch' },
    { text: 'Posters', href: '/posters' },
    // { text: 'Gallery', href: '/gallery' },
    { text: 'Press', href: '/press' },
    { text: 'Contact Us', href: '/contact' }
  ];

  const socials = [
    {
      href: 'https://www.instagram.com/ryanmeetup/',
      icon: <Instagram className='h-8 w-8' color='white' />
    },
    {
      href: 'https://www.meetup.com/ryanmeetup/',
      icon: <Meetup className='h-8 w-8' color='white' />,
    }
  ];

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-700 bg-black sticky relative top-0 right-0 left-0 z-10 lg:px-48 2xl:px-96'>
      <div className='relative w-[128px] h-[33px]'>
        <NextLink href='/'>
          <NextImage
            src='/ryan.png'
            fill={true}
            alt='Ryan Logo'
          />
        </NextLink>
      </div>
      <div className='space-x-4 flex items-center'>
        <div className='hidden md:block space-x-4 flex items-center'>
          {routes.map((route) => (
            <NextLink
              className='font-semibold tracking-wide text-white'
              key={route.href}
              href={route.href}
            >
              {route.text}
            </NextLink>
          ))}
        </div>

        {socials.map((channel, index) => (
          <NextLink key={index} href={channel.href}>
            {channel.icon}
          </NextLink>
        ))}

        <div className='md:hidden'>
          <MobileMenu content={routes} />
        </div>
      </div>
    </header>
  );
};

export { Header };