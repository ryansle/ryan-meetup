// Components
import NextImage from 'next/image';

// Types
import { RyanPhoto } from '@/lib/types';

type PhotoProps = {
  image: RyanPhoto;
}

const Photo = (props: PhotoProps) => {
  const { file, title } = props.image.fields;

  const imageUrl = file.url.replace('//', '');

  return (
    <div className='w-full max-h-[450px] aspect-w-3 aspect-h-2 overflow-hidden rounded-lg'>
      <NextImage
        src={`https://${imageUrl}`}
        fill
        alt={title}
        style={{ objectFit: 'cover' }}
        sizes='(max-width: 640px) 100vw,
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               (max-width: 1280px) 100vw,
               (max-width: 1536px) 100vw'
      />
    </div>
  );
};

export { Photo };