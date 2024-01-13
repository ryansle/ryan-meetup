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
    <div className='w-full h-[600px] md:h-[700px]'>
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
        {locations?.map((location) => (
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
              width={20}
              height={20}
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

              <Heading size='xs' ignoreColorMode>
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

        <div className='absolute bottom-12 right-2 bg-white p-3 rounded-md shadow-md text-black font-semibold lg:bottom-8 lg:right-8'>
          <Heading size='xs' className='font-semibold mb-2' ignoreColorMode>
            Legend
          </Heading>
          <div className='flex items-start justify-between'>
            <NextImage
              src='/icons/meetup-icon.webp'
              width={20}
              height={20}
              alt='Ryans have met up in this city before'
            />
            <p>
              Ryan Meetup
            </p>
          </div>
          <div className='flex items-center w-32 justify-between mb-1'>
            <NextImage
              src='/icons/ryanicon.png'
              width={20}
              height={20}
              alt='Ryan lives here'
            />
            <p>
              Ryan lives here
            </p>
          </div>
        </div>
      </Map>
    </div>
  );
};

export { Mapbox };