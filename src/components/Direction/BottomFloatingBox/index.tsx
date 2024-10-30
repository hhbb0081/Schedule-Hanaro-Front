import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { cn } from '@/lib/utils';
import { branchIdAtom } from '@/stores';
import { useSetAtom } from 'jotai';
import BranchInfo from './BranchInfo';
import ReservationButton from './ReservationButton';

export type FloatingType = {
  type: 'dir' | 'map';
};

export default function BottomFloatingBox({ type }: FloatingType) {
  const setBranchId = useSetAtom(branchIdAtom);
  const initBranchId = () => setBranchId(null);

  return (
    <div
      className={cn(
        'fixed bottom-[7rem] z-10 h-fit w-[70%] max-w-[30rem] rounded-xl bg-white p-8 pt-5',
        type === 'map' && 'bottom-[4rem] pt-3'
      )}
    >
      <div className='flex h-full w-full flex-col justify-between'>
        {type === 'map' && (
          <span className='mb-2 flex justify-end'>
            <Close
              width={18}
              height={18}
              className='cursor-pointer'
              onClick={initBranchId}
            />
          </span>
        )}
        <BranchInfo type={type} />
        <ReservationButton />
      </div>
    </div>
  );
}
