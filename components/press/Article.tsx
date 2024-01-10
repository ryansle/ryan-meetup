// Components
import NextLink from 'next/link';
import NextImage from 'next/image';

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
    thumbnail,
    new: isNew,
  } = props.article;

  const highlight = 'font-semibold text-blue-500';

  return (
    <NextLink
      href={href}
      target='_blank'
    >
      <div className='mb-2 transition ease-in duration-300 hover:scale-102'>
        <div className='grid grid-cols-3 flex space-x-3'>
          <div className='col-span-3 sm:col-span-1'>
            <ArticleImage
              imageSrc={`https://${thumbnail?.fields.file.url.replace('//', '')}`}
              title={title}
            />
          </div>
          <div className='col-span-3 mt-2 sm:mt-0 sm:col-span-2'>
            <div className='flex space-x-3 items-center'>
              <p className='tracking-wide font-medium text-black dark:text-white'>
                {new Date(publishDate).toLocaleDateString()}
              </p>

              {isNew && <span className='text-green-800 text-sm font-medium px-2.5 rounded bg-green-900 text-white'>NEW</span>}
            </div>
            <h3 className='font-bold text-3xl mb-2 text-black dark:text-white xl:text-4xl 2xl:text-3xl md:mb-4'>{title}</h3>
            <p className='tracking-wide font-medium text-black dark:text-white xl:text-xl'>
              by <span className={highlight}>{author}</span> in {outlet.split(' ')[0].toLowerCase() ===
                'the' ? '' : 'the'} <span className={highlight}>{outlet}</span>
            </p>
          </div>
        </div>
      </div>
    </NextLink>
  );
};

export { Article };
