export type CallDetail = {
  call_id: number;
  user_id: number;
  call_date: number; //전화 상담 하기로 한 시간
  name: string;
  phone_number: string;
  start_time: number; //상담 시작 시간
  end_time: number; //상담 종료 시간
  category: string;
  inquiry_content: string;
  banker_reply_content: string;
  recommended_reply_content: string;
  recommended_entry_time: number;
  tags: string[];
};
