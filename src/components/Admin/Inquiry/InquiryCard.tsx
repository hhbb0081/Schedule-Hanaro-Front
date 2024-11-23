interface Stats {
  inquiry: string;
  today: number;
  transferred: number;
  reserved: number;
  total: number;
}

interface InquiryCardProps {
  stats: Stats;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const InquiryCard = ({ stats, icon: Icon }: InquiryCardProps) => {
  const data = [
    { title: '오늘 접수 건수', count: stats.today },
    { title: '전송된 건수', count: stats.transferred },
    { title: '예약된 건수', count: stats.reserved },
    { title: '총 접수 건수', count: stats.total },
  ];

  return (
    <div className='flex items-center space-x-4 rounded-[1.875rem] border bg-white p-[1rem]'>
      {/* Icon */}
      <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <Icon className='h-[80%] w-[65%]' />
      </div>

      {/* Content */}
      <div className='flex flex-col'>
        <span className='text-[1.25rem] font-extrabold text-[#666666]'>
          {stats.inquiry}
        </span>
      </div>

      {/* Inquiry Details */}
      <div className='flex flex-grow items-center justify-around'>
        {data.map((item, index) => (
          <div className='flex flex-col items-center text-center' key={index}>
            <div className='text-[.875rem] font-extrabold text-[#666666]'>
              {item.title}
            </div>
            <div className='mt-[.625rem] flex items-center font-extrabold text-[#666666]'>
              <div className='text-[1.875rem]'>{item.count}</div>
              <div className='text-[1.25rem]'>건</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiryCard;
