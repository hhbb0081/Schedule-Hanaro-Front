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

const InquiryCard = ({
  stats: { inquiry, today, transferred, reserved, total },
  icon: Icon,
}: InquiryCardProps) => {
  const data = [
    { title: '오늘 접수 건수', count: today },
    { title: '이번주 접수 건수', count: transferred },
    { title: '이번달 접수 건수', count: reserved },
    { title: '총 접수 건수', count: total },
  ];

  return (
    <div className='flex h-[7rem] items-center space-x-4 rounded-[1.875rem] border bg-white p-[1rem]'>
      <div className='flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'>
        <Icon className='h-[80%] w-[80%]' />
      </div>

      <div className='flex flex-col'>
        <span className='text-[1.25rem] font-black text-[#666666]'>
          {inquiry}
        </span>
      </div>

      <div className='flex flex-grow items-center justify-around'>
        {data.map(({ title, count }, index) => (
          <div className='flex flex-col items-center text-center' key={index}>
            <div className='text-[.875rem] font-black text-[#666666]'>
              {title}
            </div>
            <div className='flex items-center font-black text-[#666666]'>
              <div className='text-[1.875rem]'>{count}</div>
              <div className='text-[1.25rem]'>건</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiryCard;
