import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';
import { ReactComponent as MdMapImg } from '@/assets/images/md-map.svg';
import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard';
import RecommendCard from './RecommendCard';

export function MainPage() {
  const navigate = useNavigate();

  return (
    <div className='h-screen w-full bg-[#DCEFEA]'>
      <div className='relative mx-auto h-[20%] w-[90%]'>
        <div className='absolute bottom-[2.5rem] z-10 flex flex-col items-start md:bottom-[1rem]'>
          <div className='text-[1.75rem] font-bold md:text-[1.65rem]'>
            반갑습니다
          </div>
          <div className='z-10 flex items-end'>
            <div className='text-[2rem] font-bold md:text-[1.85rem]'>예나</div>
            <div className='pb-[0.2rem] text-[1.75rem] font-bold md:text-[1.65rem]'>
              님!
            </div>
          </div>
        </div>
        <HanaAvengers className='absolute bottom-[-2.5rem] right-0 z-0 w-[75%] md:bottom-[-1.75rem] md:w-[50%]' />
      </div>
      <div className='flex h-[80%] flex-col rounded-t-[0.625rem] bg-white pb-[8rem] pt-[1.25rem] shadow-[4px_4px_20px_0px_rgba(0,0,0,0.20)] md:pt-[1rem]'>
        <div className='mx-auto flex h-full w-[90%] flex-col justify-start gap-[2rem] md:gap-[1.25rem]'>
          <div className='flex w-full flex-col items-start gap-[1rem] md:gap-[0.5rem]'>
            <div className='text-lg font-bold md:text-sm'>상담 예약</div>
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

          <div className='flex flex-col items-start gap-4 md:gap-[0.5rem]'>
            <div className='text-lg font-bold md:text-sm'>
              가까운 영업점 찾기
            </div>
            <div
              className='w-full cursor-pointer'
              onClick={() => navigate('/map')}
            >
              <MdMapImg className='rounded-lg' />
            </div>
          </div>

          <div className='flex flex-col items-start gap-1 md:gap-[0.5rem]'>
            <div className='text-lg font-bold md:text-sm'>
              예나님을 위한 맞춤형 QnA
            </div>
            <div
              className='xs:h-[6rem] w-full cursor-pointer overflow-y-auto sm:h-[3rem]'
              onClick={() => navigate('/map')}
            >
              <RecommendCard title='Q' content='대학생을 위한 통장이 있나요?' />
              <RecommendCard title='Q' content='대학생을 위한 통장이 있나요?' />
              <RecommendCard title='Q' content='대학생을 위한 통장이 있나요?' />
              <RecommendCard title='Q' content='대학생을 위한 통장이 있나요?' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
