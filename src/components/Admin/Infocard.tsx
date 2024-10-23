type InfoCardProps = {
  waitingCount: number;
  estimatedTime: number;
  todayVisitors: number;
};

type infoProps = {
  m1: string;
  m2: string;
  num: number;
};

export function Info({ m1, m2, num }: infoProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span
        className='text-sm font-semibold'
        style={{ color: '#666666', fontSize: '0.875rem' }}
      >
        {m1}
      </span>
      <div className='mt-2 text-2xl font-bold' style={{ fontSize: '1.5rem' }}>
        {num}
        {m2}
      </div>
    </div>
  );
}

export default function InfoCard({
  waitingCount,
  estimatedTime,
  todayVisitors,
}: InfoCardProps) {
  return (
    <div className='mx-auto w-11/12 rounded-lg border border-gray-300'>
      <div
        className='h-30 flex items-center justify-between'
        style={{ height: '100px' }}
      >
        <div className='flex flex-grow flex-col items-center'>
          <Info m1='현재 대기인수' m2='명' num={waitingCount} />
        </div>
        <div
          style={{ height: '60%', width: '1px', backgroundColor: '#d9d9d9' }}
        ></div>
        <div className='flex flex-grow flex-col items-center'>
          <Info m1='예상 소요시간' m2='분' num={estimatedTime} />
        </div>
        <div
          style={{ height: '60%', width: '1px', backgroundColor: '#d9d9d9' }}
        ></div>
        <div className='flex flex-grow flex-col items-center'>
          <Info m1='오늘 방문객' m2='명' num={todayVisitors} />
        </div>
      </div>
    </div>
  );
}
