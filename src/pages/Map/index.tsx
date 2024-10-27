import { Map } from '@/components';

export function MapPage() {
  const onClickMarker = (id: string) => {
    console.log(id);
  };

  return <Map onClickMarker={onClickMarker} />;
}
