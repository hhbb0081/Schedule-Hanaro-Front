import { ReactComponent as Close } from '@/assets/icons/close.svg';
import DirectionBar from './directionBar';
import DepArrTime from './depArrTIme';
import TotalTimeDistance from './totalTimeDistance';
import OrgDestAddr from './orgDestAddr';

export default function TopSheet() {
  return (
    <div className='fixed top-10 z-10 h-[13rem] w-[26rem] rounded-xl bg-white px-6 py-4'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex h-2/3 justify-between'>
          <div className='flex gap-3'>
            <DepArrTime />
            <DirectionBar />
            <OrgDestAddr />
          </div>
          <Close></Close>
        </div>
        <TotalTimeDistance />
      </div>
    </div>
  );
}
