import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { bankIdAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function BankInfo() {
  const [bankId] = useAtom(bankIdAtom);
  const bankIdx = BRANCH_MOCK.findIndex((bank) => bank.id === bankId);
  return (
    <>
      <div className='flex text-2xl font-extrabold'>
        {bankIdx === -1 ? '' : BRANCH_MOCK[bankIdx].name}
      </div>
      <div className='flex gap-5'>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>대기인원</div>
          <div className='text-md font-bold'>{`${bankIdx === -1 ? 0 : BRANCH_STATE_MOCK[bankIdx].waitingNumber}명`}</div>
        </div>
        <div className='flex items-end gap-3'>
          <div className='text-sm'>예상대기시간</div>
          <div className='text-md font-bold'>{`${bankIdx === -1 ? 0 : BRANCH_STATE_MOCK[bankIdx].waitingTime}분`}</div>
        </div>
      </div>
    </>
  );
}
