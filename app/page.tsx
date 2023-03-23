// Components
import { Layout } from '@/components/navigation';

// Utilities
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  const underlineStyle = 'underline underline-offset-4 decoration-blue-500';

  return (
    <Layout className='space-y-4'>
      <h1 className='text-4xl font-bold'>
        Is your name <span className={underlineStyle}>Ryan</span>?
      </h1>

      <h2 className='text-2xl font-semibold'>
        Join the <span className={underlineStyle}>Ryan</span> Meetup!
      </h2>

      <a
        href="https://www.meetup.com/ryanmeetup/"
        rel="noopener noreferrer"
        className="pointer relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
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

export default Home;