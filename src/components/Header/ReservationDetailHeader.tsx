import { CloseButton } from '../ui/close';
import { RefreshButton } from '../ui/refresh';

function ReservationDetailHeader() {
  return (
    <header className='mt-6 flex w-full items-center justify-between'>
      <RefreshButton className='h-[2.375rem]' />
      <CloseButton />
    </header>
  );
}

export default ReservationDetailHeader;
