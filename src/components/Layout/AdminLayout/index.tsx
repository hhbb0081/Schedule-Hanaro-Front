<<<<<<< HEAD
=======
import { Header } from '@/components/Admin/Header';
import React from 'react';
>>>>>>> 8bdf065 ([Admin]� Sidebar(Nav) 추가)
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Admin/Sidebar';

function AdminLayout() {
  return (
<<<<<<< HEAD
    <div>
      Header임
      <div>
=======
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Header bankName='하나은행 성수역점 [11]' />
      <div style={{ paddingTop: '75px', flex: 1 }}>
>>>>>>> 8bdf065 ([Admin]� Sidebar(Nav) 추가)
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
