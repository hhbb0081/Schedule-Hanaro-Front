import { useMap } from '@/hooks/map-context';

export default function TotalTime() {
  const { routesType, routesPedestrainResponse, routesAutomobileResponse } =
    useMap();

  const { totalTime } = (routesType === 'pedestrain'
    ? routesPedestrainResponse
    : routesAutomobileResponse) || { totalTime: 0 };
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
