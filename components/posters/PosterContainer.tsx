// Components
import NextImage from 'next/image';

const PosterContainer = () => {
  return (
    <div className='grid grid-cols-2 gap-x-2'>
      <div className='col-span-1'>
        <div className='relative'>
          {/* <NextImage
            src='./posters/ogposter.png'
            fill={true}
            alt='OG Ryan Poster'
          /> */}
        </div>
      </div>

      <div className='col-span-1'>
        <div className='relative'>
          {/* <NextImage
            src='./posters/ogposter.png'
            fill={true}
            alt='OG Ryan Poster'
          /> */}
        </div>
      </div>
    </div>
  );
};

export { PosterContainer };
