import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

function MypageLayout() {
  return (
    <div>
      <Outlet />
      <Nav />
    </div>
  );
}

export default MypageLayout;
