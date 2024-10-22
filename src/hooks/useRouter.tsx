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
      children: [
        { index: true, element: <MapPage /> },
        {
          path: '/map/:id',
          element: <MapDetailPage />,
        },
      ],
    },
    {
      path: '/branch/:id',
      element: <BranchDetailPage />,
    },
    {
      path: '/reservation',
      element: <ReservationLayout />,
      children: [{ index: true, element: <ReservationPage /> }],
    },
    {
      path: '/admin',
      element: <AdminMainPage />,
    },
  ]);
