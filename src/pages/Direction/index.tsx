import { Direction } from '@/components/Direction';
import Nav from '@/components/Nav/Nav';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom, endAtom, startAtom } from '@/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function DirectionPage() {
  const [start, setStart] = useAtom(startAtom);
  const [end, setEnd] = useAtom(endAtom);
  const [, setBranchId] = useAtom(branchIdAtom);

  const [searchParams] = useSearchParams();

  const startLat = searchParams.get('startLat') || '37.5631989425409';
  const startLon = searchParams.get('startLon') || '126.98732327063084';

  const endLat = searchParams.get('endLat') || BRANCH_MOCK[1].position_y;
  const endLon = searchParams.get('endLon') || BRANCH_MOCK[1].position_x;

  useEffect(() => {
    if (start) return;
    setStart({ latitude: +startLat, longitude: +startLon });
    setEnd({ latitude: +endLat, longitude: +endLon });

    setBranchId(searchParams.get('branchId') || '8124674');
  }, [
    start,
    end,
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
      <Direction />
      <Nav />
    </>
  );
}
