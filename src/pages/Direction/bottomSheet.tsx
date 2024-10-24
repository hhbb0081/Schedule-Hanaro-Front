import { Button } from '@/components/ui/button';

export default function BottomSheet() {
  return (
    <div className='fixed bottom-10 z-10 h-[12rem] w-[26rem] rounded-md bg-white p-8'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex text-2xl font-extrabold'>하나은행 성수역점</div>
        <div className='flex gap-5'>
          <div className='flex items-end gap-3'>
            <div className=''>대기인원</div>
            <div className='text-lg font-bold'>11명</div>
          </div>
          <div className='flex items-end gap-3'>
            <div className=''>예상대기시간</div>
            <div className='text-lg font-bold'>15분</div>
          </div>
        </div>
        <div className='flex gap-3'>
          <Button>예약 취소</Button>
          <Button className='w-2/3'>예상 상세보기</Button>
        </div>
      </div>
    </div>
  );
}
