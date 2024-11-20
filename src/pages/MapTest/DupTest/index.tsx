import { useMap } from '@/hooks/map-context';

export default function DupTest() {
  const { mapRef } = useMap();

  return <div id='map' className='map' ref={mapRef}></div>;
}
