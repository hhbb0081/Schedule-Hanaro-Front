import { MapLayout, ReservationLayout } from '@/components/Layout';
import { MainLayout } from '@/components/Layout/MainLayout';
import { BranchDetailPage, MapDetailPage, MapPage } from '@/pages';
import { ReservationPage } from '@/pages';
import { MainPage } from '@/pages';
import AdminLayout from '@/components/Layout/AdminLayout';
import CallPage from '@/pages/Admin/Call';
import InquiryPage from '@/pages/Admin/Inquiry';
import VisitPage from '@/pages/Admin/Visit';
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
