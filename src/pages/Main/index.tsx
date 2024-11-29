import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';
import Map from '@/assets/images/map.png';
import { useNavigate } from 'react-router-dom';
import MyCard from './MyCard';
import RecommendCard from './RecommendCard';
import { Badge } from '@/components/ui/badge';

export function MainPage() {
  const navigate = useNavigate();
  const tags: string[] = ['예금', '통장', '영업점', '대학생'];
  return (
    <>
      <div className='flex h-screen flex-col justify-between overflow-y-auto bg-[#DCEFEA] text-text scrollbar-hide'>
        <div className='flex w-full flex-col'>
          <div className='relative mx-auto flex w-[90%] flex-col py-20 pt-10'>
            <div className='mx-auto flex w-full flex-col items-start'>
              <div className='absoulte text-[2.3rem] font-[1000]'>
                반갑습니다
              </div>
              <div className='text-[3rem] font-bold'>예나님!</div>
              <HanaAvengers className='absolute bottom-[-3rem] right-0 z-10 w-[85%]' />
            </div>
          </div>
          <div className='flex h-screen w-full flex-col rounded-t-[1.2rem] bg-white'>
            <div className='mx-auto flex w-[90%] flex-col gap-[2rem] pb-6'>
              <div className='mt-10 flex w-full flex-col items-start gap-[1rem]'>
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

              <div className='flex flex-col items-start gap-4 md:gap-[0.5rem]'>
                <div
                  className='w-full cursor-pointer'
                  onClick={() => navigate('/map')}
                >
                  <img src={Map} />
                </div>
              </div>

              <div className='flex flex-col items-start gap-2'>
                <div className='text-[1.5rem] font-bold'>
                  예나님을 위한 맞춤형 QnA
                </div>
                <div className='text-[1.225rem] text-[#666666]'>
                  최근 상담 중 AI 생성 답변을 보여드립니다.
                </div>
                <div className='flex w-full justify-between'>
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant='lightSolid'
                      className='h-[2.25rem] w-[7rem] justify-center border-2 border-[#008485] text-center text-[1.25rem] font-[900] md:w-[8rem]'
                    >{`# ${tag}`}</Badge>
                  ))}
                </div>
                <RecommendCard
                  title='Q'
                  content='대학생을 위한 통장이 있나요?'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white pb-[8rem]'></div>
      </div>
    </>
  );
}
