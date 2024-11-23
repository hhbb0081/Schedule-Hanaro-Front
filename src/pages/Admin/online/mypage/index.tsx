import InquiryCard from '@/components/Admin/Inquiry/InquiryCard';
import { ReactComponent as PhoneIcon } from '../../../../assets/icons/phone.svg';
import { ReactComponent as PersonIcon } from '../../../../assets/icons/person.svg';

export function AdminMyPage() {
  const phoneStats = {
    inquiry: '전화문의',
    today: 10,
    transferred: 28,
    reserved: 88,
    total: 888,
  };

  const oneToOneStats = {
    inquiry: '1:1 문의',
    today: 10,
    transferred: 28,
    reserved: 88,
    total: 888,
  };
  return (
    <div className='relative mx-auto mt-[3rem] w-[85%] max-w-[1300px]'>
      <div className='mb-[2.125rem] flex items-center'>
        <div className='mr-[1.8125rem] whitespace-nowrap text-[1.25rem] font-bold'>
          사원 정보
        </div>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
      <div className='flex flex-row items-center justify-between rounded-[1.25rem] py-[2.9375rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='ml-[4rem] flex flex-col items-center'>
          <div className='h-[12rem] w-[12rem] overflow-hidden rounded-full border-2 border-gray-300'>
            <img
              src='https://lh3.googleusercontent.com/a/ACg8ocKJE3vvf0xaYhHm8iej79zN33l9tOK_bVge9rwwtBQiiUwBMK4=s576-c-no'
              alt='Profile'
              className='h-full w-full object-cover'
            />
          </div>
          <div className='mt-[2rem] text-[1.5625rem]'> 강능요 사원</div>
        </div>

        <div className='mr-[4rem] w-[65%] space-y-[1.6875rem]'>
          <InquiryCard stats={phoneStats} icon={PhoneIcon} />
          <InquiryCard stats={oneToOneStats} icon={PersonIcon} />
        </div>
      </div>
      <div className='absolute bottom-[-22rem] right-[0] text-[1.5625rem] font-extrabold'>
        로그아웃
      </div>
    </div>
  );
}
