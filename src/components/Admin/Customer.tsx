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
  const customerDetails = [
    { label: '이름', value: name },
    { label: '전화번호', value: phoneNumber },
    { label: '생년월일', value: birthDate },
    { label: '전화 문의 이력', value: `${inquiryCount}회` },
  ];

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
      {customerDetails.map((detail, index) => (
        <div
          key={index}
          className='flex justify-between text-[.8125rem] font-medium text-[#666666]'
        >
          <span>{detail.label}</span>
          <span className='font-bold'>{detail.value}</span>
        </div>
      ))}
    </div>
  );
};
