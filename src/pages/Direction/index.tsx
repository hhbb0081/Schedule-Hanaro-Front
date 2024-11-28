import { Direction } from '@/components/Direction';
import Nav from '@/components/Nav/Nav';
import { MapProvider } from '@/hooks/map-context';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function DirectionPage() {
  const [searchParams] = useSearchParams();

  const startLat = searchParams.get('startLat') || '37.54463002278825';
  const startLon = searchParams.get('startLon') || '127.05656718408437';

  const endLat = searchParams.get('endLat') || BRANCH_MOCK[1].position_y;
  const endLon = searchParams.get('endLon') || BRANCH_MOCK[1].position_x;

  const branchId = searchParams.get('branchId') || BRANCH_MOCK[1].id;

  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <MapProvider mapRef={mapRef}>
      <Direction
        startLat={startLat}
        startLon={startLon}
        endLat={endLat}
        endLon={endLon}
        branchId={branchId}
      />
      <Nav />
    </MapProvider>
  );
}
