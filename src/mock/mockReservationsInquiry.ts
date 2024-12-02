import {
  ReservationInquiryAnswerDetail,
  ReservationInquiryDetail,
} from '@/types/reservation';

export const mockReservationInquiryDetails: ReservationInquiryDetail[] = [
  {
    id: '1',
    name: '해빈',
    phone: '010-2345-2345',
    content:
      '안녕하세요. 대학생에게 큰 혜택을 주는 예금 상품이 궁금하여 문의드려요. 저는 대학교 4학년이고 현재 모아놓은 돈은 500만원 정도에요. 저한테 잘 어울리는 예금이 뭐가 있을까요? 모은 돈을 전부 넣고 싶어요.',
    consultationType: '예금',
    date: '2024-10-29',
    time: '09:00',
    waitingNumber: 10,
  },
  {
    id: '2',
    name: '예나',
    phone: '010-1234-1234',
    content:
      '안녕하세요. 대학생에게 큰 혜택을 주는 예금 상품이 궁금하여 문의드려요. 돈을 완전 많이 벌고싶어서 큰 혜택이었음 좋겠네요. 그리고 소득분위랑도 상관 있을까요? 최대한 받고 싶은 혜택은 몽땅 받고 싶어요. 아니 아직도 6줄이 안넘었네. 이거 참 당황스럽다. 지금은 오전 11시 16분이에요',
    consultationType: '대출',
    date: '2024-10-30',
    time: '10:00',
    waitingNumber: 20,
  },
];

export const mockReservationInquiryAnswerDetails: ReservationInquiryAnswerDetail[] =
  [
    {
      id: '1',
      content2:
        '반갑습니다 고객님 ^-^ 예금 정보가 궁금하셨군요~ 예금은 저축 목적에 적절하죠~ 답변이 되셨으면 좋아요 부탁드립니다~!',
      date2: '2024-10-29',
      time2: '12:00',
    },
    // {
    //   id: '2',
    //   content2:
    //     '반갑습니다 고객님 ^-^ 예금 정보가 궁금하셨군요~ 예금은 저축 목적에 적절하죠~ 답변이 되셨으면 좋아요 부탁드립니다~!',
    //   date2: '2024-10-30',
    //   time2: '12:00',
    // },
  ];
