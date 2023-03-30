'use client';

// Components
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Text } from '@/components/global';

// Types
import type { Article } from '@/lib/types';

type ArticleProps = {
  article: Article;
}

type ArticleImageProps = {
  imageSrc: string;
  title: string;
}

const ArticleImage = (props: ArticleImageProps) => {
  const { imageSrc, title } = props;

  return (
    <div className='w-full max-h-[200px] aspect-w-2 aspect-h-1'>
      <NextImage
        className='rounded-lg'
        src={imageSrc}
        fill
        alt={title}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

const Article = (props: ArticleProps) => {
  const {
    title,
    author,
    outlet,
    href,
    publishDate,
    thumbnail
  } = props.article;

  const highlight = 'font-semibold text-blue-500';

  return (
    <NextLink
      href={href}
      target='_blank'
    >
      <div className='mb-2 hover:scale-102 transition ease-in duration-300'>
        <div className='grid grid-cols-3 flex space-x-3'>
          <div className='col-span-3 sm:col-span-1'>
            <ArticleImage
              imageSrc={`https://${thumbnail?.fields.file.url.replace('//', '')}`}
              title={title}
            />
          </div>
          <div className='col-span-3 mt-2 sm:mt-0 sm:col-span-2 space-y-1'>
            <Text size='sm'>
              {new Date(publishDate).toLocaleDateString()}
            </Text>
            <h3 className='font-bold text-3xl mb-2'>{title}</h3>
            <Text size='sm'>
              by <span className={highlight}>{author}</span> in the <span className={highlight}>{outlet}</span>
            </Text>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Article };
