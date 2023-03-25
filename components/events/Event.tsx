// Components
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';

type EventProps = {
  title: string;
  // TODO: replace any type
  coverImage: any;
  description: string;
  href: string;
}

const Event = (props: EventProps) => {
  const { title, coverImage, description, href } = props;
  return (
    <div className='border border-gray-700 rounded-3xl'>
      <div className='w-full max-h-[450px] aspect-w-2 aspect-h-1'>
        <NextImage
          className='rounded-t-3xl border-b border-gray-700'
          src={`https://${coverImage.fields.file.url.replace('//', '')}`}
          fill={true}
          alt={coverImage.fields.title}
        />
      </div>
      <div className='p-2 pb-6'>
        <Heading size='sm'>{title}</Heading>
        <Text size='sm'>{description}</Text>
      </div>
    </div>
  );
};

export { Event };
