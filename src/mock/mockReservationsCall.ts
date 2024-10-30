import { ReservationCallDetail, ReservationSlots } from '@/types/reservation';

export const mockReservations: ReservationSlots = {
  '09:00~10:00': 10,
  '10:00~11:00': 30,
  '11:00~12:00': 50,
  '12:00~13:00': 75,
};

export const mockReservationCallDetails: ReservationCallDetail[] = [
  {
    id: '1',
    name: '김예나',
    phone: '010-1234-1234',
    consultationType: '예금',
    date: '2024-10-29',
    time: '09:00~10:00',
    waitingNumber: 10,
    waitingTime: 15,
  },
  {
    id: '2',
    name: '김민서',
    phone: '010-5678-5678',
    consultationType: '대출',
    date: '2024-10-30',
    time: '10:00~11:00',
    waitingNumber: 20,
    waitingTime: 30,
  },
];
