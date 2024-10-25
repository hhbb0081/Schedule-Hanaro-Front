import { useParams } from 'react-router-dom';
import { ReactComponent as Cross } from '@/assets/icons/cross.svg';
import { ReactComponent as Check } from '@/assets/icons/reservaion/check.svg';
import '@/index.css';
import { DirectionButton } from '@/components/ui/branch/direction';
export function ReservationDetailVisitPage() {
  const { id } = useParams();
  if (!id) {
    return;
  }
  return (
    <div>
      <header className='flex h-14 items-center justify-between'>
        <button>새로고침</button>
        <Cross width={18} height={18} className='mr-4' />
      </header>
      <main className='mt-2 flex flex-col justify-items-center'>
        <div className='flex justify-center'>
          <Check className='h-auto w-[4.5rem]' />
        </div>
        <div className='mt-4 text-center text-[1.75rem] font-bold text-black'>
          번호표 발급 완료
        </div>
        <div className='mt-4 text-center text-sm font-medium text-[#666666]'>
          1시간 이내 미방문 시<br />
          예약이 취소될 수 있습니다.
        </div>
        <div className='mt-4 flex w-full justify-center'>
          <hr className='w-3/4' />
        </div>
        <div className='mt-4 text-center text-lg font-medium'>
          현재 대기 번호는{' '}
          <span className='text-3xl font-bold text-[#008485]/80'>126</span>번
          입니다.
        </div>
        <div className='mb-4 mt-2 text-8xl font-bold'>
          {id}
          <span className='text-[2rem] font-bold'>번</span>
        </div>
        <div className='flex w-full'>
          <div className='text-2xl font-semibold'>하나은행 성수역점</div>
          <DirectionButton />
        </div>
      </main>
    </div>
  );
}
