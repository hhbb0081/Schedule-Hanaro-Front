import { MapLayout, ReservationPage } from '@/pages';
import { MainPage } from '@/pages';
import { AdminMainPage } from '@/pages/Admin/Main';
import { createBrowserRouter } from 'react-router-dom';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/map',
      element: <MapLayout />,
    },
    {
      path: '/reservation',
      element: <ReservationPage />,
    },
    {
      path: '/admin',
      element: <AdminMainPage />,
    },
  ]);
