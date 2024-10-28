import { BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { ReservationPage } from '..';

export default function ReservationVisitPage() {
  const branchState = BRANCH_STATE_MOCK;
  if (!branchState) {
    return <ReservationPage />;
  }
  return (
    <div className='w-full'>
      <div className='mb-3 text-left text-2xl font-bold text-black'>
        방문 상담
      </div>
      <hr />
      {branchState.map((branch) => (
        <button key={branch.id} className='mt-[1.4375rem] w-full'>
          <div className='mx-2 flex justify-between'>
            <div className='text-2xl font-bold text-[#464646]'>
              {branch.name}
            </div>
            <div className='text-3xl font-bold text-[#008485]/80'>128</div>
          </div>
          <div className='mx-2 mt-4 flex justify-between'>
            <div className='text-lg font-medium text-[#666666]'>
              현재 대기 인원
            </div>
            <div className='text-xl font-bold text-[#464646]'>
              {branch.waitingNumber}명
            </div>
          </div>
          <div className='mx-2 mt-4 flex justify-between'>
            <div className='text-lg font-medium text-[#666666]'>
              예상 대기 시간
            </div>
            <div className='text-xl font-bold text-[#464646]'>
              {branch.waitingTime}분
            </div>
          </div>
          <hr className='mt-[1.4375rem]' />
        </button>
      ))}
    </div>
  );
}
