import { useMap } from '@/hooks/map-context';

export default function TotalTime() {
  const { routesPedstrainResponse } = useMap();

  const { totalTime } = routesPedstrainResponse || { totalTime: 0 };
  return (
    <div className='flex items-end gap-3'>
      <div>소요시간</div>
      <div className='flex items-end'>
        <div className='text-3xl font-bold'>{(totalTime / 60).toFixed(0)}</div>
        <div>분</div>
      </div>
    </div>
  );
}
