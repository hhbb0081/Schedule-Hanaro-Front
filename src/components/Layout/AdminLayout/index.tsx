import { Header } from '@/components/Admin/Header';
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div>
      <Header bankName='하나은행 성수역점 [11]' />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
