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

  const renderIcon = (type: string) => {
    switch (type) {
      case 'Previous Event':
        return '/icons/meetup-icon.webp';
      case 'Future Event':
        return '/icons/meetup-icon.webp';
      case 'Ryan Hub':
        return '/icons/ryanicon.png';
    }
  };

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
              src={renderIcon(location.locationType) as string}
              alt={location.locationType}
              width={25}
              height={25}
              className={location.locationType === 'Ryan Hub' ? 'rounded-full border border-black' : ''}
            />
          </Marker>
        ))}

        {selectedLocation && (
          <Popup
            latitude={selectedLocation.coordinates.lat}
            longitude={selectedLocation.coordinates.lon}
            onClose={() => setSelectedLocation(null)}
            closeButton={false}
          >
            <div className='text-black'>
              {selectedLocation.image && (
                <NextImage
                  className='mb-2'
                  src={convertImageUrl(selectedLocation.image)}
                  alt={selectedLocation.eventName}
                  width={200}
                  height={200}
                />
              )}

              <Heading size='xs'>
                {selectedLocation.eventName ?? selectedLocation.city}
              </Heading>
              <Text size='xs' color='primary' className='-mt-1'>
                {selectedLocation.eventDate && (
                  <span>
                    {new Date(selectedLocation.eventDate).toLocaleDateString()} •
                  </span>
                )}{' '}
                {selectedLocation.eventName ? selectedLocation.city : ''}
              </Text>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export { Mapbox };