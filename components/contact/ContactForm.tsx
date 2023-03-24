// Components
import { Input, Textarea } from '@/components/global';

// Utilities
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register } = useForm();

  return (
    <form>
      <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
        <div className='col-span-1'>
          <Input
            label='First Name'
            placeholder='Ryan'
            required
            {...register('firstName')}
          />
        </div>

        <div className='col-span-1'>
          <Input
            label='Last Name'
            placeholder='Smith'
            required
            {...register('lastName')}
          />
        </div>

        <div className='col-span-2'>
          <Input
            label='Email Address'
            placeholder='ryan@ryan.com'
            required
            {...register('email')}
          />
        </div>

        <div className='col-span-2'>
          <Input
            label='Subject'
            placeholder='Official Ryan Business'
            required
            {...register('subject')}
          />
        </div>

        <div className='col-span-2'>
          <Textarea
            label='Message'
            placeholder='Talk about BIG and IMPORTANT Ryan topics here'
            required
            {...register('message')}
          />
        </div>
      </div>
    </form>
  );
};

export { ContactForm };
