import React from 'react';

type InfoCardProps = {
  waitingCount: number;
  estimatedTime: number;
  todayVisitors?: number;
};

type infoProps = {
  description: string;
  suffix: string;
  count: number;
};

export function Info({ description, suffix, count }: infoProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='text-[1rem] font-semibold text-[#666666]'>
        {description}
      </span>
      <div className='mt-[0.31rem] text-[1.5rem] font-bold'>
        {count}
        {suffix}
      </div>
    </div>
  );
}

export default function InfoCard({
  waitingCount,
  estimatedTime,
  todayVisitors,
}: InfoCardProps) {
  const infoItems = [
    { description: '현재 대기인수', suffix: '명', count: waitingCount },
    { description: '예상 소요시간', suffix: '분', count: estimatedTime },
    ...(todayVisitors !== undefined
      ? [{ description: '오늘 방문객', suffix: '명', count: todayVisitors }]
      : []),
  ];

  const isTwoItems = infoItems.length === 2;

  return (
    <div className='flex justify-center'>
      <div
        className={`mx-auto ${isTwoItems ? 'h-[11.5rem] w-[80%]' : 'h-auto w-[80%]'} rounded-[1.25rem] border border-[#d9d9d9] p-[1rem]`}
      >
        <div
          className={`flex ${isTwoItems ? 'flex-col gap-[0.75rem]' : 'flex-row'} items-center justify-evenly`}
        >
          {infoItems.map((item, index) => (
            <React.Fragment key={index}>
              <Info
                description={item.description}
                suffix={item.suffix}
                count={item.count}
              />
              {index < infoItems.length - 1 && (
                <div
                  className={`${isTwoItems ? 'h-[0.0625rem] w-[60%]' : 'h-[5rem] w-[0.0625rem]'} bg-[#d9d9d9]`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
