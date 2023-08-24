// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper bg-red-400 py-1 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <p>
        We just dropped the location for the RYAN RAVE! Details on our <NextLink className='text-red-800 hover:underline' href='/events'>/events</NextLink>{' '} page!
      </p>
    </div>
  );
};

export { Banner };
