import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { cn } from '@/lib/utils';
import BranchInfo from './BranchInfo';
import ReservationButton from './ReservationButton';
import { useMap } from '@/hooks/map-context';
import { Button } from '@/components/ui/button';

export type FloatingType = {
  type: 'dir' | 'map';
};

export default function BottomFloatingBox({
  type,
  branchId,
}: FloatingType & { branchId: string }) {
  const {
    setSelectedBranchId,
    setRouteTypeToAutomobile,
    setRouteTypeToPedestrain,
  } = useMap();

  const initBranchId = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedBranchId(null);
  };

  return (
    <div
      className={cn(
        'fixed bottom-[7rem] z-10 h-fit w-[70%] max-w-[30rem] cursor-pointer rounded-xl bg-white p-8 pt-5',
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
        <BranchInfo type={type} branchId={branchId} />
        <ReservationButton />
        <Button
          variant={'link'}
          className='w-auto'
          onClick={setRouteTypeToAutomobile}
        >
          자동차
        </Button>
        <Button
          variant={'link'}
          className='w-auto'
          onClick={setRouteTypeToPedestrain}
        >
          보행자
        </Button>
      </div>
    </div>
  );
}
