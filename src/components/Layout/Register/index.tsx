import Header from '@/components/Header/Header';
import { Outlet } from 'react-router-dom';

export function RegisterLayout() {
  return (
    <>
      <div className='App'>
        <Header />
        <Outlet />
      </div>
    </>
  );
}
