import ReservationHeader from '@/components/Header/ReservationHeader';
import Nav from '@/components/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';

export function ReservationLayout() {
  const location = useLocation();
  const tab = location.pathname.replace('/reservation/', '');
  const tabLocation = tab === 'visit' ? 'visit' : 'call';

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
      <ReservationHeader tabLocation={tabLocation} key={tabLocation} />
      <div className='h-screen w-[90%] justify-self-center'>
        <Outlet />
      </div>
      <Nav />
    </>
  );
}
