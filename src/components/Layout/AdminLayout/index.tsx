import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div>
      Header임
      <div>
        <Outlet />
      </div>
    </div>
  );
}
