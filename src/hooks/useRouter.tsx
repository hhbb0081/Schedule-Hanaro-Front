import { MapLayout, ReservationLayout } from '@/components/Layout';
import AdminLayout from '@/components/Layout/AdminLayout';
import {
  BranchDetailPage,
  MainPage,
  MapDetailPage,
  MapPage,
  ReservationPage,
} from '@/pages';
import CallPage from '@/pages/Admin/Call';
import InquiryPage from '@/pages/Admin/Inquiry';
import VisitPage from '@/pages/Admin/Visit';
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
      element: <AdminLayout />,
      children: [
        { index: true, element: <VisitPage /> },
        { path: '/admin/inquiry', element: <InquiryPage /> },
        { path: '/admin/call', element: <CallPage /> },
      ],
    },
  ]);
