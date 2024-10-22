import { MapLayout } from '@/pages';
import { MainPage } from '@/pages/Main';
import { ReservationPage } from '@/pages/Reservation';
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
