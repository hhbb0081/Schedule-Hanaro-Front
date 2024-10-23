import { Header } from '@/components/Admin/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Admin/Sidebar';

function AdminLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Header bankName='하나은행 성수역점 [11]' />
      <div style={{ paddingTop: '75px', flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
