import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { useAtomValue } from 'jotai';

export default function BranchInfo() {
  const branchId = useAtomValue(branchIdAtom);
  const branchIdx = BRANCH_MOCK.findIndex((branch) => branch.id === branchId);
  return (
    <>
      <div className='flex text-2xl font-extrabold'>
        {branchIdx === -1 ? '' : BRANCH_MOCK[branchIdx].name}
      </div>
      <div className='flex gap-5'>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>대기인원</div>
          <div className='text-md font-bold'>{`${branchIdx === -1 ? 0 : BRANCH_STATE_MOCK[branchIdx].waitingNumber}명`}</div>
        </div>
        <div className='flex items-center'>
          <Separator orientation='vertical' className='h-[0.6875rem]' />
        </div>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>예상대기시간</div>
          <div className='text-md font-bold'>{`${branchIdx === -1 ? 0 : BRANCH_STATE_MOCK[branchIdx].waitingTime}분`}</div>
        </div>
      </div>
    </>
  );
}
