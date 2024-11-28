export type ActiveTab = '답변대기' | '답변완료' | '문의정보' | '고객정보';

export type CallDataType = {
  waitingNum: number;
  category: string;
  content: string;
  userName: string;
  resTime: string;
  now: boolean;
};
