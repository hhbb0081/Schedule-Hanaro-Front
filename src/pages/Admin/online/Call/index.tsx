// 기존 CallPage

import ListOfCallInquiry from '@/components/Admin/Call/ListOfCallInquiry';
import SearchConditionSetting from '@/components/Admin/Call/SearchConditionSetting';
import { mockCallInquiryData } from '@/mock/adminCallInquiry';
import { useState } from 'react';

type SearchConditions = {
  startDate?: Date;
  endDate?: Date;
  category: string;
  keyword: string;
};

function CallPage() {
  const [numbers, setNumbers] = useState([
    952, 953, 954, 955, 956, 957, 958, 951,
  ]);
  const [angle, setAngle] = useState(0);
  const [displayNum, setDisplayNum] = useState([7, 0, 1]);
  const rotateAngle = 360 / 8;

  
  const handleNext = () => {
    setNumbers((prevNumbers) => {
      if (prevNumbers.length === 0) return prevNumbers;
      const lastNumber = prevNumbers[prevNumbers.length - 1];
      return [lastNumber, ...prevNumbers.slice(0, prevNumbers.length - 1)];
    });
    setNumbers((prevNumbers) => {
      return prevNumbers.map((num) => num + 1);
    });

    setFilteredData(filtered); // 필터링된 데이터 업데이트
  };

  // 초기화 실행
  const handleReset = () => {
    setSearchConditions({
      startDate: undefined,
      endDate: undefined,
      category: '전체',
      keyword: '',
    });
    setFilteredData(mockCallInquiryData); // 기본 데이터로 복원
  };
  return (
    <div className='mx-auto max-w-[1300px] px-4'>
      {/* 부모 컨테이너 */}
      <div className='mb-10 mt-6 flex w-full flex-col items-center'>
        <SearchConditionSetting
          searchConditions={searchConditions}
          setSearchConditions={setSearchConditions}
          onSearch={handleSearch}
          onReset={handleReset}
        />
      </div>
      <div className='w-full'>
        <h1 className='mb-4 w-full text-left text-xl font-extrabold text-black'>
          검색 목록
        </h1>
        <ListOfCallInquiry inquiries={filteredData} />
      </div>
      
    </>
  );
}

export default CallPage;
