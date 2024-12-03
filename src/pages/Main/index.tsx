import { ReactComponent as StarGgonge } from '@/assets/icons/StarGgonge.svg';
import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';
import Map from '@/assets/images/map.png';
import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard';

export function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex h-screen flex-col justify-between overflow-y-auto bg-[#DCEFEA] text-text scrollbar-hide'>
        <div className='flex w-full flex-col'>
          <div className='relative mx-auto flex w-[90%] flex-col py-20 pt-10'>
            <div className='mx-auto flex w-full flex-col items-start'>
              <div className='absoulte text-[2.3rem] font-[1000]'>
                반갑습니다
              </div>
              <div className='text-[3rem] font-bold'>해빈님!</div>
              <HanaAvengers className='absolute bottom-[-3rem] right-0 z-10 w-[85%]' />
            </div>
          </div>
          <div className='flex h-screen w-full flex-col rounded-t-[1.2rem] bg-white'>
            <div className='mx-auto flex w-[90%] flex-col gap-[3rem] pb-6'>
              <div className='flex flex-col gap-[2rem]'>
                <div className='mt-[3rem] flex w-full flex-col justify-start gap-[1rem]'>
                  <div className='text-start text-[1.5rem] font-bold'>
                    별꽁이에게 질문하기
                  </div>
                  <div
                    className='relative flex h-[3.5rem] w-full cursor-pointer items-center gap-4 rounded-3xl border-[3px] border-main bg-white p-4 pr-12 shadow-[0_0_17px_0_rgba(0,132,133,0.25)] focus:outline-none'
                    onClick={() => console.log('Clicked!')}
                  >
                    <StarGgonge className='mb-1' />
                    <div className='text-[1.05rem] text-lightText'>
                      궁금한 내용을 입력하세요
                    </div>
                  </div>
                </div>

                <div className='flex w-full flex-col items-start gap-[1rem]'>
                  <div className='text-[1.5rem] font-bold'>상담 예약</div>
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
              </div>

              <div className='flex flex-col items-start gap-4 md:gap-[0.5rem]'>
                <div
                  className='w-full cursor-pointer'
                  onClick={() => navigate('/map')}
                >
                  <img src={Map} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white pb-[8rem]'></div>
      </div>
    </>
  );
}
