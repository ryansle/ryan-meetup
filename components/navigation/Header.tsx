// Components
import { FaInstagram as Instagram, FaMeetup as Meetup, FaDiscord as Discord } from 'react-icons/fa';
import { Heading, ThemeSwitcher } from '@/components/global';
import { MobileMenu } from '@/components/navigation';
import NextLink from 'next/link';

const Header = () => {
  const routes = [
    { text: 'Events', href: '/events' },
    { text: 'Merch', href: 'https://ryanmeetup.etsy.com' },
    { text: 'Posters', href: '/posters' },
    { text: 'Gallery', href: '/gallery' },
    { text: 'Map', href: '/map' },
    { text: 'Press', href: '/press' },
    { text: 'Support', href: '/support' },
    { text: 'Contact', href: '/contact' },
  ];

  const socials = [
    {
      href: 'https://www.instagram.com/ryanmeetup/',
      icon: <Instagram className='h-8 w-8 fill-black dark:fill-white' />
    },
    {
      href: 'https://www.meetup.com/ryanmeetup/',
      icon: <Meetup className='h-8 w-8 fill-black dark:fill-white' />,
    },
    {
      href: 'https://discord.gg/HDugzYSHKC',
      icon: <Discord className='h-8 w-8 fill-black dark:fill-white' />,
    }
  ];

  return (
    <header className='flex justify-between items-center py-5 px-4 border-b border-gray-400 dark:border-gray-700 bg-white dark:bg-black sticky relative top-0 right-0 left-0 z-10 lg:px-32 2xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <div className='relative w-[128px] h-[33px] text-black dark:text-white transition ease-in-out duration-300 hover:scale-105'>
        <NextLink href='/'>
          <Heading>RYAN</Heading>
        </NextLink>
      </div>
      <div className='space-x-4 flex items-center'>
        <div className='hidden lg:block space-x-4 flex items-center'>
          {routes.map((route) => (
            <NextLink
              className='font-semibold tracking-wide text-black dark:text-white'
              key={route.href}
              href={route.href}
            >
              {route.text}
            </NextLink>
          ))}
        </div>

        <ThemeSwitcher />

        {socials.map((channel, index) => (
          <NextLink key={index} href={channel.href}>
            {channel.icon}
          </NextLink>
        ))}

        <div className='lg:hidden'>
          <MobileMenu content={routes} />
        </div>
      </div>
    </header>
  );
};

export { Header };