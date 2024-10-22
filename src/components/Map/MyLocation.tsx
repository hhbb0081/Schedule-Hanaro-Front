import { ReactComponent as Location } from '@/assets/icons/location.svg';

export function MyLocation({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type='button' className='myLocation' onClick={onClick}>
      <Location width={30} height={30} />
    </button>
  );
}
