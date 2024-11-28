import React from 'react';

type InputCustomerInfoProps = {
  name: string;
  phoneNumber: string;
  start_time: string; // 상담 시간 추가
  className?: string; // 외부 스타일
};

function InputCustomerInfo({
  name,
  phoneNumber,
  start_time,
  className = '',
}: InputCustomerInfoProps) {
  return (
    <div
      className={`mx-auto mb-8 flex h-[8rem] w-full items-center rounded-[1rem] bg-white shadow ${className}`}
      style={{
        boxShadow:
          '0px -8px 18px rgba(0, 0, 0, 0.04), 0px 8px 12px rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className='mx-auto flex items-center justify-between font-medium text-gray-600'>
        {/* 고객명 */}
        <div className='mr-24 flex items-center'>
          <span className='font-inter text-[1.4rem] text-gray-400'>고객명</span>
          <span className='font-inter pl-16 text-[1.4rem] font-semibold text-gray-800'>
            {name}
          </span>
        </div>

        {/* 전화번호 */}
        <div className='flex items-center border-l border-r border-gray-200'>
          <span className='font-inter pl-24 text-[1.4rem] text-gray-400'>
            전화번호
          </span>
          <span className='font-inter pl-16 pr-24 text-[1.4rem] font-semibold text-gray-800'>
            {phoneNumber}
          </span>
        </div>

        {/* 상담시간 */}
        <div className='ml-24 flex items-center'>
          <span className='font-inter text-[1.4rem] text-gray-400'>
            문의시간
          </span>
          <span className='font-inter pl-16 text-[1.4rem] font-semibold text-gray-800'>
            {start_time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputCustomerInfo;
