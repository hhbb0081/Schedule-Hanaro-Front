import { MapLayout, ReservationLayout } from '@/components/Layout';
import { MainLayout } from '@/components/Layout/MainLayout';
import {
  BranchDetailPage,
  DirectionPage,
  MainPage,
  MapDetailPage,
  MapPage,
  ReservationPage,
  ReservationCallPage,
  ReservationInquiryPage,
  ReservationDetailVisitPage,
} from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <MainPage /> }],
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
      path: '/direction',
      element: <DirectionPage />,
    },
    {
      path: '/branch/:id',
      element: <BranchDetailPage />,
    },
    {
      path: '/reservation',
      element: <ReservationLayout />,
      children: [
        { index: true, element: <ReservationPage /> },
        {
          path: '/reservation/call',
          children: [
            { index: true, element: <ReservationCallPage /> },
            {
              path: '/reservation/call/:id',
              children: [{ index: true, element: <ReservationCallPage /> }],
            },
          ],
        },
        {
          path: '/reservation/inquiry',
          children: [
            { index: true, element: <ReservationInquiryPage /> },
            {
              path: '/reservation/inquiry/:id',
              children: [{ index: true, element: <ReservationInquiryPage /> }],
            },
          ],
        },
        {
          path: '/reservation/visit',
          children: [
            { index: true, element: <ReservationPage /> },
            {
              path: '/reservation/visit/:id',
              children: [
                { index: true, element: <ReservationDetailVisitPage /> },
              ],
            },
          ],
        },
      ],
    },
  ]);
