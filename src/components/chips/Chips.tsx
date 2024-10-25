import { Badge } from '../ui/badge';

function Chips() {
  return (
    <span className='space-x-3'>
      <Badge variant='active' className='px-6 py-1 text-[0.875rem]'>
        전체
      </Badge>
      <Badge variant='noactive' className='px-6 py-1 text-[0.875rem]'>
        영업점
      </Badge>
      <Badge variant='noactive' className='px-6 py-1 text-[0.875rem]'>
        ATM
      </Badge>
    </span>
  );
}

export default Chips;
