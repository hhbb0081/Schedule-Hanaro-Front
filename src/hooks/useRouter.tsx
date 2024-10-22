import { MapLayout, ReservationPage } from '@/pages';
import { MainPage } from '@/pages';
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
  ]);
