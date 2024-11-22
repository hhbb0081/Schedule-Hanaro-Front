// import { Header } from '@/components/Admin/Header';
// import Sidebar from '@/components/Admin/Sidebar';
import Header from '@/components/Admin/Header';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className='flex'>
      {/* <Sidebar /> */}
      {/* <Header bankName='하나은행 성수역점 ' bankNum={11} /> */}
      <Header/>
      <div className='flex-1 pb-0 pt-[6rem]'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
