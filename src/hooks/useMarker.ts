import { Marker } from '@/components/Map/Marker';
import { TMap, TMapLatLng, TMapMarker } from '@/types';
import { useEffect } from 'react';

export default function useMarker(
  mapInstance: TMap | null,
  coord: TMapLatLng | null,
  marker: TMapMarker | null,
  setMarker: (marker: TMapMarker) => void,
  theme: 'current' | 'start' | 'end'
) {
  useEffect(() => {
    if (!coord) {
      return;
    }

    const makeMarker = (position: TMapLatLng) => {
      if (!mapInstance) {
        return;
      }

      marker?.setMap(null);

      setMarker(
        Marker({
          mapContent: mapInstance,
          position,
          theme,
        })
      );
    };

    makeMarker(coord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coord, mapInstance]);
}
