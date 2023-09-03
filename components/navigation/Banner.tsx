// Components
import NextLink from 'next/link';

const Banner = () => {
  return (
    <div className='font-cooper bg-red-400 py-1 px-2 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
      <p>
        Ryan Rave shirts still available on our <NextLink className='text-red-800 hover:underline' href='/merch'>/merch</NextLink>{' '} page!
      </p>
    </div>
  );
};

export { Banner };
