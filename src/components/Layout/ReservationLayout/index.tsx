import { Outlet } from 'react-router-dom';

export function ReservationLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
