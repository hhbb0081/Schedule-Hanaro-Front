import Header from '@/components/Admin/Header';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className='flex'>
      <Header />
      <div className='flex-1 pb-0 pt-[6rem]'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
