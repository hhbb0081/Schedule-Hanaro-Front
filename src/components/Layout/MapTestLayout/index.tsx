import { MapProvider } from '@/hooks/map-context';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

export function MapTestLayout() {
  const mapRef = useRef<HTMLDivElement>(null);
  return (
    <MapProvider mapRef={mapRef}>
      <Outlet />
    </MapProvider>
  );
}
