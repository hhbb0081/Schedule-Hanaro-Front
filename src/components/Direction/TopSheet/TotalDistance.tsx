import { useMap } from '@/hooks/map-context';

const KILLOMETER = 1000;

export default function TotalDistance() {
  const { routesType, routesPedestrainResponse, routesAutomobileResponse } =
    useMap();

  const { totalDistance } = (routesType === 'automobile'
    ? routesAutomobileResponse
    : routesPedestrainResponse) || { totalDistance: 0 };

  return (
    <div className='flex items-end gap-3'>
      <div>거리</div>
      <div className='flex items-end'>
        {totalDistance < KILLOMETER ? (
          <div className='flex items-end gap-[0.1rem]'>
            <div className='text-3xl font-bold'>{totalDistance}</div>
            <div>m</div>
          </div>
        ) : (
          <div className='flex items-end gap-[0.1rem]'>
            <div className='text-2xl font-bold'>{totalDistance / 1000}</div>
            <div>km</div>
          </div>
        )}
      </div>
    </div>
  );
}
