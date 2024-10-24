import { ReactComponent as GreenCircle } from '@/assets/icons/green-circle.svg';
import { ReactComponent as RegularBar } from '@/assets/icons/regular-bar.svg';

export default function DirectionBar() {
  return (
    <div className='flex flex-col items-center justify-between gap-1'>
      <GreenCircle></GreenCircle>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <RegularBar></RegularBar>
      <GreenCircle></GreenCircle>
    </div>
  );
}
