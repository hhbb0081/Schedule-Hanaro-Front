import BranchInfo from './BranchInfo';
import ReservationButton from './ReservationButton';

export default function BottomSheet() {
  return (
    <div className='fixed bottom-[7rem] z-10 h-[12rem] w-[26rem] rounded-xl bg-white p-8'>
      <div className='flex h-full flex-col justify-between'>
        <BranchInfo />
        <ReservationButton />
      </div>
    </div>
  );
}
