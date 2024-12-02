import { ReactComponent as Location } from '@/assets/icons/location.svg';

export function MyLocation({
  onClick,
  type,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: 'map' | 'direction';
}) {
  return (
    <button
      type='button'
      className={`myLocation fixed z-10 self-end ${type == 'map' ? 'bottom-[20%] mr-[2.5rem]' : 'bottom-[40%] mr-[3.5rem]'}`}
      onClick={onClick}
    >
      <Location width={30} height={30} />
    </button>
  );
}
