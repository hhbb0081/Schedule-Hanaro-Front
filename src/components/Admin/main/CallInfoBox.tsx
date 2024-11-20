import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ActiveTab } from '@/types/inquiry';
import { useState } from 'react';
import ReplyState from '../Inquiry/ReplyState';

function CallInfoBox() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('문의정보');

  return (
    <div className='w-[65%] flex-grow rounded-[20px] bg-white px-4 py-6'>
      <ReplyState activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === '문의정보' && (
        <>
          <div className='relative mt-10 rounded-2xl border-[1px] border-border'>
            <div className='absolute left-[38%] top-[-20px] flex items-center gap-3 bg-white px-2'>
              <span className='text-4xl font-bold'>123</span>
              <Badge variant='lightSolid'>예금</Badge>
            </div>
            <div className='h-64 overflow-auto rounded p-4'>
              <div className='flex items-center justify-start'>
                <Badge># 비밀번호</Badge>
                <Badge># 인증서</Badge>
              </div>
              <div className='text-sm text-gray-600'>
                내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용
                내용내용내용내용내용내용내용내용내용내용내용내용
              </div>
            </div>
          </div>
          <div className='mt-4 flex justify-end gap-3'>
            <Button className='w-fit rounded-3xl bg-[#777777] px-4 py-2'>
              현재 고객으로 이동
            </Button>
            <Button className='w-fit rounded-3xl bg-[#777777] px-4 py-2 text-white'>
              상담 내용 입력하기
            </Button>
          </div>
        </>
      )}

      {activeTab === '고객정보' && (
        <div>
          <div className='my-4 flex items-center gap-3'>
            <h3 className='whitespace-nowrap text-lg font-bold text-[#666666]'>
              기본 정보
            </h3>
            <div className='h-[2px] w-full bg-[#666666]'></div>
          </div>
          <ul className='mb-6 text-gray-600'>
            <li className='flex items-center justify-between'>
              <span>고객명</span>
              <span>강능요</span>
            </li>
            <li className='flex items-center justify-between'>
              <span>이메일</span>
              <span>asdf@naver.com</span>
            </li>
            <li className='flex items-center justify-between'>
              <span>전화번호</span>
              <span>010-1111-2222</span>
            </li>
            <li className='flex items-center justify-between'>
              <span>생년월일</span>
              <span>1970년 08월 11일</span>
            </li>
          </ul>
          <div className='my-4 flex items-center gap-3'>
            <h3 className='whitespace-nowrap text-lg font-bold text-[#666666]'>
              상담 이력
            </h3>
            <div className='h-[2px] w-full bg-[#666666]'></div>
          </div>
          <div className='rounded bg-gray-100 p-4'>
            <div className='flex w-full items-center justify-between p-4'>
              <div>
                <span>1</span>
                <span>안녕하세요. 문의드립니다...</span>
                <Badge>예금</Badge>
              </div>
              <span>상세보기</span>
            </div>
            <div className='flex w-full items-center justify-between p-4'>
              <div>
                <span>2</span>
                <span>안녕하세요. 문의드립니다...</span>
                <Badge>대출</Badge>
              </div>
              <span>상세보기</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CallInfoBox;
