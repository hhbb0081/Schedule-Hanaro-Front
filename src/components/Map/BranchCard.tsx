import { branchIdAtom } from '@/stores';
import { useSetAtom } from 'jotai';
import { ChevronRight, Clock4, MapPin } from 'lucide-react';
import { Badge } from '../ui/badge';

export type BranchCardProps = {
  branchId: number;
  branchName: string;
  isOpen: boolean;
  address: string;
  distance: string;
  time: string;
  type: 'bank' | 'ATM';
};

function BranchCard({
  branchId,
  branchName,
  isOpen,
  address,
  distance,
  time,
  type,
}: BranchCardProps) {
  // data
  // = {
  //   branchId: 0,
  //   branchName: '성수역점',
  //   isOpen: true,
  //   address: '성수로1가 17',
  //   distance: '503',
  //   time: '10',
  //   type: 'bank',
  // };

  const setCurrentBranchId = useSetAtom(branchIdAtom);
  // const navigate = useNavigate();
  const handleDetailPage = () => {
    setCurrentBranchId(String(branchId));
    // navigate(`/branch/${String(branchId)}`);
  };

  return (
    <div
      className='flex w-full cursor-pointer items-center justify-between rounded-[0.9375rem] bg-white p-6 shadow-[0_0_10px_5px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-gray-50'
      onClick={handleDetailPage}
    >
      <div className='flex flex-col gap-1 text-left'>
        <div className='flex items-end gap-3'>
          <span className='text-[1.5rem] font-bold'>{branchName}</span>
          {isOpen ? (
            <Badge variant='lightSolid'>영업중</Badge>
          ) : (
            <Badge variant='lightSolid'>영업종료</Badge>
          )}
        </div>
        <span className='text-[0.875rem] text-lightGrey'>{address}</span>
        <div className='mb-1 flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <MapPin width='0.875rem' height='0.875rem' />
            <span className='text-[0.875rem]'>{distance}m</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock4 width='0.875rem' height='0.875rem' />
            <span className='text-[0.875rem]'>{time}분</span>
          </div>
        </div>
        {type === 'bank' && (
          <div className='flex items-center gap-4'>
            <Badge className='gap-2 rounded-[5px] bg-[rgba(0,0,0,0.07)] px-4 py-2 text-[0.875rem] text-lightGrey'>
              <span>대기인원</span>
              <span>11명</span>
            </Badge>
            <Badge className='gap-2 rounded-[5px] bg-[rgba(0,0,0,0.07)] px-4 py-2 text-[0.875rem] text-lightGrey'>
              <span>예상대기시간</span>
              <span>50분</span>
            </Badge>
          </div>
        )}
      </div>
      <div>
        <ChevronRight width='1.1875rem' height='1.1875rem' />
      </div>
    </div>
  );
}

export default BranchCard;
