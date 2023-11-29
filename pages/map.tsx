// Components
import { Layout } from '@/components/navigation';
import { Mapbox } from '@/components/map';
import { Heading, Text } from '@/components/global';

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
      <section className='text-center py-8 border-t-2 border-gray-700 px-4 lg:px-32 xl:px-72 3xl:px-[400px] 4xl:px-[650px]'>
        <Heading className='mb-4'>
          Ryan Meetup Worldwide
        </Heading>
        <Text>
          There are currently <span className='font-semibold text-blue-500'>{locations?.length} cities</span> represented on the Ryan Meetup Map, in <span className='font-semibold text-blue-500'>{uniqueCountries?.size - 8} different countries</span> around the world.
        </Text>
        <Text>
          That brings us one step closer to hosting RyanCon, soon-to-be the largest same name gathering in the world.
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
