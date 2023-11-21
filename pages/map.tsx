// Components
import { Layout } from '@/components/navigation';
import { Mapbox } from '@/components/map';

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

  console.log(locations);

  return (
    <Layout fullscreen>
      {/* <Heading className='mb-4'>
        Ryan Meetup Worldwide
      </Heading> */}
      {!isLoading && (
        <Mapbox
          token={token as string}
          locations={locations as unknown as Location[]}
        />
      )}
    </Layout>
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
