import { SearchInput } from '@/components/ui/searchInput';
import { Outlet } from 'react-router-dom';

export function MapLayout() {
  return (
    <>
      <SearchInput />
      <Outlet />
    </>
  );
}
