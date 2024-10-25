import BankInfo from './BankInfo';
import ReservationButton from './ReservationButton';

export default function BottomSheet() {
  return (
    <div className='fixed bottom-10 z-10 h-[12rem] w-[26rem] rounded-xl bg-white p-8'>
      <div className='flex h-full flex-col justify-between'>
        <BankInfo />
        <ReservationButton />
      </div>
    </div>
  );
}
