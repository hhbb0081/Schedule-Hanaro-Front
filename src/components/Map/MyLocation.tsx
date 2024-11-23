import { ReactComponent as Location } from '@/assets/icons/location.svg';

export function MyLocation({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type='button'
      className='myLocation fixed bottom-1/2 z-10 mr-16 self-end'
      onClick={onClick}
    >
      <Location width={30} height={30} />
    </button>
  );
}
