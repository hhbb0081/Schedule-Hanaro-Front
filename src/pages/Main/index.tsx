import { ReactComponent as TrippleStar } from '@/assets/images/trippleStar.svg';
import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';
import MyCard from './MyCard';

export function MainPage() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='relative flex h-1/3 justify-between bg-[#DCEFEA] p-[2rem]'>
        <div className='z-10 flex flex-col'>
          <TrippleStar />
          <div className='text-[1.5rem] font-bold'>반갑습니다</div>
          <div className='flex items-end'>
            <div className='text-[2.5rem] font-bold'>예나</div>
            <div className='pb-[0.2rem] text-[1.5rem] font-bold'>님!</div>
          </div>
        </div>
        <div className='absolute bottom-[2.75rem] right-[2rem] z-0'>
          <HanaAvengers width='24rem' height='12rem' />
        </div>
      </div>
      <div className='mx-auto w-[90%]'>
        <div className='flex flex-col gap-10 pt-[2rem]'>
          <div className='flex flex-col gap-3'>
            <div className='flex text-2xl font-bold'>상담예약</div>
            <div className='flex justify-between gap-4'>
              <MyCard
                title='전화상담'
                content='상담사를 통한 전화 상담 서비스'
              />
              <MyCard
                title='1:1 상담'
                content='1:1 게시판을 통한 상담 서비스'
              />
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex text-2xl font-bold'>길찾기</div>
            <div className='flex w-full justify-between gap-4'>
              <MyCard
                title='방문상담'
                content='상담사를 통한 전화 상담 서비스'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
