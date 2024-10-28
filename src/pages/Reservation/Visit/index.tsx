import Header from '@/components/Header/Header';
import { BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { ReservationPage } from '..';

export default function ReservationVisitPage() {
  const branchState = BRANCH_STATE_MOCK;
  if (!branchState) {
    return <ReservationPage />;
  }
  return (
    <div className='w-full'>
      <Header />
      <div className='mb-6 text-left text-2xl font-bold text-black'>
        전화 상담 내역
      </div>
      <hr />
      {branchState.map((branch) => (
        <div key={branch.id} className='mt-[1.4375rem] px-2'>
          <div className='flex justify-between'>
            <div className='text-2xl font-bold text-[#464646]'>
              {branch.name}
            </div>
            <div className='text-3xl font-bold text-[#008485]/80'>128</div>
          </div>
          <div className='mt-4 flex justify-between'>
            <div className='text-lg font-medium text-[#666666]'>
              현재 대기 인원
            </div>
            <div className='text-xl font-bold text-[#464646]'>
              {branch.waitingNumber}명
            </div>
          </div>
          <div className='mt-4 flex justify-between'>
            <div className='text-lg font-medium text-[#666666]'>
              예상 대기 시간
            </div>
            <div className='text-xl font-bold text-[#464646]'>
              {branch.waitingTime}분
            </div>
          </div>
          <hr className='mt-[1.4375rem]' />
        </div>
      ))}
    </div>
  );
}
