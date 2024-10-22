import { useAtom } from 'jotai';

import { Map } from '@/components';
import { mogacoAtom } from '@/stores';

import '@/index.css';

export function MapLayout() {
  const [, setMogacoId] = useAtom(mogacoAtom);

  const onClickMarker = (id: string) => {
    setMogacoId(id);
  };
  return (
    <div className='map'>
      <Map onClickMarker={onClickMarker} />
    </div>
  );
}
