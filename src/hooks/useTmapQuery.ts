import { queryKeys } from '@/queries';
import { Coord } from '@/stores';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

const isEnabled = (coords: Coord[]) =>
  coords.some(({ latitude, longitude }) => !!latitude || !!longitude);

export function useReverseGeoLocation(coord: Coord) {
  return useQuery({
    ...queryKeys.tmap.getAddressFromCoord({
      latitude: coord.latitude,
      longitude: coord.longitude,
    }),

    placeholderData: keepPreviousData,
    enabled: isEnabled([coord]),
  });
}

export function useRoutesPedestrain(startCoord: Coord, endCoord: Coord) {
  return useQuery({
    ...queryKeys.tmap.getRoutesPedestrain({
      startLatitude: startCoord.latitude,
      startLongitude: startCoord.longitude,
      endLatitude: endCoord.latitude,
      endLongitude: endCoord.longitude,
      startName: '출발지',
      endName: '목적지',
    }),

    placeholderData: keepPreviousData,
    enabled: isEnabled([startCoord, endCoord]),
  });
}

export function useRoutesAutomobile(startCoord: Coord, endCoord: Coord) {
  return useQuery({
    ...queryKeys.tmap.getRoutesAutomobile({
      startLatitude: startCoord.latitude,
      startLongitude: startCoord.longitude,
      endLatitude: endCoord.latitude,
      endLongitude: endCoord.longitude,
    }),

    placeholderData: keepPreviousData,
    enabled: isEnabled([startCoord, endCoord]),
  });
}
