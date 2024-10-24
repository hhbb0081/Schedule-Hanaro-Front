import { Button } from '@/components/ui/button';
import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { bankIdAtom } from '@/stores';
import { useAtom } from 'jotai';

export default function BottomSheet() {
  const [bankId] = useAtom(bankIdAtom);
  const bankIdx = BRANCH_MOCK.findIndex((bank) => bank.id === bankId);

  const reserved = 1;
  return (
    <div className='fixed bottom-10 z-10 h-[12rem] w-[26rem] rounded-md bg-white p-8'>
      <div className='flex h-full flex-col justify-between'>
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
        <div className='flex gap-3'>
          {reserved ? (
            <>
              <Button className='w-1/4 font-bold' variant='outline'>
                예약 취소
              </Button>
              <Button className='w-3/4 font-bold'>예약 상세보기</Button>
            </>
          ) : (
            <Button>예약하기</Button>
          )}
        </div>
      </div>
    </div>
  );
}
