'use client';

import { useState } from 'react';

// Components
import { Layout } from '@/components/navigation';
import { Heading, Text } from '@/components/global';
import { Photo } from '@/components/media/Photo';
import PageNotFound from '@/components/404';
import NextLink from 'next/link';
import { BiZoomIn as ZoomIn, BiZoomOut as ZoomOut } from 'react-icons/bi';

// Types
import type { RyanPhoto } from '@/lib/types';
import type { ReactNode } from 'react';

// Utilities
import { useQuery } from 'react-query';
import { fetchSingleMediaEvent } from '@/data/fetch';

type GalleryPageProps = {
  params: {
    slug: string;
  }
}

type ZoomButtonProps = {
  children: ReactNode;
  onClick: () => void;
  rightIcon: ReactNode;
  disabled: boolean;
}

const ZoomButton = (props: ZoomButtonProps) => {
  const { children, onClick, rightIcon, disabled } = props;

  return (
    <button
      className='rounded-lg p-3 bg-black uppercase text-neutral-400 font-semibold border border-gray-700 transition duration-300 ease-in hover:text-white disabled:text-gray-700'
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center justify-center'>
        {children} <span className='ml-2'>{rightIcon}</span>
      </div>
    </button>
  );
};

// TODO: look into ssr approaches for fetching this data
const GalleryPage = ({ params }: GalleryPageProps) => {
  const { data, isLoading, isError } = useQuery('gallery', () => fetchSingleMediaEvent(params.slug));

  const [zoom, setZoom] = useState<number>(3);

  return (
    <Layout>
      {/* Render 404 contents if user inputs a junk slug */}
      {isError && (
        <PageNotFound>
          <Text className='text-center' size='lg'>
            Looks like there&apos;s no pictures to see here. Try heading <NextLink className='underline text-blue-500' href='/gallery'>back to the gallery page</NextLink> and choosing a different photo gallery.
          </Text>
        </PageNotFound>
      )}

      <div className='flex justify-between'>
        <>
          {isLoading && (
            <div className='animate-pulse bg-gray-700 rounded-3xl w-[344px] h-10 mb-10' />
          )}

          {!isLoading && !isError && (
            <div className='flex flex-col mb-4'>
              <Heading>
                {/* @ts-ignore */}
                {data?.title}
              </Heading>
              <Heading size='sm'>
                {/* @ts-ignore */}
                {new Date(data?.date).toLocaleDateString()}
              </Heading>
            </div>
          )}
        </>

        <div className='hidden md:block md:space-x-4'>
          {isLoading && (
            <div className='space-x-4 flex'>
              <div className='animate-pulse bg-gray-700 rounded-lg w-36 h-10 mb-10' />
              <div className='animate-pulse bg-gray-700 rounded-lg w-36 h-10 mb-10' />
            </div>
          )}

          {!isLoading && !isError && (
            <>
              <ZoomButton
                rightIcon={<ZoomOut />}
                onClick={() => setZoom(zoom + 1)}
                disabled={zoom >= 3}
              >
                Zoom Out
              </ZoomButton>
              <ZoomButton
                rightIcon={<ZoomIn />}
                onClick={() => setZoom(zoom - 1)}
                disabled={zoom <= 1}
              >
                Zoom In
              </ZoomButton>
            </>
          )}
        </div>
      </div>

      {!isLoading && (
        <Text className='mb-10'>
          {/* @ts-ignore */}
          {data?.description}
        </Text>
      )}

      <div className={`grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-${zoom} xl:grid-cols-${zoom}`}>
        <>
          {isLoading && (
            Array(6).fill('').map((_, index) => (
              <div
                key={index}
                className='animate-pulse bg-gray-700 rounded-3xl w-full h-full max-h-[450px] aspect-w-2 aspect-h-1'
              />
            ))
          )}

          {/* TODO: remove extra fragments and containers on all pages */}
          {!isLoading && data && (
            <>
              {/* @ts-ignore */}
              {data.photos.map((content: RyanPhoto, index: number) => (
                <div key={index}>
                  <Photo image={content as RyanPhoto} />
                </div>
              ))}
            </>
          )}
        </>
      </div>
    </Layout>
  );
};

export default GalleryPage;