// Components
import { MdConstruction as Construction } from 'react-icons/md';
import { Heading } from './global';

const UnderConstruction = () => {
  return (
    <div className='h-96 flex items-center justify-center flex-col text-center'>
      <Construction className='w-48 h-48' />

      {/* Mobile */}
      <div className='block sm:hidden'>
        <Heading
          className='mb-10'
          variant='normal'
          bold
          size='lg'
        >
          This page is under construction!
        </Heading>
      </div>

      {/* Desktop */}
      <div className='hidden sm:block'>
        <Heading
          className='mb-10'
          variant='normal'
          bold
          size='2xl'
        >
          This page is under construction!
        </Heading>
      </div>

      <div className='block sm:hidden'>
        <Heading variant='normal' bold size='md'>
          Check back soon!
        </Heading>
      </div>

      <div className='hidden sm:block'>
        <Heading variant='normal' bold size='lg'>
          Check back soon!
        </Heading>
      </div>

    </div>
  );
};

export default UnderConstruction;
