// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Article, SkeletonArticle } from '@/components/press';

// Types
import type { NextPage } from 'next';
import type { Article as RyanArticle } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchArticles } from '@/data/fetch';

const PressPage: NextPage = () => {
  const { data: articles, isLoading } = useQuery('articles', fetchArticles);

  return (
    <Layout className='space-y-6'>
      <Heading>Ryan in the Media</Heading>

      <Text size='lg'>
        Keep up to date with the latest Ryan Meetup news in the media!
      </Text>

      <hr />

      {isLoading && (
        <>
          {Array(3).fill('').map((_, index) => (
            <SkeletonArticle key={index} />
          ))}
        </>
      )}

      {!isLoading && articles && (
        <>
          {articles?.map((article, index) => (
            <Article
              key={index}
              // @ts-ignore
              article={article as RyanArticle}
            />
          ))}
        </>
      )}
    </Layout>
  );
};

export default PressPage;
