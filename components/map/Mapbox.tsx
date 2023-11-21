// Components
import Map, { Marker } from 'react-map-gl';
import { FaUsers as Ryans } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';

// Types
import type { Location } from '@/lib/types';

type MapboxProps = {
  token: string;
  locations: Location[];
}

const Mapbox = (props: MapboxProps) => {
  const { token, locations } = props;

  return (
    <div className='w-full h-[700px]'>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}
        mapStyle='mapbox://styles/mapbox/streets-v9'
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            latitude={location.location.lat}
            longitude={location.location.lon}
          >
            <Ryans className='w-10 h-10 fill-black' />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export { Mapbox };