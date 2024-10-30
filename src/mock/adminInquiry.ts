// mockInquiryData.ts

import { inquiryDetail } from '@/types/inquiryDetail';

export const mockInquiryData: inquiryDetail[] = [
  {
    id: 1,
    Title: '안녕하세요 문의드리려고 합니다',
    name: '이규호',
    time: 12, // 2시간 전
    category: '예금',
    content:
      '안녕하세요 좀 궁금한게 있는데 어떤게 궁금한지는 잘 모르겠어서 생각 좀 해보고 다시 문의드릴게요 감사합니다.',
  },
  {
    id: 2,
    Title: '예금 관련 문의',
    name: '김지현',
    time: 1, // 1시간 전
    category: '예금',
    content: '예금 상품에 대해 설명해주실 수 있나요?',
  },
  {
    id: 3,
    Title: '대출 상담 요청',
    name: '박민수',
    time: 15, // 5시간 전
    category: '대출',
    content: '대출에 대한 상담을 받고 싶습니다. 가능한 시간 알려주세요.',
  },
  {
    id: 4,
    Title: '인터넷 뱅킹 문제',
    name: '이현수',
    time: 142, // 1일 전
    category: '기타',
    content: '인터넷 뱅킹 로그인 오류가 발생합니다. 해결 방법이 있나요?',
  },
];
