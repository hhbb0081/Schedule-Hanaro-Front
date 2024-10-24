import { Separator } from '@/components/ui/separator';
import { totalDistanceAtom, totalTimeAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function TotalTimeDistance() {
  const [totalTime] = useAtom(totalTimeAtom);
  const [totalDistance] = useAtom(totalDistanceAtom);
  return (
    <div className='mx-10 flex items-center justify-between'>
      <div className='flex items-end gap-3'>
        <div>소요시간</div>
        <div className='flex items-end'>
          <div className='text-3xl font-bold'>
            {(totalTime / 60).toFixed(0)}
          </div>
          <div>분</div>
        </div>
      </div>
      <Separator orientation='vertical' />
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
    </div>
  );
}
