import { MapPage } from '@/pages';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <>
      <Outlet />
      <MapPage />
    </>
  );
}
