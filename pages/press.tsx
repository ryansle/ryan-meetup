// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Article, SkeletonArticle } from '@/components/press';
import Head from 'next/head';

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
      <Head>
        <title>Ryan Meetup - In the News</title>
        <meta
          name='description'
          content='Read all about the Ryan Meetup in the news.'
        />
        <meta property='og:image' content='/nametags.jpeg' />
        <meta
          name='keywords'
          content='ryans only, ryans only at the ryan meetup, and definitely no bryans, nyc irish bar plays host to viral ryan meetup, ryan meetup in the news, ryan meetup news, ryan meetup articles, ryan meetup press, first rule of ryan club, no bryans, no bryans allowed, ryan maguire, hosts bash for people named ryan, to get into this party, need the right name, its ryan, alyson krueger, brian abrams, will pavia, kerry oshea, ryan wilde, ryan andrew wilde, the takeaway, the times, irish central, the times, downtown new york allianve, new york times'
        />
      </Head>

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
