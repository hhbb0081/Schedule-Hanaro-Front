import { useState } from 'react';
import CallInfoBox from './CallInfoBox';
import CurrentBox from './CurrentBox';
import WaitingList from './WaitingList';

function CallContainer() {
  const [selectedIdx, setSelectedIdx] = useState(123);

  return (
    <div className='mx-auto w-full space-y-5 text-left'>
      <span className='text-2xl font-bold'>전화 문의</span>
      <div className='flex w-full items-stretch gap-5'>
        <div className='flex w-[70%] flex-grow items-stretch gap-3 bg-[#F2F2F2] p-3'>
          <WaitingList
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
          />
          <CallInfoBox
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
          />
        </div>
        <CurrentBox />
      </div>
    </div>
  );
}

export default CallContainer;
