import { Direction } from '@/components/Direction';
import Nav from '@/components/Nav/Nav';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom, endAtom, startAtom } from '@/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function DirectionPage() {
  const [, setStart] = useAtom(startAtom);
  const [, setEnd] = useAtom(endAtom);
  const [, setBranchId] = useAtom(branchIdAtom);

  const [searchParams] = useSearchParams();

  const startLat = searchParams.get('startX') || '37.5631989425409';
  const startLon = searchParams.get('startY') || '126.98732327063084';

  const endLat = searchParams.get('endX') || BRANCH_MOCK[1].position_y;
  const endLon = searchParams.get('endY') || BRANCH_MOCK[1].position_x;

  useEffect(() => {
    setStart({ latitude: +startLat, longitude: +startLon });
    setEnd({ latitude: +endLat, longitude: +endLon });

    setBranchId(searchParams.get('branchId') || '232|0');
  }, [
    endLat,
    endLon,
    searchParams,
    setBranchId,
    setEnd,
    setStart,
    startLat,
    startLon,
  ]);

  return (
    <>
      <Direction />;
      <Nav />
    </>
  );
}
