// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { ContactForm } from '@/components/contact';
import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout className='space-y-6'>
      <Head>
        <title>Ryan Meetup - Contact Us</title>
        <meta
          name='description'
          content='Get in contact with Ryan Meetup'
        />
        <meta
          name='keywords'
          content='contact ryan, contact ryan meetup, ryan meetup email address, official ryan business, big and important ryan topics, ryan'
        />
      </Head>

      <Heading>Contact the Ryans</Heading>
      <Text size='lg'>
        One of our Ryans will get back to you as soon as we can.
      </Text>
      <Text size='lg'>
        Our messages are open to all inquiries, whether you just wanna say hi, or are looking to collaborate with us. Get in contact, and let&apos;s talk about what&apos;s on your mind!
      </Text>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
