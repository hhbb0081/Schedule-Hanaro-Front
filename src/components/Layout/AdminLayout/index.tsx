import { Header } from '@/components/Admin/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Admin/Sidebar';

function AdminLayout() {
  return (
    <div className='flex'>
      <Sidebar />
      <Header bankName='하나은행 성수역점 ' badnkNum={11} />
      <div className='flex-1 pb-0 pt-[6rem]'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
