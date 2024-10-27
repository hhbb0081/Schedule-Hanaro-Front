import { totalDistanceAtom } from '@/stores';
import { useAtomValue } from 'jotai';

const KILLOMETER = 1000;

export default function TotalDistance() {
  const totalDistance = useAtomValue(totalDistanceAtom);

  return (
    <div className='flex items-end gap-3'>
      <div>거리</div>
      <div className='flex items-end'>
        {totalDistance < KILLOMETER ? (
          <>
            <div className='text-3xl font-bold'>{totalDistance}</div>
            <div>m</div>
          </>
        ) : (
          <>
            <div className='text-2xl font-bold'>{totalDistance / 1000}</div>
            <div>km</div>
          </>
        )}
      </div>
    </div>
  );
}
