// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper text-white bg-red-400 py-1 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <NextLink href='/rsvp' className='hover:underline'>Who the hell is Patrick, anyway? Join us for St. Ryan&apos;s Day in Chicago, IL, on March 23.</NextLink>
    </div>
  );
};

export { Banner };
