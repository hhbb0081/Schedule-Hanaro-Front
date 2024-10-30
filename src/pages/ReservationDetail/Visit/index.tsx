import { ReactComponent as Check } from '@/assets/icons/reservation/check.svg';
import Modalbutton from '@/components/Direction/Modal';
import ReservationDetailHeader from '@/components/Header/ReservationDetailHeader';
import Nav from '@/components/Nav/Nav';
import { DirectionButton } from '@/components/ui/direction';
import { useToast } from '@/hooks/use-toast';
import '@/index.css';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { showToast } from '@/pages/Register/Call';
import { useNavigate, useParams } from 'react-router-dom';
export function ReservationDetailVisitPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    return;
  }

  const branch = BRANCH_MOCK.find((br) => br.id === id);

  const handleDirection = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (branch) {
      const { position_x: longitude, position_y: latitude } = branch;
      // TODO: startLat, startLon 현 위치로 수정
      navigate(
        `/direction?startLat=37.5631989425409&startLon=126.98732327063084&endLat=${latitude}&endLon=${longitude}&branchId=${id}`
      );
      showToast(toast, '길 안내를 시작합니다.');
    }
  };
  return (
    <div className='h-screen w-[90%] justify-self-center'>
      <div className='flex h-full flex-col'>
        <ReservationDetailHeader />
        <div className='flex h-full flex-col justify-between'>
          <div className='flex w-full flex-col items-center'>
            <div className='mt-4 flex justify-center'>
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
              <hr className='w-[21.25rem]' />
            </div>
            <div className='mt-4 text-center text-lg font-medium'>
              현재 대기 번호는{' '}
              <span className='text-3xl font-bold text-[#008485]/80'>{id}</span>
              번 입니다.
            </div>
            <div className='mb-4 mt-2 text-8xl font-bold'>
              {id}
              <span className='text-[2rem] font-bold'>번</span>
            </div>
            <div className='mt-2 flex w-full justify-center gap-6'>
              <div className='text-2xl font-semibold'>하나은행 성수역점</div>
              <DirectionButton onClick={handleDirection} />
            </div>
            <div className='mt-6 w-[23.75rem] rounded-[1.25rem] border border-[#d9d9d9] bg-[#f9f9f9] p-6'>
              <h3 className='flex text-xl font-bold text-black'>대기정보</h3>
              <hr className='my-3' />
              <div className='flex justify-between'>
                <div className='text-lg font-medium text-[#666666]'>
                  현재 대기 인원
                </div>
                <div className='text-lg font-bold text-[#464646]'>10명</div>
              </div>
              <div className='mt-4 flex justify-between'>
                <div className='text-lg font-medium text-[#666666]'>
                  예상 대기 시간
                </div>
                <div className='text-lg font-bold text-[#464646]'>15분</div>
              </div>
            </div>
          </div>
          <div className='pb-[7rem] pt-[2rem]'>
            <Modalbutton
              buttonTitle='예약 취소'
              buttonVariant='outline'
              buttonSize='h-[3.75rem] w-[23.75rem] md:w-[25rem]'
              modalTitle='영업점 예약 취소'
              modalDescription1='취소 시 30분 후부터 재예약이 가능합니다.'
              modalDescription2=''
              modalButtonTitle='확인'
            ></Modalbutton>
          </div>
        </div>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}
