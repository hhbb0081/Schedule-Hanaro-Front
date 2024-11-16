import { useMap } from '@/hooks/map-context';
import { useEffect, useState } from 'react';

export default function DepartureArrivalTime() {
  const { routesPedstrainResponse } = useMap();
  const departureTime = new Date();
  const [arrivalTime, setArrivalTime] = useState<Date>(new Date());

  useEffect(() => {
    if (!routesPedstrainResponse) return;

    console.log(
      '🚀 ~ useEffect ~ routesPedstrainResponse:',
      routesPedstrainResponse.totalDistance
    );
    console.log(
      '🚀 ~ useEffect ~ routesPedstrainResponse:',
      routesPedstrainResponse.totalTime
    );

    const { totalTime } = routesPedstrainResponse;
    const tmpTime = new Date(departureTime);
    tmpTime.setSeconds(
      departureTime.getSeconds() + +(totalTime / 60).toFixed(0) * 60
    );
    setArrivalTime(tmpTime);
    console.log('🚀 ~ TopSheet ~ departureTime:', departureTime);
    console.log('🚀 ~ TopSheet ~ arrivalTime:', arrivalTime);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routesPedstrainResponse]);

  return (
    <div className='flex flex-col justify-between font-bold'>
      <div>
        {departureTime
          ? `${departureTime.getHours().toString().padStart(2, '0')}:
                  ${departureTime.getMinutes().toString().padStart(2, '0')}`
          : `00:00`}
      </div>
      <div>
        {arrivalTime
          ? `${arrivalTime.getHours().toString().padStart(2, '0')}:
                  ${arrivalTime.getMinutes().toString().padStart(2, '0')}`
          : `00:00`}
      </div>
    </div>
  );
}
