import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import {
  arrivalTimeAtom,
  bankIdAtom,
  currentAddressAtom,
  departureTimeAtom,
  totalDistanceAtom,
  totalTimeAtom,
} from '@/stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { ReactComponent as GreenCircle } from '@/assets/icons/green-circle.svg';
import { ReactComponent as RegularBar } from '@/assets/icons/regular-bar.svg';
import { ReactComponent as Close } from '@/assets/icons/close.svg';

export default function TopSheet() {
  const [bankId] = useAtom(bankIdAtom);
  const [currentAddress] = useAtom(currentAddressAtom);
  const [departureTime, setDepartureTime] = useAtom(departureTimeAtom);
  const [arrivalTime, setArrivalTime] = useAtom(arrivalTimeAtom);
  const [totalTime] = useAtom(totalTimeAtom);
  const [totalDistance] = useAtom(totalDistanceAtom);
  const bankIdx = BRANCH_MOCK.findIndex((bank) => bank.id === bankId);

  useEffect(() => {
    setArrivalTime(new Date());

    if (!arrivalTime) return;

    const tmpDate = new Date(arrivalTime);
    tmpDate.setSeconds(tmpDate.getSeconds() + totalTime);
    console.log('🚀 ~ TopSheet ~ tmpDate:', tmpDate);
    console.log('🚀 ~ TopSheet ~ totalTime:', totalTime);
    setDepartureTime(tmpDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTime]);

  return (
    <div className='fixed top-10 z-10 h-[13rem] w-[26rem] rounded-xl bg-white px-6 py-4'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex h-2/3 justify-between'>
          <div className='flex gap-3'>
            <div className='flex flex-col justify-between font-bold'>
              <div>
                {arrivalTime
                  ? `${arrivalTime.getHours().toString().padStart(2, '0')}:
                  ${arrivalTime.getMinutes().toString().padStart(2, '0')}`
                  : `00:00`}
              </div>
              <div>
                {departureTime
                  ? `${departureTime.getHours().toString().padStart(2, '0')}:
                  ${departureTime.getMinutes().toString().padStart(2, '0')}`
                  : `00:00`}
              </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-1'>
              <GreenCircle></GreenCircle>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <RegularBar></RegularBar>
              <GreenCircle></GreenCircle>
            </div>
          </div>

          <div className='flex flex-col justify-between gap-1 text-left'>
            <div className='flex flex-col'>
              <div className='text-xs text-gray-400'>출발지</div>
              <div className='font-bold'>{currentAddress || ''}</div>
            </div>

            <Separator />
            <div className='flex flex-col'>
              <div className='text-xs text-gray-400'>도착지</div>
              <div className='font-bold'>
                {bankIdx === -1 ? '' : BRANCH_MOCK[bankIdx].name}
              </div>
            </div>
          </div>
          <Close></Close>
        </div>
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
                  <div className='text-2xl font-bold'>
                    {totalDistance / 1000}
                  </div>
                  <div>km</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
