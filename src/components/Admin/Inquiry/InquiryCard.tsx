import { Icon } from "lucide-react";

interface Stats {
  inquiry:String;
  today: number;
  transferred: number;
  reserved: number;
  total: number;
}

interface InquiryCardProps {
  stats: Stats; 
  icon: React.FC<React.SVGProps<SVGSVGElement>>; 
}

const InquiryCard = ({ stats ,icon:Icon} : InquiryCardProps) => {
  const data = [
    { title: "오늘 접수 건수", count: stats.today },
    { title: "전송된 건수", count: stats.transferred },
    { title: "예약된 건수", count: stats.reserved },
    { title: "총 접수 건수", count: stats.total },
  ];

  return (
    <div className="flex items-center p-[1rem] bg-white border rounded-[1.875rem]  space-x-4 w-[60%]">
      {/* Icon */}
      <div className="flex items-center justify-center w-[3rem] h-[3rem] bg-white rounded-full shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]">
        <Icon className="h-[80%] w-[65%]" /> 
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-[#666666] font-extrabold text-[1.25rem]">{stats.inquiry}</span>
      </div>

      {/* Inquiry Details */}
      <div className="flex flex-grow justify-around items-center">
      {data.map((item, index) => (
                <div className="text-center flex flex-col items-center" key={index}>
                    <div className="font-extrabold text-[.875rem] text-[#666666]">{item.title}</div>
                    <div className='text-[#666666] font-extrabold flex items-center mt-[.625rem]'>
                        <div className="text-[1.875rem]">{item.count}</div>
                        <div className='text-[1.25rem]'>건</div>
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default InquiryCard;
