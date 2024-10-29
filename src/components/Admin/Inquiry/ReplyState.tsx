import React from 'react';
import { ActiveTab } from '@/types/inquiry';

const tabs: ActiveTab[] = ['답변대기', '답변완료'];

function ReplyState({
  activeTab,
  setActiveTab,
}: {
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}) {
  return (
    <div
      className='relative flex h-[3rem] w-full max-w-[29.3125rem] rounded-full bg-white p-1'
      style={{
        boxShadow:
          '0px -2px 15px rgba(0, 0, 0, 0.15), 0px 6px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* 이동하는 배경 */}
      <div
        className={`absolute -left-0.5 -top-1 h-[3.9375rem] w-[15.5rem] rounded-full bg-gray-600 transition-transform duration-300 ease-in-out ${
          activeTab === '답변완료' ? 'translate-x-[92%]' : 'translate-x-0'
        }`}
      ></div>

      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`font-inter relative z-10 flex-1 py-2 text-xl font-bold leading-normal transition-colors duration-300 ${
            activeTab === tab ? 'text-white' : 'text-gray-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default ReplyState;
