// import { useMap } from '@/hooks';
// import { useEffect } from 'react';
import { Direction } from '@/components/Direction';
import { MAP_MOCK } from '@/mock/map_mock';
import { useSearchParams } from 'react-router-dom';

export function DirectionPage() {
  const [searchParams] = useSearchParams();

  // const { setStartCoord, setEndCoord } = useMap();

  const startLat = searchParams.get('startX') || 37.5631989425409;
  const startLon = searchParams.get('startY') || 126.98732327063084;
  const start = { latitude: +startLat, longitude: +startLon };

  const endLat = searchParams.get('endX') || MAP_MOCK[1].position_y;
  const endLon = searchParams.get('endY') || MAP_MOCK[1].position_x;
  const end = { latitude: +endLat, longitude: +endLon };

  console.log('🚀 ~ DirectionPage ~ startLat:', startLat);
  console.log('🚀 ~ DirectionPage ~ startLon:', startLon);
  console.log('🚀 ~ DirectionPage ~ endLat:', endLat);
  console.log('🚀 ~ DirectionPage ~ endLon:', endLon);

  return <Direction start={start} end={end} />;
}
