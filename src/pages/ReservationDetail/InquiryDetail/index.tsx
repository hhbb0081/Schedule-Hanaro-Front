import { useParams } from 'react-router-dom';
import {
  mockReservationInquiryAnswerDetails,
  mockReservationInquiryDetails,
} from '@/mock/mockReservationsInquiry';
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import waitingAnswer from '@/assets/images/waitingAnswer.svg';

export function InquiryDetailPage() {
  const { id: inquiryId } = useParams<{ id: string }>();

  const inquiry = mockReservationInquiryDetails.find(
    ({ id }: { id: string }) => id === inquiryId
  );
  const inquiry2 = mockReservationInquiryAnswerDetails.find(
    ({ id }: { id: string }) => id === inquiryId
  );

  if (!inquiry) {
    return <div>문의 정보를 찾을 수 없습니다.</div>;
  }

  const { content, date, time } = inquiry;

  if (!inquiry2) {
    return (
      <>
        <Header title='답변 상세' />
        <div className='mx-auto w-[90%] pt-[2rem]'>
          <div className='flex w-full flex-col items-center gap-[5rem]'>
            <div className='flex w-full flex-col gap-[3rem] text-left'>
              <div className='text-sm text-[#B3B3B3]'>
                {date} {time}
              </div>
              <div className='text-lg text-[#464646]'>{content}</div>
            </div>
            <div className='flex w-full justify-center'>
              <hr className='w-full' />
            </div>
            <img src={waitingAnswer} />
            <div className='text-center text-xl font-bold'>
              상담사가 고객님의 문의를 처리 중입니다.
            </div>
          </div>
        </div>
        <Nav />
      </>
    );
  }

  const { content2, date2, time2 } = inquiry2;

  return (
    <>
      <Header title='답변 상세' />
      <div className='mx-auto w-[90%] pt-[5rem]'>
        <div className='flex w-full flex-col items-center gap-[2rem]'>
          <div className='flex w-full flex-col gap-[0.5rem] text-left'>
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
        <Nav />
      </div>
    </>
  );
}
