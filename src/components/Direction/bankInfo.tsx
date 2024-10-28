import { ReactComponent as Close } from '@/assets/icons/close.svg';
import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function BankInfo() {
  const [branchId, setBranchId] = useAtom(branchIdAtom);
  const bankIdx = BRANCH_MOCK.findIndex((branch) => branch.id === branchId);

  const initBranchId = () => setBranchId(null);
  return (
    <>
      <div className='flex items-center justify-between text-2xl font-extrabold'>
        <span className='overflow-hidden'>
          {bankIdx === -1 ? '' : BRANCH_MOCK[bankIdx].name}
        </span>
        <Close
          width={18}
          height={18}
          className='ml-4 cursor-auto'
          onClick={initBranchId}
        />
      </div>
      <div className='flex gap-5'>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>대기인원</div>
          <div className='text-md font-bold'>{`${bankIdx === -1 ? 0 : BRANCH_STATE_MOCK[bankIdx].waiting_number}명`}</div>
        </div>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>예상대기시간</div>
          <div className='text-md font-bold'>{`${bankIdx === -1 ? 0 : BRANCH_STATE_MOCK[bankIdx].waiting_time}분`}</div>
        </div>
      </div>
    </>
  );
}
