// Components
import { Heading } from '@/components/global';
import NextImage from 'next/image';
import NextLink from 'next/link';

// Types
import type { MediaEvent } from '@/lib/types';

type MediaTileProps = {
  id: string;
  data: MediaEvent;
}

const MediaTile = (props: MediaTileProps) => {
  const { id } = props;
  const { title, bgImage } = props.data;

  const imgUrl = bgImage?.fields.file.url.replace('//', '');

  return (
    <NextLink href={`/gallery/${id}`}>
      <div className='border flex flex-col items-center justify-center border-gray-700 rounded-xl h-full transition ease-in duration-300 hover:scale-102'>
        <div className='relative w-full flex items-center justify-center rounded-xl h-80 overflow-hidden bg-center'>
          <div className='w-full h-full brightness-30'>
            <NextImage
              src={`https://${imgUrl}`}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='absolute w-full inset-x-0 text-white text-xs text-center leading-4 flex items-center justify-center flex-col'>
            <Heading>{title}</Heading>
            <Heading size='sm'>03/26</Heading>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { MediaTile };
