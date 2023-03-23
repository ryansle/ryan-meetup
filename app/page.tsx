// Components
import { Layout } from '@/components/navigation';
import { Heading } from '@/components/global';

// Utilities
import { Inter } from 'next/font/google';

// Types
import type { NextPage } from 'next';

const inter = Inter({ subsets: ['latin'] });

const HomePage: NextPage = () => {
  const underlineStyle = 'underline underline-offset-4 decoration-blue-500';

  return (
    <Layout className='items-center justify-center'>
      <Heading className='mb-2' size='xl'>
        Is your name <span className={underlineStyle}>Ryan</span>?
      </Heading>
      <Heading className='mb-10' size='md'>
        Wanna meet other <span className={underlineStyle}>Ryans</span>?
      </Heading>

      <Heading size='md'>Join the Ryan Meetup!</Heading>

      <a
        href="https://www.meetup.com/ryanmeetup/"
        rel="noopener noreferrer"
        className="pointer relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2 mt-10"
      >
        <h1
          className={`${inter.className} uppercase font-bold tracking-wider text-xs absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400`}
        >
          Welcome, Ryan.
        </h1>
        <span
          aria-hidden
          className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400"
        />
      </a>
    </Layout>
  );
};

export default HomePage;