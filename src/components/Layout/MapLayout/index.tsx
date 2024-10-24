import { MapPage } from '@/pages';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <div className='App'>
      <Outlet />
      <MapPage />
    </div>
  );
}
