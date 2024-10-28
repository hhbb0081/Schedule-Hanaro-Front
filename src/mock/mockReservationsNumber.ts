export type ReservationSlots = {
  [slot: string]: number;
};

export const mockReservations: ReservationSlots = {
  '09:00~10:00': 10,
  '10:00~11:00': 30,
  '11:00~12:00': 50,
  '12:00~13:00': 75,
};
