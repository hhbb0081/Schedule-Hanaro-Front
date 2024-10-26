import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export function RegisterLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Nav />
    </>
  );
}
