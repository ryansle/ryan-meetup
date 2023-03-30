'use client';

// Components
import NextLink from 'next/link';
import { Text } from '@/components/global';

// Types
import type { Article } from '@/lib/types';

type ArticleProps = {
  article: Article;
}

type ImageProps = {
  src: string;
  title: string;
}

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
    <NextLink href={href} target='_blank'>
      <div className='mb-8'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <Text size='md'>
          Featured in the{' '}
          <span className={highlight}>{outlet}</span>
          {' '}by{' '}
          <span className={highlight}>{author}</span>
          {' '}•{' '} {new Date(publishDate).toLocaleDateString()}
        </Text>
      </div>
    </NextLink>
  );
};

export { Article };
