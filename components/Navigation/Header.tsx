'use client';

// Components
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';
import { MobileMenu } from '@/components/navigation';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Utilities
import { useRouter } from 'next/navigation';
import useMediaQuery from '@/hooks/useMediaQuery';

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

const Header = () => {
  const router = useRouter();

  const isMobileScreen = useMediaQuery(640);

  const routes = [
    { text: 'Posters', href: '/posters' },
    { text: 'Contact Us', href: '/contact' }
  ];

  const externalLinks = [
    { icon: <Instagram className='h-8 w-8' />, onClick: () => router.push('https://www.instagram.com/theryansociety/') },
    { icon: <Meetup className='h-8 w-8' />, onClick: () => router.push('https://www.meetup.com/ryanmeetup/') }
  ];

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-700 lg:px-48 2xl:px-96'>
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
        {!isMobileScreen && (
          <>
            {routes.map((route) => (
              <NextLink
                className='font-semibold tracking-wide'
                key={route.href}
                href={route.href}
              >
                {route.text}
              </NextLink>
            ))}
          </>
        )}

        {externalLinks.map((button, index) => (
          <NavButton
            key={index}
            icon={button.icon}
            onClick={button.onClick}
          />
        ))}

        {isMobileScreen && (
          <MobileMenu content={routes} />
        )}
      </div>
    </header>
  );
};

export { Header };