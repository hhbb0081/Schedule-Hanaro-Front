import { Outlet } from 'react-router-dom';

export function ClientLayout() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}
