import { useParams } from 'react-router-dom';

import { ReactComponent as Addrss } from '@/assets/icons/branch/address.svg';
import { ReactComponent as Hours } from '@/assets/icons/branch/business_hours.svg';
import { ReactComponent as Tel } from '@/assets/icons/branch/tel.svg';
import { ReactComponent as WaitPeople } from '@/assets/icons/branch/waitpeople.svg';
import { ReactComponent as BranchImage } from '@/assets/icons/branch/branch_img.svg';
import { ReactComponent as Time } from '@/assets/icons/branch/walktime.svg';

// import branch from '@/assets/images/branch.png';

import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { DirectionButton } from '@/components/ui/direction';
import Nav from '@/components/Nav/Nav';
import ReservationButton from '@/components/Direction/BottomFloatingBox/ReservationButton';
import { BackButton } from '@/components/ui/back';

export function BranchDetailPage() {
  // const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    return;
  }
  const branch = BRANCH_MOCK.find((br) => br.id === id);
  // undefined에러 추후 처리
  if (!branch) {
    return;
  }
  const { name, address, business_hours, tel } = branch;
  const state = BRANCH_STATE_MOCK.find((br) => br.id === id);
  // 예약하고 번호표 상세로 넘어가는 함수인데 버튼을 컴포넌트화 해서 추후 수정
  // const moveToReservation = () => {
  //   navigate(`/reservation/visit/${id}`);
  // };
  return (
    <div className='flex flex-col'>
      <header className='flex h-14 items-center gap-8 border'>
        <BackButton />
        <div className='text-2xl font-bold'>{name}</div>
      </header>
      <div className='flex h-full flex-col justify-between'>
        <div>
          <div className='w-full'>
            <BranchImage />
          </div>
          <div className='border-b p-8'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-bold'>기본정보</h2>
              <DirectionButton />
            </div>
            <ul className='list-none'>
              <li className='mt-4 flex items-center justify-start gap-2'>
                <Addrss width={20} height={23} className='relative' />
                <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                  {address}
                </span>
              </li>
              <li className='mt-4 flex items-center justify-start gap-2'>
                <Hours width={20} height={20} />
                <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                  {business_hours}
                </span>
              </li>
              <li className='mt-4 flex items-center justify-start gap-2'>
                <Tel width={16} height={20} />
                <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                  {tel}
                </span>
              </li>
            </ul>
          </div>
          <div className='h-2 w-full bg-[#eeeeee]'></div>
          <div className='p-8'>
            <h3 className='text-left text-xl font-bold'>대기 정보</h3>
            <div className='mt-8 grid grid-cols-2 gap-2 text-sm'>
              <div className='flex items-center gap-2'>
                <Time width={24} height={24} />
                <span className="font-['Inter'] text-base font-medium text-[#666666]">
                  이동 소요 시간
                </span>
              </div>
              <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
                15분
              </span>
              <div className='flex items-center gap-2'>
                <WaitPeople width={24} height={24} />
                <span className="font-['Inter'] text-base font-medium text-[#666666]">
                  현재 대기 인원
                </span>
              </div>
              <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
                {state?.waiting_number}명
              </span>
              <div className='flex items-center gap-2'>
                <Time width={24} height={24} />
                <span className="font-['Inter'] text-base font-medium text-[#666666]">
                  예상 대기 시간
                </span>
              </div>
              <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
                {state?.waiting_time}분
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-between'></div>
        </div>
        <div className='px-8 py-4'>
          <ReservationButton />
        </div>
      </div>
      <Nav />
    </div>
  );
}
