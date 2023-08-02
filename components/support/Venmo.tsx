// Components
import { Heading, Text } from '@/components/global';
import QRCode from 'react-qr-code';
import NextImage from 'next/image';

const Venmo = () => {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 space-y-4 xl:col-span-8'>
          <Heading>
            We also take Venmo...
          </Heading>
          <Text>
            Want to support the Ryan Meetup but don&apos;t have the time to contribute your skills? We have a solution.
          </Text>
          <Text>
            Every dollar counts towards supporting the Ryan Meetup. We&apos;ll never require our Ryans to pay to attend our events.
          </Text>

        </div>
        <div className='col-span-0 xl:col-span-2' />
        <div className='col-span-12 flex flex-col items-center mt-10 xl:mt-0 xl:col-span-2'>
          <QRCode
            value='https://venmo.com/code?user_id=3841296049374520231&created=1690776081.636693&printed=1'
            size={150}
          />
          <div className='relative w-28 h-14'>
            <NextImage
              src='/venmo-logo.png'
              fill
              alt='Venmo Logo'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Venmo };