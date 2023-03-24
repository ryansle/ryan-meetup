'use client';
import { useState } from 'react';

// Components
import { Input, Textarea, Button } from '@/components/global';
import { BiMailSend as Send } from 'react-icons/bi';

// Utilities
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm();

  const sendEmail = (data: Form) => {
    setLoading(true);

    setTimeout(() => {
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;

      emailjs.send(serviceId as string, templateId as string, data, userId);
      setLoading(false);

      reset();
    }, 1000);
  };

  return (
    <form>
      <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-4'>
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

        <div className='col-span-2 sm:col-span-1'>
          <Input
            label='Email Address'
            placeholder='ryan@ryan.com'
            type='email'
            required
            {...register('email')}
          />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <Input
            label='Phone Number (optional)'
            placeholder='(123) 456-7890'
            type='number'
            {...register('phoneNumber')}
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
            id='message'
            label='Message'
            placeholder='Talk about BIG and IMPORTANT Ryan topics here'
            required
            {...register('message')}
          />
        </div>
      </div>

      <Button
        className='float-right'
        leftIcon={<Send />}
        onClick={handleSubmit((data) => sendEmail(data as Form))}
      >
        Send
      </Button>
    </form>
  );
};

export { ContactForm };
