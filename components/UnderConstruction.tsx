// Components
import { MdConstruction as Construction } from 'react-icons/md';
import { Heading } from './global';

const UnderConstruction = () => {
  return (
    <div className='h-96 flex items-center justify-center flex-col text-center'>
      <Construction className='w-48 h-48' />
      <Heading
        className='mb-10'
        variant='normal'
        bold
        size='2xl'
      >
        This page is under construction!
      </Heading>
      <Heading variant='normal' bold size='xl'>
        Check back soon!
      </Heading>
    </div>
  );
};

export default UnderConstruction;
