import { useParams } from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '@/assets/icons/arrow_left.svg';
import { ReactComponent as Cross } from '@/assets/icons/cross.svg';
import { ReactComponent as Addrss } from '@/assets/icons/branch/address.svg';
import { ReactComponent as Hours } from '@/assets/icons/branch/business_hours.svg';
import { ReactComponent as Tel } from '@/assets/icons/branch/tel.svg';
import { ReactComponent as Time } from '@/assets/icons/branch/walktime.svg';
import { ReactComponent as WaitPeople } from '@/assets/icons/branch/waitpeople.svg';

// import branch from '@/assets/images/branch.png';

import { Button } from '@/components/ui/button';
import { MAP_MOCK } from '@/mock/map_mock';

export function BranchDetailPage() {
  const { id } = useParams();
  if (!id) {
    return;
  }
  const Branch = MAP_MOCK.find((br) => br.id === +id);
  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg md:max-w-lg'>
      <header className='flex h-14 items-center justify-between border'>
        <ArrowLeft width={21} height={21} className='ml-4' />
        <div className='text-xl'>{Branch?.name}</div>
        <Cross width={18} height={18} className='mr-4' />
      </header>
      <main>
        <div>{/* <img src={branch} alt='' /> */}</div>
        <div className='border-b p-4'>
          <div className='flex items-center justify-between'>
            <h3 className='font-bold'>기본정보</h3>
            <Button className="font-['Hana2.0 CM'] text-center text-base font-normal text-[#5b5b5b]">
              길찾기
            </Button>
          </div>
          <ul className='list-none'>
            <li className='mt-2 flex items-center justify-start gap-1'>
              <Addrss width={20} height={23} className='relative' />
              {Branch?.address}
            </li>
            <li className='mt-2 flex items-center justify-start gap-1'>
              <Hours width={20} height={20} />
              {Branch?.business_hours}
            </li>
            <li className='mt-2 flex items-center justify-start gap-1'>
              <Tel width={16} height={20} />
              {Branch?.tel}
            </li>
          </ul>
        </div>
        <div className='p-4'>
          <h3 className='font-bold'>대기 정보</h3>
          <div className='mt-2 grid grid-cols-2 gap-2 text-sm'>
            <div className='flex items-center'>
              <Time width={24} height={24} className='mr-2' />
              <div className="font-['Inter'] text-base font-medium text-[#666666]">
                이동 소요 시간
              </div>
            </div>
            <div className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              15분
            </div>
            <div className='flex items-center'>
              <WaitPeople width={24} height={24} className='mr-2' />
              <div className="font-['Inter'] text-base font-medium text-[#666666]">
                현재 대기 인원
              </div>
            </div>
            <div className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              10명
            </div>
            <div className='flex items-center'>
              <Time width={24} height={24} className='mr-2' />
              <div className="font-['Inter'] text-base font-medium text-[#666666]">
                예상 대기 시간
              </div>
            </div>
            <div className="text-right font-['Inter'] text-lg font-bold text-[#464646]">
              20분
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
          <Button>예약하기</Button>
        </div>
      </main>
      <footer>
        <nav className='mt-4 flex items-center justify-between border bg-gray-300 p-4'>
          <div className='h-8 w-8 bg-white'></div>
          <div className='h-8 w-8 bg-white'></div>
          <div className='h-8 w-8 bg-white'></div>
          <div className='h-8 w-8 bg-white'></div>
          <div className='h-8 w-8 bg-white'></div>
        </nav>
      </footer>
    </div>
  );
}
