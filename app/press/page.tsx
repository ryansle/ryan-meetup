'use client';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Article } from '@/components/press';

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

      {!isLoading && articles && (
        <>
          {articles?.map((article, index) => (
            <div key={index}>
              <Article article={article as RyanArticle} />
            </div>
          ))}
        </>
      )}
    </Layout>
  );
};

export default PressPage;