import { arrivalTimeAtom, departureTimeAtom, totalTimeAtom } from '@/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export default function DepartureArrivalTime() {
  const [departureTime, setDepartureTime] = useAtom(departureTimeAtom);
  const [arrivalTime, setArrivalTime] = useAtom(arrivalTimeAtom);
  const [totalTime] = useAtom(totalTimeAtom);

  useEffect(() => {
    setDepartureTime(new Date());

    if (!departureTime) return;

    const tmpDate = new Date(departureTime);
    tmpDate.setSeconds(
      tmpDate.getSeconds() + +(totalTime / 60).toFixed(0) * 60
    );
    console.log('🚀 ~ TopSheet ~ tmpDate:', tmpDate);
    console.log('🚀 ~ TopSheet ~ totalTime:', totalTime);
    setArrivalTime(tmpDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTime]);

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
