import ReservationHeader from '@/components/Header/ReservationHeader';
import Nav from '@/components/Nav/Nav';
// import Tabs from '@/components/Tabs/Tabs';
import { Outlet, useLocation } from 'react-router-dom';

export function ReservationLayout() {
  const location = useLocation();

  const noLayoutPaths = [
    '/reservation/visit/',
    '/reservation/call/',
    '/reservation/inquiry/',
  ];

  const hasNoLayout = noLayoutPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  if (hasNoLayout) {
    return <Outlet />;
  }

  return (
    <>
      <ReservationHeader />
      <div className='h-screen w-[90%] justify-self-center pt-[12.5rem]'>
        <Outlet />
      </div>
      <Nav />
    </>
  );
}
