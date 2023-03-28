// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import QRCode from 'react-qr-code';

const RyanPoster = () => {
  const underlineStyle = 'underline underline-offset-4 decoration-blue-500';

  return (
    <div className='flex flex-col justify-center items-center text-center'>
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
          <Heading
            className='font-cooper'
            size='2xl'
            bold={false}
          >
            Is your name <span className={underlineStyle}>Ryan</span>?
          </Heading>
        </div>

        {/* mobile header */}
        <div className='sm:hidden'>
          <Heading
            className='font-cooper'
            size='xl'
            bold={false}
          >
            Is your name <span className={`${underlineStyle} text-8xl`}>Ryan</span>
            <span className='text-8xl'>?</span>
          </Heading>
        </div>
      </div>

      <Heading
        className='mb-10 font-cooper'
        size='lg'
        bold={false}
      >
        Wanna meet other <span className={underlineStyle}>Ryans</span>?
      </Heading>

      <Heading
        className='mb-10 font-cooper'
        size='lg'
        bold={false}
      >
        Join the Ryan Meetup!
      </Heading>

      <QRCode
        className='mb-10'
        value='https://www.meetup.com/ryanmeetup/'
      />

      <Heading
        className='font-cooper text-center mb-10'
        size='lg'
        bold={false}
      >
        * First name must be Ryan. No Bryans allowed.
      </Heading>
    </div>
  );
};

export { RyanPoster };
