// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import QRCode from 'react-qr-code';

const RyanPoster = () => {
  const underlineStyle = 'underline underline-offset-4 decoration-blue-500';

  return (
    <div className='flex flex-col justify-center items-center text-center capitalize'>
      {/* TODO: image fade up */}
      <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1 mb-6'>
        <NextImage
          className='rounded-3xl'
          src='/ryanroundup.png'
          fill={true}
          alt='Ryan Meetup Founders'
        />
      </div>

      <div className='mb-4'>
        {/* regular size header */}
        <div className='hidden sm:block'>
          <Heading size='2xl'>
            IS YOUR NAME <span className={underlineStyle}>RYAN</span>?
          </Heading>
        </div>

        {/* mobile header */}
        <div className='sm:hidden'>
          <Heading size='xl'>
            IS YOUR NAME <span className={`${underlineStyle} text-8xl`}>RYAN</span>
            <span className='text-8xl'>?</span>
          </Heading>
        </div>
      </div>

      <Heading className='mb-4' size='lg'>
        WANNA MEET OTHER <span className={underlineStyle}>RYANS</span>?
      </Heading>

      <Heading className='mb-10' size='lg'>
        JOIN THE RYAN MEETUP!
      </Heading>

      <QRCode
        className='mb-10'
        value='https://www.meetup.com/ryanmeetup/'
      />

      <Heading size='lg'>
        * FIRST NAME MUST BE RYAN. NO BRYANS ALLOWED.
      </Heading>
    </div>
  );
};

export { RyanPoster };
