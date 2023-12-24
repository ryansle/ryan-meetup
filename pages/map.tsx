// Components
import { Layout } from '@/components/navigation';
import { Mapbox } from '@/components/map';
import { Heading, Text } from '@/components/global';
import NextLink from 'next/link';

// Types
import type { NextPage } from 'next';
import type { Location } from '@/lib/types';

// Utilities
import { useQuery } from 'react-query';
import { fetchLocations } from '@/data/fetch';

type MapPageProps = {
  locations: Location[];
};

const MapPage: NextPage<MapPageProps> = (props: MapPageProps) => {
  // @ts-ignore
  const { data: locations, isLoading } = useQuery('events', fetchLocations, { initialData: props.locations });

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const uniqueCountries = new Set(['Canada', 'United States']);

  locations?.forEach((location) => {
    // @ts-ignore
    const commaIndex = location.locationName.indexOf(', ');
    // @ts-ignore
    const stateOrCountry: string = location.locationName.substring(commaIndex + 1);
    if (stateOrCountry.length !== 2 && stateOrCountry.length !== 3) {
      uniqueCountries.add(stateOrCountry);
    }
  });

  return (
    <Layout fullscreen>
      {!isLoading && (
        <Mapbox
          token={token as string}
          locations={locations as unknown as Location[]}
        />
      )}
      <section className='text-center py-4 border-t-2 border-gray-700 px-4 md:py-8 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
        <Heading className='mb-4'>
          Ryan Meetup Worldwide
        </Heading>
        <Text>
          Our growing network of Ryans currently spans across <span className='font-semibold text-blue-500'>{uniqueCountries?.size - 7} countries</span> and <span className='font-semibold text-blue-500'>{locations?.length} cities</span> worldwide.
          <span className='inline lg:hidden'>{' '}Help us expand as we gear up for RyanCon, the soon-to-be largest same name gathering in history.</span>
        </Text>
        <Text className='hidden lg:block'>
          Help us expand as we gear up for RyanCon, the soon-to-be largest same name gathering in history.
        </Text>

        <Heading className='mt-8 mb-4' size='md'>
          Don&apos;t see your city?
        </Heading>
        <Text>
          <NextLink href='/contact' className='font-semibold underline underline-offset-2 text-blue-500 hover:cursor-pointer'>Contact Ryan</NextLink> to have your city added to the map.
        </Text>
      </section>
    </Layout >
  );
};

export async function getServerSideProps() {
  const events = await fetchLocations();

  return {
    props: {
      events,
    }
  };
}

export default MapPage;
