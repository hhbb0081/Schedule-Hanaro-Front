import { ReactComponent as TrippleStar } from '@/assets/images/trippleStar.svg';
import { ReactComponent as HanaAvengers } from '@/assets/images/hanaAvengers.svg';

export function MainPage() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex h-1/3 bg-[#DCEFEA] p-3'>
        <div className='flex'>
          <div className='flex flex-col'>
            <TrippleStar />
            <div className='text-[1.5rem] font-bold'>반갑습니다</div>
            <div className='flex items-end'>
              <div className='text-[2.5rem] font-bold'>예나</div>
              <div className='text-[1.5rem] font-bold'>님!</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <HanaAvengers />
          </div>
        </div>
      </div>
      <div className='flex'></div>
      <div className='flex'></div>
      <div className='flex'></div>
      <div className='flex'></div>
    </div>
  );
}
