import { Button } from '@/components/ui/button';

export default function ReservationButton() {
  const reserved = 1;
  return (
    <div className='flex gap-3'>
      {reserved ? (
        <>
          <Button className='w-1/4 font-bold' variant='outline'>
            예약 취소
          </Button>
          <Button className='w-3/4 font-bold'>예약 상세보기</Button>
        </>
      ) : (
        <Button>예약하기</Button>
      )}
    </div>
  );
}
