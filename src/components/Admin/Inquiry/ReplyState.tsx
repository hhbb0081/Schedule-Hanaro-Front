import React, { useState } from 'react';

function ReplyState() {
  const [activeTab, setActiveTab] = useState<'답변대기' | '답변완료'>(
    '답변대기'
  );

  return (
    <div
      className='relative flex w-full max-w-md rounded-full bg-white p-1'
      style={{
        boxShadow:
          '0px -2px 15px rgba(0, 0, 0, 0.15), 0px 6px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* 이동하는 배경 */}
      <div
        className={`absolute -bottom-0 -left-0.5 h-16 w-[54%] rounded-full bg-gray-600 transition-transform duration-300 ease-in-out ${
          activeTab === '답변완료' ? 'translate-x-[86%]' : 'translate-x-0'
        }`}
      ></div>

      {/* 답변대기 버튼 */}
      <button
        onClick={() => setActiveTab('답변대기')}
        className={`relative z-10 flex-1 py-4 text-sm font-medium transition-colors duration-300 ${
          activeTab === '답변대기' ? 'text-white' : 'text-gray-400'
        }`}
      >
        답변대기
      </button>

      {/* 답변완료 버튼 */}
      <button
        onClick={() => setActiveTab('답변완료')}
        className={`relative z-10 flex-1 py-4 text-sm font-medium transition-colors duration-300 ${
          activeTab === '답변완료' ? 'text-white' : 'text-gray-400'
        }`}
      >
        답변완료
      </button>
    </div>
  );
}

export default ReplyState;
