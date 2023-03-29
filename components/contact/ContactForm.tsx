'use client';
import { useState, useEffect } from 'react';

// Components
import { Input, Textarea, Button, Text, Toast } from '@/components/global';
import { SkeletonForm } from './SkeletonForm';
import { BiMailSend as Send } from 'react-icons/bi';

// Utilities
import { useForm } from 'react-hook-form';
import { validateEmail } from '@/utils/validate';
import emailjs from '@emailjs/browser';

// Types
import type { ReactNode } from 'react';

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number | string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  // TODO: loader
  const [loading, setLoading] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const sendEmail = (data: Form) => {
    setLoading(true);

    setTimeout(() => {
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_USER_ID;
      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;

      // emailjs.send(serviceId as string, templateId as string, data, userId);
      setLoading(false);

      reset();
    }, 1000);
  };

  const checkEmail = (email: string) => {
    const valid = validateEmail(email);

    if (valid) clearErrors('email');
    else setError('email', { message: 'Error: invalid email address' });
  };

  useEffect(() => {
    setError('firstName', { message: 'Error: must provide a first name' });
    setError('lastName', { message: 'Error: must provide a last name' });
    setError('subject', { message: 'Error: must provide a subject' });
    setError('message', { message: 'Error: must provide a message' });

    setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      {!render && (
        <SkeletonForm />
      )}

      {render && (
        <div>
          <div className='grid grid-cols-2 gap-x-4 gap-y-4 mb-4'>
            <div className='col-span-1'>
              <Input
                label='First Name'
                placeholder='Ryan'
                required
                {...register('firstName', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('firstName', { message: 'Error: must provide a first name' }) : clearErrors('firstName')
                })}
              />
            </div>

            <div className='col-span-1'>
              <Input
                label='Last Name'
                placeholder='Smith'
                required
                {...register('lastName', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('lastName', { message: 'Error: must provide a last name' }) : clearErrors('lastName')
                })}
              />
            </div>

            <div className='col-span-2 sm:col-span-1'>
              <Input
                label='Email Address'
                placeholder='ryan@ryan.com'
                type='text'
                required
                {...register('email', {
                  onBlur: (event) => checkEmail(event.target.value)
                })}
              />
              {errors.email && (
                <Text className='mt-2 text-red-500' size='xs'>
                  {errors.email.message as ReactNode}
                </Text>
              )}
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
                {...register('subject', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('subject', { message: 'Error: must provide a subject' }) : clearErrors('subject')
                })}
              />
            </div>

            <div className='col-span-2'>
              <Textarea
                id='message'
                label='Message'
                placeholder='Talk about BIG and IMPORTANT Ryan topics here'
                required
                {...register('message', {
                  onBlur: (event) => event.target.value === '' ?
                    setError('message', { message: 'Error: must provide a message' }) : clearErrors('message')
                })}
              />
            </div>
          </div>

          <Button
            className='float-right'
            leftIcon={<Send />}
            onClick={handleSubmit((data) => sendEmail(data as Form))}
            disabled={Object.keys(errors).length !== 0}
          >
            Send
          </Button>
        </div>
      )}

      <div className='flex w-full items-center justify-center'>
        <Toast title='Email Sent!'>
          Expect an email back from theryanmeetup@gmail.com soon!
        </Toast>
      </div>
    </form>
  );
};

export { ContactForm };
