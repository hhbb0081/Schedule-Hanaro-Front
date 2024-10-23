<<<<<<< HEAD
=======
import { Header } from '@/components/Admin/Header';
import React from 'react';
>>>>>>> 8bdf065 ([Admin]� Sidebar(Nav) 추가)
<<<<<<< HEAD
=======
import { Header } from '@/components/Admin/Header';
import React from 'react';
>>>>>>> 8bdf065 ([Admin]� Sidebar(Nav) 추가)
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Admin/Sidebar';
import Sidebar from '@/components/Admin/Sidebar';

function AdminLayout() {
function AdminLayout() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div>
      Header임
      <div>
=======
    <div style={{ display: 'flex' }}>
    <div className='flex'>
      <Sidebar />
      <Header bankName='하나은행 성수역점 [11]' />
      <div style={{ paddingTop: '75px', flex: 1 }}>
>>>>>>> 8bdf065 ([Admin]� Sidebar(Nav) 추가)
      <div className='flex-1 pb-0 pt-[4rem]'>
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

export default AdminLayout;
