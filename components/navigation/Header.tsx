'use client';

// Components
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';
import { MobileMenu } from '@/components/navigation';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Utilities
import { useRouter } from 'next/navigation';

// Types
import type { ReactNode } from 'react';

type NavButtonProps = {
  icon: ReactNode;
  onClick: () => void;
}

const NavButton = (props: NavButtonProps) => {
  const { icon, onClick } = props;

  return (
    <button onClick={onClick}>
      {icon}
    </button>
  );
};

// TODO: uncomment pages as they are built
const Header = () => {
  const router = useRouter();

  const routes = [
    { text: 'Events', href: '/events' },
    // { text: 'Merch', href: '/merch' },
    { text: 'Posters', href: '/posters' },
    // { text: 'Gallery', href: '/gallery' },
    { text: 'Press', href: '/press' },
    { text: 'Contact Us', href: '/contact' }
  ];

  const externalLinks = [
    { icon: <Instagram className='h-8 w-8' color='white' />, onClick: () => router.push('https://www.instagram.com/ryanmeetup/') },
    { icon: <Meetup className='h-8 w-8' color='white' />, onClick: () => router.push('https://www.meetup.com/ryanmeetup/') }
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

        {externalLinks.map((button, index) => (
          <NavButton
            key={index}
            icon={button.icon}
            onClick={button.onClick}
          />
        ))}

        <div className='md:hidden'>
          <MobileMenu content={routes} />
        </div>
      </div>
    </header>
  );
};

export { Header };