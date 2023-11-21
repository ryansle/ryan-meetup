import { useState } from 'react';

// Components
import Map, { Marker, Popup } from 'react-map-gl';
import NextImage from 'next/image';
import { Heading, Text } from '@/components/global';

// Types
import type { Location } from '@/lib/types';

// Utilities
import 'mapbox-gl/dist/mapbox-gl.css';
import { convertImageUrl } from '@/utils/convert';

type MapboxProps = {
  token: string;
  locations: Location[];
}

const Mapbox = (props: MapboxProps) => {
  const { token, locations } = props;

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  console.log(selectedLocation);

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
            key={location.locationName}
            latitude={location.coordinates.lat}
            longitude={location.coordinates.lon}
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedLocation(location);
            }}
          >
            <NextImage
              src='/icons/meetup-icon.webp'
              alt='Meetup'
              width={30}
              height={30}
            />
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            latitude={selectedLocation.coordinates.lat}
            longitude={selectedLocation.coordinates.lon}
            onClose={() => setSelectedLocation(null)}
          >
            <div className='text-black'>
              <NextImage
                src={convertImageUrl(selectedLocation.image)}
                alt={selectedLocation.eventName}
                width={200}
                height={200}
              />

              <Heading className='mt-2' size='xs'>
                {selectedLocation.eventName}
              </Heading>
              <Text size='xs' color='primary' className='-mt-1'>
                {new Date(selectedLocation.eventDate).toLocaleDateString()} • {selectedLocation.city}
              </Text>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export { Mapbox };