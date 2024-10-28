import { Outlet } from 'react-router-dom';

export function ReservationLayout() {
  return (
    <>
      <div className='w-[90%] justify-self-center'>
        <Outlet />
      </div>
    </>
  );
}
