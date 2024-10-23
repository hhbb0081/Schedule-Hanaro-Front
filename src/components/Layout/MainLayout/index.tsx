import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Nav />
    </div>
  );
}
