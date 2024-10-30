import { useParams } from 'react-router-dom';
import {
  mockReservationInquiryAnswerDetails,
  mockReservationInquiryDetails,
} from '@/mock/mockReservationsInquiry';
import ReservationInquiryDetailHeader from '@/components/Header/ReservationInquiryDetailHeader';

export function InquiryDetailPage() {
  const { id } = useParams<{ id: string }>();

  const inquiry = mockReservationInquiryDetails.find((res) => res.id === id);
  const inquiry2 = mockReservationInquiryAnswerDetails.find(
    (res) => res.id === id
  );
  if (!inquiry) {
    return <div>문의 정보를 찾을 수 없습니다.</div>;
  }

  const { title, content, date, time } = inquiry;

  if (!inquiry2) {
    return (
      <>
        <ReservationInquiryDetailHeader />
        <div className='mx-auto w-[90%] pt-[2rem]'>
          <div className='flex w-full flex-col items-center gap-[2rem]'>
            <div className='flex w-full flex-col gap-[0.5rem] text-left'>
              <div className='text-2xl font-bold'>{title}</div>
              <div className='text-sm text-[#B3B3B3]'>
                {date} {time}
              </div>
              <div className='text-lg text-[#464646]'>{content}</div>
            </div>
            <div className='flex w-full justify-center'>
              <hr className='w-full' />
            </div>
            <div className='text-center'>답변 정보가 없습니다.</div>
          </div>
        </div>
      </>
    );
  }

  const { content2, date2, time2 } = inquiry2;

  return (
    <>
      <ReservationInquiryDetailHeader />
      <div className='mx-auto w-[90%] pt-[2rem]'>
        <div className='flex w-full flex-col items-center gap-[2rem]'>
          <div className='flex w-full flex-col gap-[0.5rem] text-left'>
            <div className='text-2xl font-bold'>{title}</div>
            <div className='text-sm text-[#B3B3B3]'>
              {date} {time}
            </div>
            <div className='text-lg text-[#464646]'>{content}</div>
          </div>
          <div className='flex w-full justify-center'>
            <hr className='w-full' />
          </div>
          <div className='flex flex-col gap-[0.5rem] text-left'>
            <label className='text-2xl font-bold'>답변 내용</label>
            <div className='text-sm text-[#B3B3B3]'>
              {date2} • {time2}
            </div>
            <div className='text-lg text-[#464646]'>{content2}</div>
          </div>
        </div>
      </div>
    </>
  );
}
