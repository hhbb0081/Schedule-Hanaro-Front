import { useNavigate, useParams } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { ReactComponent as Addrss } from '@/assets/icons/branch/address.svg';
import { ReactComponent as Hours } from '@/assets/icons/branch/business_hours.svg';
import { ReactComponent as Tel } from '@/assets/icons/branch/tel.svg';
import { ReactComponent as Time } from '@/assets/icons/branch/walktime.svg';
import { ReactComponent as WaitPeople } from '@/assets/icons/branch/waitpeople.svg';

// import branch from '@/assets/images/branch.png';

import { Button } from '@/components/ui/button';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { DirectionButton } from '@/components/ui/branch/direction';
import { CloseButton } from '@/components/ui/close';
import Nav from '@/components/Nav/Nav';

export function BranchDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    return;
  }
  const Branch = BRANCH_MOCK.find((br) => br.id === id);
  const moveToReservation = () => {
    navigate('/reservation/visit/1');
  };
  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-lg bg-white md:max-w-lg'>
      <header className='flex h-14 items-center justify-between border'>
        <ArrowLeft width={21} height={21} className='ml-4' />
        <div className='text-xl'>{Branch?.name}</div>
        <CloseButton />
      </header>
      <main>
        {/* <img src={branch} alt='bank image' className='w-full' /> */}
        <div className='border-b p-8'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>기본정보</h2>
            <DirectionButton />
          </div>
          <ul className='list-none'>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Addrss width={20} height={23} className='relative' />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {Branch?.address}
              </span>
            </li>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Hours width={20} height={20} />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {Branch?.business_hours}
              </span>
            </li>
            <li className='mt-4 flex items-center justify-start gap-2'>
              <Tel width={16} height={20} />
              <span className="font-['Inter'] text-base font-semibold text-[#464646]">
                {Branch?.tel}
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
              10명
            </span>
            <div className='flex items-center gap-2'>
              <Time width={24} height={24} />
              <span className="font-['Inter'] text-base font-medium text-[#666666]">
                예상 대기 시간
              </span>
            </div>
            <span className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              20분
            </span>
          </div>
        </div>
        <div className='mt-16 flex items-center justify-center p-4'>
          <Button onClick={moveToReservation}>예약하기</Button>
        </div>
      </main>
      <footer>
        <Nav />
      </footer>
    </div>
  );
}
