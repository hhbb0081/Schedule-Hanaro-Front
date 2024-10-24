import { Map } from '@/components';

export function MapPage() {
  const onClickMarker = (id: string) => {
    console.log(id);
  };
  return (
    <div className='map fixed'>
      <Map onClickMarker={onClickMarker} />
    </div>
  );
}
