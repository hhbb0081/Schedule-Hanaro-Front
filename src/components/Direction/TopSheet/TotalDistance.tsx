import { totalDistanceAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function TotalDistance() {
  const [totalDistance] = useAtom(totalDistanceAtom);

  return (
    <div className='flex items-end gap-3'>
      <div>거리</div>
      <div className='flex items-end'>
        {totalDistance < 1000 ? (
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
