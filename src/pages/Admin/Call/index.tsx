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

    const filtered = mockCallInquiryData.filter((inquiry) => {
      // 기간 조건
      const matchesDate =
        (!startDate || new Date(inquiry.call_date) >= startDate) &&
        (!endDate || new Date(inquiry.call_date) <= endDate);

      // 카테고리 조건
      const matchesCategory =
        category === '전체' || inquiry.category === category;

      // 키워드 조건
      const matchesKeyword =
        !keyword ||
        inquiry.inquiry_content.includes(keyword) ||
        inquiry.tags.some((tag) => tag.includes(keyword)) ||
        inquiry.category.includes(keyword) ||
        inquiry.name.includes(keyword) ||
        (inquiry.banker_reply_content &&
          inquiry.banker_reply_content.includes(keyword)) ||
        (inquiry.recommended_reply_content &&
          inquiry.recommended_reply_content.includes(keyword));

      return matchesDate && matchesCategory && matchesKeyword;
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
    </div>
  );
}

export default CallPage;
