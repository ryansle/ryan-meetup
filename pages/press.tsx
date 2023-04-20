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

type PressPageProps = {
  articles: RyanArticle[];
};

const PressPage: NextPage<PressPageProps> = (props: PressPageProps) => {
  // @ts-ignore
  const { data: articles, isLoading } = useQuery('articles', fetchArticles, { initialData: props.articles });

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
              article={article as unknown as RyanArticle}
            />
          ))}
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps() {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
    }
  };
}

export default PressPage;
