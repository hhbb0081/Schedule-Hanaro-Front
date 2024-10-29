import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';
import { ReactComponent as MapImg } from '@/assets/images/map.svg';
import MyCard from './MyCard';
import RecommendCard from './recommendCard';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();

  return (
    <div className='flex h-full w-full flex-col justify-end bg-[#DCEFEA]'>
      <div className='relative mx-auto h-[20%] w-[90%]'>
        <div className='z-10 flex flex-col items-start pt-[4rem]'>
          <div className='text-[2rem] font-bold'>반갑습니다</div>
          <div className='z-10 flex items-end'>
            <div className='text-[2.5rem] font-bold'>예나</div>
            <div className='pb-[0.2rem] text-[2rem] font-bold'>님!</div>
          </div>
        </div>
        <HanaAvengers className='absolute bottom-[-2.5rem] right-0 z-0 w-[75%]' />
      </div>
      <div className='flex h-[80%] flex-col rounded-t-[0.625rem] bg-white pb-[8rem] pt-[1.25rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)]'>
        <div className='mx-auto flex h-full w-[90%] flex-col justify-around gap-[2rem]'>
          <div className='flex w-full flex-col items-start gap-[1rem]'>
            <div className='text-2xl font-bold'>상담 예약</div>
            <div className='flex w-full justify-between gap-4'>
              <MyCard
                title='전화상담'
                content='상담사를 통한 전화 상담 서비스'
                onClick={() => navigate('/register/call')}
              />
              <MyCard
                title='1:1 상담'
                content='1:1 게시판을 통한 상담 서비스'
                onClick={() => navigate('/register/inquiry')}
              />
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <div className='text-2xl font-bold'>가까운 영업점 찾기</div>
            <div
              className='w-full cursor-pointer'
              onClick={() => navigate('/map')}
            >
              <MapImg className='w-[100%] rounded-[0.625rem] border-2 shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)]'></MapImg>
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <div className='text-2xl font-bold'>예나님을 위한 맞춤형 QnA</div>
            <div
              className='w-full cursor-pointer'
              onClick={() => navigate('/map')}
            >
              <RecommendCard title='Q' content='대학생을 위한 통장이 있나요?' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
