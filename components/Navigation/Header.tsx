'use client';

// Components
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';
import NextImage from 'next/image';

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

const Header = () => {
  const router = useRouter();

  const buttons = [
    { icon: <Instagram className='h-8 w-8' />, onClick: () => router.push('https://www.instagram.com/theryansociety/') },
    { icon: <Meetup className='h-8 w-8' />, onClick: () => router.push('https://www.meetup.com/ryanmeetup/') }
  ];

  return (
    <div className='flex justify-between items-center py-5 px-4 border-b border-gray-700 lg:px-48 2xl:px-96'>
      <div className='relative w-[128px] h-[33px]'>
        <NextImage
          src='/ryan.png'
          fill={true}
          alt='Ryan Logo'
        />
      </div>
      <div className='space-x-4'>
        {buttons.map((button, index) => (
          <NavButton
            key={index}
            icon={button.icon}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export { Header };