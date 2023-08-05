// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper bg-red-400 py-1 flex justify-between grid grid-cols-12 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <p className='col-span-12 xl:col-span-6'>
        New Ryan Meetup merch available now!
      </p>
      <p className='flex justify-end col-span-12 mt-4 xl:col-span-6 xl:mt-0'>
        Support the Ryan Meetup by checking out our&nbsp;
        <NextLink className='text-red-800 hover:underline' href='/merch'>/merch</NextLink>&nbsp; page!
      </p>
    </div>
  );
};

export { Banner };
