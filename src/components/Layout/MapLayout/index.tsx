import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import Nav from '@/components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <>
      <Outlet />
      <BottomSheet />
      <Nav />
    </>
  );
}
