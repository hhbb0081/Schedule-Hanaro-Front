import ReservationHeader from '@/components/Header/ReservationHeader';
import Nav from '@/components/Nav/Nav';
import Tabs from '@/components/Tabs/Tabs';
import { Outlet, useLocation } from 'react-router-dom';

export function ReservationLayout() {
  const noLayoutPaths = ['/reservation'];
  const location = useLocation();

  const hasNoLayout = noLayoutPaths.some((path) => location.pathname === path);
  if (hasNoLayout) {
    return <Outlet />;
  }

  return (
    <>
      <ReservationHeader />
      <div className='w-[90%] justify-self-center pt-[4rem]'>
        <Tabs
          leftValue='visit'
          leftName='방문 상담'
          rightValue='call'
          rightName='전화 / 1:1 상담'
        />
        <Outlet />
      </div>
      <Nav />
    </>
  );
}
