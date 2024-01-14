// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-red-400 py-1 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <p>
        Get ready for a rootin&apos; tootin&apos; time, Ryans. RSVP to the{' '}
        <NextLink href='/rsvp' className='text-red-900 hover:underline'>Ryan Rodeo</NextLink> today.
      </p>
    </div>
  );
};

export { Banner };
