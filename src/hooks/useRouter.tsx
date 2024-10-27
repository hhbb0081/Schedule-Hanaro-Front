import { MapLayout, ReservationLayout } from '@/components/Layout';
import { MainLayout } from '@/components/Layout/MainLayout';
import { RegisterLayout } from '@/components/Layout/Register';
import AdminLayout from '@/components/Layout/AdminLayout';
import {
  BranchDetailPage,
  DirectionPage,
  MainPage,
  MapDetailPage,
  MapPage,
  RegisterCallFormPage,
  RegisterInquiryFormPage,
  RegisterPage,
  ReservationCallPage,
  ReservationDetailVisitPage,
  ReservationInquiryPage,
  ReservationPage,
  ReservationVisitPage,
} from '@/pages';
//수정 예정 ..
import CallPage from '@/pages/Admin/Call';
import InquiryPage from '@/pages/Admin/Inquiry';
import VisitPage from '@/pages/Admin/Visit';
import { createBrowserRouter } from 'react-router-dom';
import { AnswerInput } from '@/pages/Admin/Inquiry/Answer/Input';
import { AnswerDetail } from '@/pages/Admin/Inquiry/Answer/Detail';

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
            { index: true, element: <ReservationVisitPage /> },
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
    {
      path: '/register',
      element: <RegisterLayout />,
      children: [
        { index: true, element: <RegisterPage /> },
        {
          path: '/register/call',
          element: <RegisterCallFormPage />,
        },
        {
          path: '/register/inquiry',
          element: <RegisterInquiryFormPage />,
        },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <VisitPage /> },
        { path: '/admin/inquiry', element: <InquiryPage /> },
        { path: '/admin/inquiry/AnswerInput', element: <AnswerInput /> },
        { path: '/admin/inquiry/AnswerDetail', element: <AnswerDetail /> },
        { path: '/admin/call', element: <CallPage /> },
      ],
    },
  ]);
