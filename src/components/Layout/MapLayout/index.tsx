import { BottomSheet } from '@/components/BottomSheet/BottomSheet';
import Nav from '@/components/Nav/Nav';
import { SearchInput } from '@/components/ui/searchInput';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <>
      <SearchInput />
      <Outlet />
      <BottomSheet />
      <Nav />
    </>
  );
}
