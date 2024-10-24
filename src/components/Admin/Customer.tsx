type CustomerInfoProps = {
  customerCount: number;
  name: string;
  phoneNumber: string;
  birthDate: string;
  inquiryCount: number;
};

export const CustomerInfo = ({
  customerCount,
  name,
  phoneNumber,
  birthDate,
  inquiryCount,
}: CustomerInfoProps) => {
  return (
    <div className='flex h-[18rem] w-[50%] flex-col justify-between rounded-lg bg-white p-[3rem] drop-shadow-xl'>
      <div className='flex items-center justify-between'>
        <span className='text-[.875rem] font-extrabold text-[#464646]'>
          현재 고객 정보
        </span>
        <span className='text-[1.375rem] font-extrabold text-[#008485]'>
          {customerCount}
        </span>
      </div>
      <hr />
      <div className='flex justify-between text-[.8125rem] font-medium text-[#666666]'>
        <span>이름</span>
        <span className='font-bold'>{name}</span>
      </div>
      <div className='flex justify-between text-[.8125rem] font-medium text-[#666666]'>
        <span>전화번호</span>
        <span className='font-bold'>{phoneNumber}</span>
      </div>
      <div className='flex justify-between text-[.8125rem] font-medium text-[#666666]'>
        <span>생년월일</span>
        <span className='font-bold'>{birthDate}</span>
      </div>
      <div className='flex justify-between text-[.8125rem] font-medium text-[#666666]'>
        <span>전화 문의 이력</span>
        <span className='font-bold'>{inquiryCount}회</span>
      </div>
    </div>
  );
};

type CustomerInfoProps = {
  customerCount: number;
  name: string;
  phoneNumber: string;
  birthDate: string;
  inquiryCount: number;
};

export const CustomerInfo = ({
  customerCount,
  name,
  phoneNumber,
  birthDate,
  inquiryCount,
}: CustomerInfoProps) => {
  return (
    <div className='flex h-[18rem] w-[50%] flex-col justify-between rounded-lg bg-white p-[3rem] shadow-lg'>
      <div className='flex items-center justify-between'>
        <span className='text-[0.875rem] font-extrabold text-[#464646]'>
          현재 고객 정보
        </span>
        <span className='text-[1.375rem] font-extrabold text-[#008485]'>
          {customerCount}
        </span>
      </div>
      <hr />
      <div className='flex justify-between text-[0.8125rem] font-medium text-[#666666]'>
        <span>이름</span>
        <span className='font-bold'>{name}</span>
      </div>
      <div className='flex justify-between text-[0.8125rem] font-medium text-[#666666]'>
        <span>전화번호</span>
        <span className='font-bold'>{phoneNumber}</span>
      </div>
      <div className='flex justify-between text-[0.8125rem] font-medium text-[#666666]'>
        <span>생년월일</span>
        <span className='font-bold'>{birthDate}</span>
      </div>
      <div className='flex justify-between text-[0.8125rem] font-medium text-[#666666]'>
        <span>전화 문의 이력</span>
        <span className='font-bold'>{inquiryCount}회</span>
      </div>
    </div>
  );
};
