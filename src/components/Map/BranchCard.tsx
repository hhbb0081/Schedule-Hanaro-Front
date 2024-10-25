import { ChevronRight, Clock4, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../ui/badge';

// type BranchCardProps = {
//   branchId: number;
//   branchName: string;
//   isOpen: boolean;
//   address: string;
//   distance: string;
//   time: string;
// };

function BranchCard() {
  // {
  //   branchId,
  //   branchName,
  //   isOpen,
  //   address,
  //   distance,
  //   time,
  // }: BranchCardProps

  // mock data
  const MOCK = {
    branchId: 0,
    branchName: '성수역점',
    isOpen: true,
    address: '성수로1가 17',
    distance: '503',
    time: '10',
  };

  const navigate = useNavigate();
  const handleDetailPage = () => {
    navigate(`/branch/${String(MOCK.branchId)}`);
  };

  return (
    <div
      className='flex w-full cursor-pointer items-center justify-between rounded-[0.9375rem] bg-white p-6 shadow-[0_0_10px_5px_rgba(0,0,0,0.05)] transition-colors duration-300 hover:bg-gray-50'
      onClick={handleDetailPage}
    >
      <div className='flex flex-col gap-1 text-left'>
        <div className='flex items-end gap-3'>
          <span className='text-[1.5rem] font-bold'>{MOCK.branchName}</span>
          {MOCK.isOpen ? (
            <Badge variant='lightSolid'>영업중</Badge>
          ) : (
            <Badge variant='lightSolid'>영업종료</Badge>
          )}
        </div>
        <span className='text-[0.875rem] text-lightGrey'>{MOCK.address}</span>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <MapPin width='0.875rem' height='0.875rem' />
            <span className='text-[0.875rem] text-sm'>{MOCK.distance}m</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock4 width='0.875rem' height='0.875rem' />
            <span className='text-[0.875rem] text-sm'>{MOCK.time}분</span>
          </div>
        </div>
      </div>
      <div>
        <ChevronRight width='1.1875rem' height='1.1875rem' />
      </div>
    </div>
  );
}

export default BranchCard;
