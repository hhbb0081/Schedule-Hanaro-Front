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
  const [filteredData, setFilteredData] = useState(mockCallInquiryData); // 필터링된 데이터 상태
  const [searchConditions, setSearchConditions] = useState<SearchConditions>({
    startDate: undefined,
    endDate: undefined,
    category: '전체',
    keyword: '',
  });

  // 검색 실행
  const handleSearch = (conditions: SearchConditions) => {
    const { startDate, endDate, category, keyword } = conditions;

    const filtered = mockCallInquiryData.filter(
      ({
        call_date,
        category: inquiryCategory,
        inquiry_content,
        tags,
        name,
        banker_reply_content,
        recommended_reply_content,
      }) => {
        const matchesDate =
          (!startDate || new Date(call_date) >= startDate) &&
          (!endDate || new Date(call_date) <= endDate);

        const matchesCategory =
          category === '전체' || inquiryCategory === category;

        const matchesKeyword =
          !keyword ||
          inquiry_content.includes(keyword) ||
          tags.some((tag) => tag.includes(keyword)) ||
          inquiryCategory.includes(keyword) ||
          name.includes(keyword) ||
          (banker_reply_content && banker_reply_content.includes(keyword)) ||
          (recommended_reply_content &&
            recommended_reply_content.includes(keyword));

        return matchesDate && matchesCategory && matchesKeyword;
      }
    );

    setFilteredData(filtered); // 필터링된 데이터 업데이트
  };

  const handleInputChange = <K extends keyof SearchConditions>(
    field: K,
    value: SearchConditions[K]
  ) => {
    setSearchConditions((prev) => ({
      ...prev,
      [field]: value,
    }));
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
          onInputChange={handleInputChange}
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
    </div>
  );
}

export default CallPage;
