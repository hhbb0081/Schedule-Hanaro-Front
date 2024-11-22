import InquiryCard from '@/components/Admin/Inquiry/InquiryCard';
import { ReactComponent as PhoneIcon } from '../../../assets/icons/phone.svg';
import { ReactComponent as PersonIcon } from '../../../assets/icons/Person.svg';

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
    <div className='mx-auto w-[90%] pt-[10rem]'>
      <div className='flex flex-row items-center justify-between rounded-[1.25rem] py-[2.9375rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <div className='ml-[4rem] h-[12rem] w-[12rem] overflow-hidden rounded-full border-2 border-gray-300'>
          <img
            src='/path/to/your/image.jpg'
            alt='Profile'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='mr-[4rem] w-[70%] space-y-[1.6875rem]'>
          <InquiryCard stats={phoneStats} icon={PhoneIcon} />
          <InquiryCard stats={oneToOneStats} icon={PersonIcon} />
        </div>
      </div>
    </div>
  );
}
