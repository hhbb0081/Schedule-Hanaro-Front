import { Button } from '@/components/ui/button';
import { mockCallData } from '@/mock/adminInquiry';
import { useState } from 'react';
import WaitingBox from './WaitingBox';

function WaitingList() {
  const [selectedIdx, setSelectedIdx] = useState(123);

  const nowData = mockCallData.filter(({ now }) => now)[0];
  return (
    <div className='w-[35%] rounded-[15px] bg-white pt-3'>
      <div className='mx-auto flex w-[90%] items-center justify-between'>
        <span className='text-[1.125rem] font-medium'>대기목록</span>
        <span className='text-[1.125rem] font-bold'>25명 대기중</span>
      </div>
      <div className='pt-5 text-center'>
        <span className='text-[0.875rem]'>현재 진행 중</span>
        <div
          className='border-t-[1px] border-[#D9D9D9]'
          onClick={() => setSelectedIdx(nowData.waitingNum)}
        >
          <WaitingBox
            isSelected={selectedIdx === nowData.waitingNum}
            waitingNum={nowData.waitingNum}
            category={nowData.category}
            content={nowData.content}
            userName={nowData.userName}
            resTime={nowData.resTime}
          />
        </div>
      </div>
      <div className='text-center text-[0.875rem]'>
        <span className='text-[0.875rem]'>대기중</span>
        <ul className='flex flex-col border-t-[1px] border-[#D9D9D9]'>
          {mockCallData
            .filter(({ now }) => !now)
            .map(({ waitingNum, category, content, userName, resTime }) => (
              <li key={waitingNum} onClick={() => setSelectedIdx(waitingNum)}>
                <WaitingBox
                  isSelected={selectedIdx === waitingNum}
                  waitingNum={waitingNum}
                  category={category}
                  content={content}
                  userName={userName}
                  resTime={resTime}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className='m-5 text-center'>
        <Button variant='secondary' className='w-fit py-1'>
          더보기
        </Button>
      </div>
    </div>
  );
}

export default WaitingList;
