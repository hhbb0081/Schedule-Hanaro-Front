import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom, currentAddressAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function DepartureArrivalAddress() {
  const [currentAddress] = useAtom(currentAddressAtom);
  const [branchId] = useAtom(branchIdAtom);
  const branchIdx = BRANCH_MOCK.findIndex((branch) => branch.id === branchId);

  return (
    <div className='flex flex-col justify-between gap-1 text-left'>
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>출발지</div>
        <div className='font-bold'>{currentAddress || ''}</div>
      </div>

      <Separator />
      <div className='flex flex-col'>
        <div className='text-xs text-gray-400'>도착지</div>
        <div className='font-bold'>
          {branchIdx === -1 ? '' : BRANCH_MOCK[branchIdx].name}
        </div>
      </div>
    </div>
  );
}
