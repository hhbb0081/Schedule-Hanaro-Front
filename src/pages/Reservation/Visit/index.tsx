import { BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { ReservationPage } from '..';
import { useNavigate } from 'react-router-dom';

export function ReservationVisitPage() {
  const branchState = BRANCH_STATE_MOCK;
  const navigate = useNavigate();
  if (!branchState) {
    return <ReservationPage />;
  }
  const moveToDetail = (id: string) => {
    navigate(`/reservation/visit/${id}`);
  };
  return (
    <div className='w-full'>
      <div className='mb-3 text-left text-2xl font-bold text-black'>
        방문 상담
      </div>
      <hr />
      {branchState.map(({ id, name, waiting_number, waiting_time }) => (
        <div key={id}>
          <button
            onClick={() => moveToDetail(id)}
            className='mt-[1.4375rem] w-full px-2'
          >
            <div className='mx-2 flex justify-between'>
              <div className='text-2xl font-bold text-[#464646]'>{name}</div>
              <div className='text-3xl font-bold text-[#008485]/80'>128</div>
            </div>
            <div className='mx-2 mt-4 flex justify-between'>
              <div className='text-lg font-medium text-[#666666]'>
                현재 대기 인원
              </div>
              <div className='text-xl font-bold text-[#464646]'>
                {waiting_number}명
              </div>
            </div>
            <div className='mx-2 mt-4 flex justify-between'>
              <div className='text-lg font-medium text-[#666666]'>
                예상 대기 시간
              </div>
              <div className='text-xl font-bold text-[#464646]'>
                {waiting_time}분
              </div>
            </div>
          </button>
          <hr className='mt-[1.4375rem]' />
        </div>
      ))}
    </div>
  );
}
