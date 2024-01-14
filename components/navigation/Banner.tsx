// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-red-400 py-1 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <NextLink href='/rsvp' className='hover:underline'>Ryan Rodeo. Austin, TX. Feb 24</NextLink>
    </div>
  );
};

export { Banner };
