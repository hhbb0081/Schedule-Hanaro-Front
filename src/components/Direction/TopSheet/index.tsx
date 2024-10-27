import { X } from 'lucide-react';
import DirectionBar from './DirectionBar';
import DepartureArrivalAddress from './DepartureArrivalAddress';
import DepartureArrivalTime from './DepartureArrivalTime';
import TotalTime from './TotalTime';
import { Separator } from '@/components/ui/separator';
import TotalDistance from './TotalDistance';

export default function TopSheet() {
  return (
    <div className='fixed top-10 z-10 h-[13rem] w-[26rem] rounded-xl bg-white px-6 py-4'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex h-2/3 justify-between'>
          <div className='flex gap-3'>
            <DepartureArrivalTime />
            <DirectionBar />
            <DepartureArrivalAddress />
          </div>
          <X />
        </div>
        <div className='mx-10 flex items-center justify-between'>
          <TotalTime />
          <Separator orientation='vertical' />
          <TotalDistance />
        </div>
      </div>
    </div>
  );
}
