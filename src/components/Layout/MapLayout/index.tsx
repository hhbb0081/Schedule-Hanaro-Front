import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <div>
      Header임
      <div>
        <Outlet />
      </div>
    </div>
  );
}
