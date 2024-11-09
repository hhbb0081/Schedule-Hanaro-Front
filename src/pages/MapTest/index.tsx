import { useMap } from '@/hooks/map-context';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { useEffect } from 'react';

export default function MapTestPage() {
  const { mapRef, setStartCoord, setEndCoord } = useMap();

  const startLat = '37.5631989425409';
  const startLon = '126.98732327063084';

  const endLat = BRANCH_MOCK[1].position_y;
  const endLon = BRANCH_MOCK[1].position_x;

  useEffect(() => {
    setStartCoord(+startLat, +startLon);
    setEndCoord(+endLat, +endLon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startLat, startLon, endLat, endLon]);

  return <div id='map' className='map' ref={mapRef}></div>;
}
