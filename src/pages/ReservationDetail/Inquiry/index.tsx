import '@/index.css';
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav/Nav';
import { useNavigate, useParams } from 'react-router-dom';
import { mockReservationInquiryDetails } from '@/mock/mockReservationsInquiry';
import ReservationDetailHeader from '@/components/Header/ReservationDetailHeader';
import Modalbutton from '@/components/Direction/Modal';

export function ReservationDetailInquiryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reservation = mockReservationInquiryDetails.find(
    (res) => res.id === id
  );
  if (!reservation) {
    return <div>예약 정보를 찾을 수 없습니다.</div>;
  }

  const { title, content, consultationType, date, time, waitingNumber } =
    reservation;

  return (
    <div className='w-[90%] justify-self-center'>
      <body className='flex flex-col items-center justify-center gap-[3.5rem]'>
        <ReservationDetailHeader />
        <div className='flex flex-col items-center justify-center gap-[1rem]'>
          <div className='text-center text-lg font-medium'>
            현재 대기 번호는{' '}
            <span className='text-3xl font-bold text-[#008485]/80'>
              {waitingNumber}
            </span>
            번 입니다.
          </div>
          <div className='text-8xl font-bold'>{waitingNumber}</div>
        </div>
        <div className='flex w-full flex-col gap-[1rem]'>
          <label className='ml-2 flex text-2xl font-bold'>문의 내용</label>
          <div className='flex w-full flex-col gap-[0.5rem] rounded-[1.25rem] border border-[#d9d9d9] bg-[#f9f9f9] p-6'>
            <div className='text-left text-lg font-bold text-[#464646]'>
              {title}
            </div>
            <div className='text-left text-sm text-[#B3B3B3]'>
              {date} {time} • {consultationType}
            </div>
            <div
              className='overflow-hidden text-ellipsis text-left text-lg text-[#464646]'
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {content}
            </div>
          </div>
        </div>
        <div className='flex w-full gap-[0.5rem]'>
          <Modalbutton
            buttonTitle='문의 취소'
            buttonVariant='ghost'
            buttonSize='h-[3.75rem] w-1/3 text-xl'
            modalTitle='1:1 문의 취소'
            modalDescription1=''
            modalDescription2='취소시에는 다시 상담 신청을 하셔야합니다.'
            modalButtonTitle='확인'
            navigateTo='/reservation/inquiry'
          ></Modalbutton>

          <Button
            className='h-[3.75rem] w-2/3 py-[1.125rem] text-xl font-bold'
            variant={'default'}
            onClick={() => navigate(`/reservation/inquiry/${id}/detail`)}
          >
            문의 상세보기
          </Button>
        </div>
      </body>
      <Nav />
    </div>
  );
}
