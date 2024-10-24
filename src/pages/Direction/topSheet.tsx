import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function TopSheet() {
  return (
    <div className='fixed top-10 z-10 h-[12rem] w-[26rem] rounded-md bg-white px-6 py-4'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex h-2/3 justify-between'>
          <div className='flex gap-3'>
            <div className='flex flex-col justify-between font-bold'>
              <div>14:03</div>
              <div>14:25</div>
            </div>
            <Separator orientation='vertical' />
          </div>

          <div className='flex flex-col justify-between'>
            <div className='text-gray-400'>출발지</div>
            <div className='font-bold'>서울 성동구 아차산로 113</div>
            <Separator />
            <div className='text-gray-400'>도착지</div>
            <div className='font-bold'>하나은행 성수역점</div>
          </div>
          <Button>X</Button>
        </div>
        <div className='mx-10 flex items-center justify-between'>
          <div className='flex items-end gap-3'>
            <div>소요시간</div>
            <div className='flex items-end'>
              <div className='text-2xl font-bold'>22</div>
              <div>분</div>
            </div>
          </div>
          <Separator orientation='vertical' />
          <div className='flex items-end gap-3'>
            <div>거리</div>
            <div className='flex items-end'>
              <div className='text-2xl font-bold'>1.5</div>
              <div>km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
