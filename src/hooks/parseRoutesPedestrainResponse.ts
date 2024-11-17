import { TMapLatLng, TmapRouteResponse } from '@/types';

const { Tmapv3 } = window;

export const parseRoutesResponse = (response: TmapRouteResponse) => {
  const path: TMapLatLng[] = [];
  const featureData = response?.features;
  featureData?.forEach(({ geometry }) => {
    if (geometry.type === 'LineString') {
      geometry.coordinates.forEach(([longitude, latitude]) =>
        path.push(new Tmapv3.LatLng(latitude, longitude))
      );
    }
  });
  const { totalDistance, totalTime } = featureData[0].properties;

  return {
    path,
    totalDistance,
    totalTime,
  };
};
