import { DirectionButton } from '@/components/ui/direction';
import { Separator } from '@/components/ui/separator';
import { BRANCH_MOCK, BRANCH_STATE_MOCK } from '@/mock/branch_mock';
import { branchIdAtom } from '@/stores';
import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { FloatingType } from '.';

export default function BranchInfo({ type }: FloatingType) {
  const navigate = useNavigate();
  const branchId = useAtomValue(branchIdAtom);
  const targetBranch = BRANCH_MOCK.find((branch) => branch.id === branchId);
  const targetBranchState = BRANCH_STATE_MOCK.find(
    (branch) => branch.id === branchId
  );

  const handleDirection = () => {
    if (targetBranch) {
      const { position_x: longitude, position_y: latitude } = targetBranch;
      // TODO: startLat, startLon 현 위치로 수정
      navigate(
        `/direction?startLat=37.5631989425409&startLon=126.98732327063084&endLat=${latitude}&endLon=${longitude}`
      );
    }
  };

  return (
    <>
      <div className='flex items-center justify-between gap-12'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <span className='flex whitespace-nowrap text-2xl font-extrabold'>
            {targetBranch?.name ?? ''}
          </span>
          <div className='flex flex-wrap items-center justify-center gap-2'>
            <span className='text-[1rem] text-lightGrey'>
              {targetBranch?.address ?? ''}
            </span>
            <div className='flex items-center'>
              <Separator orientation='vertical' className='h-[0.6875rem]' />
            </div>
            <span className='text-[1.125rem] font-bold'>202m</span>
          </div>
        </div>
        {type === 'map' && (
          <DirectionButton variant='square' onClick={handleDirection} />
        )}
      </div>
      <div className='my-3 flex gap-5'>
        <div className='flex items-end gap-3'>
          <span className='text-sm'>대기인원</span>
          <span className='text-md font-bold'>{`${targetBranchState?.waiting_number ?? 0}명`}</span>
        </div>
        <div className='flex items-center'>
          <Separator orientation='vertical' className='h-[0.6875rem]' />
        </div>
        <div className='flex items-end gap-3'>
          <span className='text-sm'>예상대기시간</span>
          <span className='text-md font-bold'>{`${targetBranchState?.waiting_time ?? 0}분`}</span>
        </div>
      </div>
    </>
  );
}
