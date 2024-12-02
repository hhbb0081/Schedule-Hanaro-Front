import { Button } from '@/components/ui/button';
import { BRANCH_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import Modalbutton from '../Modal';

export default function ReservationButton() {
  const branchId = useAtomValue(branchIdAtom);
  const branchIdx = BRANCH_MOCK.findIndex(({ id }) => id === branchId);
  const reserved = 1;
  const navigate = useNavigate();

  const handlePage =
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (url: string) => {
      e.stopPropagation();
      navigate(url);
    };
  return (
    <div className='flex gap-3'>
      {reserved ? (
        <>
          <Modalbutton
            buttonTitle='예약 취소'
            buttonVariant='ghost'
            buttonSize='w-1/4'
            modalTitle='영업점 예약 취소'
            modalDescription1='취소 시 30분 후부터 재예약이 가능합니다.'
            modalDescription2=''
            modalButtonTitle='확인'
          ></Modalbutton>
          <Button
            className='w-3/4 font-bold'
            onClick={(e) => handlePage(e)('/register/visit/1')}
          >
            예약 상세보기
          </Button>
        </>
      ) : (
        <Modalbutton
          buttonTitle='예약하기'
          buttonVariant='default'
          buttonSize='w-full'
          modalTitle={branchIdx === -1 ? '' : BRANCH_MOCK[branchIdx].name}
          modalDescription1='방문 예약 후 1시간 이내 미방문 시'
          modalDescription2=' 예약이 취소될 수 있습니다.'
          modalButtonTitle='예약'
        ></Modalbutton>
      )}
    </div>
  );
}
