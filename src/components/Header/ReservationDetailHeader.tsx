import { CloseButton } from '../ui/close';
import { RefreshButton } from '../ui/refresh';

function ReservationDetailHeader() {
  return (
    <div className='flex w-full items-center justify-between pt-6'>
      <RefreshButton className='h-[2.375rem]' />
      <CloseButton location='reservation/visit' />
    </div>
  );
}

export default ReservationDetailHeader;
