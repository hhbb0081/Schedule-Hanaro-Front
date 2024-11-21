import React from 'react';

interface InquiryComponentProps {
  title: string;
  todayCount: number;
  yesterdayCount: number;
  monthCount: number;
  totalCount: number;
  icon: string;
}

const InquiryComponent: React.FC<InquiryComponentProps> = ({
  title,
  todayCount,
  yesterdayCount,
  monthCount,
  totalCount,
  icon,
}) => {
  return (
    <div className='flex items-center rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
      <div className='mr-4 text-3xl'>{icon}</div>
      <div>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p>
          오늘 접수 건수: <span className='font-bold'>{todayCount}건</span>
        </p>
        <p>
          어제 접수 건수: <span className='font-bold'>{yesterdayCount}건</span>
        </p>
        <p>
          이번달 접수 건수: <span className='font-bold'>{monthCount}건</span>
        </p>
        <p>
          총 접수 건수: <span className='font-bold'>{totalCount}건</span>
        </p>
      </div>
    </div>
  );
};

export default InquiryComponent;
