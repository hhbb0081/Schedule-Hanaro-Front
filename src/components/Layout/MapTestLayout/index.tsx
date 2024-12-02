import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export function MapTestLayout() {
  return (
    <div className='App'>
      <Outlet />
      <Nav />
    </div>
  );
}
