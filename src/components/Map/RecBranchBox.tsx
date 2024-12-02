import { RecBranch } from '@/types/branch';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../ui/badge';

function RecBranchBox({
  branchId,
  branchName,
  location,
  distance,
  congestion,
}: RecBranch) {
  const navigate = useNavigate();

  const handlePage = (path: string) => () => {
    navigate(path);
  };
  return (
    <div
      onClick={handlePage(`/branch/${branchId}`)}
      className='flex w-[full] max-w-[10.375rem] flex-col items-start justify-center rounded-[15px] px-3 py-2 shadow-[0px_0px_10px_8px_rgba(0,0,0,0.13)]'
    >
      <span>{branchName}</span>
      <span>{location}</span>
      <span>{distance}</span>
      <Badge variant='lightSolid'>{congestion}</Badge>
    </div>
  );
}

export default RecBranchBox;
