export type ReservationSlots = {
  [slot: string]: number;
};

export type ReservationCallDetail = {
  id: string;
  name: string;
  phone: string;
  consultationType: string;
  date: string;
  time: string;
  waitingNumber: number;
  waitingTime: number;
};

export type ReservationInquiryDetail = {
  id: string;
  name: string;
  phone: string;
  content: string;
  consultationType: string;
  date: string;
  time: string;
  waitingNumber: number;
};

export type ReservationInquiryAnswerDetail = {
  id: string;
  content2: string;
  date2: string;
  time2: string;
};
