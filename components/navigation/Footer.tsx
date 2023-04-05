import { useState, useEffect } from 'react';

// Components
import { Heading, Text, Toast } from '@/components/global';
import NextLink from 'next/link';
import { FaInstagram as Instagram, FaMeetup as Meetup } from 'react-icons/fa';

// Types
import type { MailerParams } from '@/lib/types';

// Utilities
import { postEmail } from '@/data/post';
import { validateEmail } from '@/utils/validate';

const socials = [
  {
    href: 'https://www.instagram.com/ryanmeetup/',
    icon: <Instagram className='h-5 w-5' color='gray' />
  },
  {
    href: 'https://www.meetup.com/ryanmeetup/',
    icon: <Meetup className='h-5 w-5' color='gray' />,
  }
];

type SubscribeFormProps = {
  showAlert: () => void;
}

const SubscribeForm = (props: SubscribeFormProps) => {
  const { showAlert } = props;

  const [email, setEmail] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const checkEmail = (email: string) => {
    const valid = validateEmail(email);

    if (valid) setDisabled(false);
    else setDisabled(true);
  };

  const submit = () => {
    let date = new Date();
    date = new Date(date.getTime() - 3000000);
    // @ts-ignore
    const dateString = date.getFullYear().toString() + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString()) + '-' + (date.getDate().toString().length == 2 ? date.getDate().toString() : '0' + date.getDate().toString()) + ' ' + (date.getHours().toString().length == 2 ? date.getHours().toString() : '0' + date.getHours().toString()) + ':' + ((parseInt(date.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(date.getMinutes() / 5) * 5).toString() : '0' + (parseInt(date.getMinutes() / 5) * 5).toString()) + ':00';

    const params = {
      email,
      groups: [process.env.NEXT_PUBLIC_MAILER_GROUP_ID],
      status: 'active',
      subscribed_at: dateString,
    };

    postEmail(params as MailerParams);
    showAlert();
  };

  useEffect(() => {
    checkEmail(email);
  }, [email]);

  return (
    <div className='mt-[6px]'>
      <label
        htmlFor='search'
        className='text-gray-600 mb-10 tracking-wide font-medium'
      >
        Subscribe for the latest Ryan Meetup news
      </label>
      <div className='relative mb-4 md:mb-0'>
        <input
          type='email'
          id='subsribe'
          className='border bg-black border-gray-700 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full md:w-96 p-2.5 ring-inset placeholder-gray-700'
          placeholder='ryan@ryanmeetup.com'
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className='text-white absolute right-2.5 bottom-2 font-medium rounded-lg text-sm px-2 py-1 disabled:text-gray-600'
          disabled={disabled}
          onClick={submit}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const showAlert = () => {
    setOpenAlert(true);

    setTimeout(() => {
      setOpenAlert(false);
    }, 5000);
  };

  return (
    <footer className='border-t border-gray-700 px-4 h-20 mt-24 lg:px-48 2xl:px-96 3xl:px-[400px] 4xl:px-[650px]'>
      <div className='flex w-full items-center justify-center'>
        <Toast
          className='mt-10'
          open={openAlert}
          setOpen={setOpenAlert}
          title='Successfully subscribed!'
        >
          Thanks for subscribing! Expect to hear about BIG and IMPORTANT Ryan topics soon.
        </Toast>
      </div>

      <div className='w-full py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <NextLink href='/'>
              <Heading>RYAN MEETUP</Heading>
            </NextLink>

            <Text className='text-gray-600 mt-[2px]'>No Bryans Allowed!</Text>
            <SubscribeForm showAlert={showAlert} />
          </div>

          {/* Resources & Follow Us */}
          <div className='grid grid-cols-4 space-x-8'>
            <div className='col-span-1'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Follow us</h2>
              <ul className='text-gray-600 font-medium'>
                <li className='mb-2'>
                  <NextLink href='https://www.instagram.com/ryanmeetup/' className='hover:underline'>Instagram</NextLink>
                </li>
                <li>
                  <NextLink href='https://www.meetup.com/ryanmeetup/' className='hover:underline'>Meetup</NextLink>
                </li>
              </ul>
            </div>
            <div className='col-span-3'>
              <h2 className='mb-6 text-xs font-semibold text-gray-900 uppercase text-white sm:text-sm'>Built With</h2>
              <div className='grid grid-cols-2 space-x-4'>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://nextjs.org/' className='hover:underline'>Next.js 13</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://react.dev/' className='hover:underline'>React.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</NextLink>
                    </li>
                  </ul>
                </div>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://flowbite.com/' className='hover:underline'>Flowbite</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://headlessui.com/' className='hover:underline'>Headless UI</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://www.contentful.com/' className='hover:underline'>Contentful</NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-600 sm:text-center'>
            Website designed and developed by <NextLink href='https://ryanle.dev/' className='font-medium hover:underline'>Ryan Le</NextLink>. All Rights Reservedate.
          </span>

          {/* Socials */}
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
            {socials.map((channel, index) => (
              <NextLink key={index} href={channel.href}>
                {channel.icon}
              </NextLink>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export { Footer };