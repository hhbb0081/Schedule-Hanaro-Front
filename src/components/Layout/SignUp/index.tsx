import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export function SignUpLayout() {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
}
