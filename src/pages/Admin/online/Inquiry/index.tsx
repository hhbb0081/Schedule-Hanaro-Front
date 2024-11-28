import InquiryList from '@/components/Admin/Inquiry/InquiryList';
import ReplyState from '@/components/Admin/Inquiry/ReplyState';
import { mockInquiryData } from '@/mock/adminInquiry';
import { ActiveTab } from '@/types/inquiry';
import { useState } from 'react';

function InquiryPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('답변대기');
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>(''); // 검색어 상태 추가

  return (
    <div className='mx-auto max-w-[1300px] px-4'>
      {' '}
      {/* 부모 컨테이너 */}
      <div className='mb-10 mt-6 flex w-full flex-col items-center'>
        <ReplyState activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className='w-full'>
        <InquiryList
          activeTab={activeTab}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery} // 검색어 전달
          setSearchQuery={setSearchQuery} // 검색 상태 업데이트 함수 전달
          inquiries={mockInquiryData} // mockInquiryData 전달
        />
      </div>
    </div>
  );
}

export default InquiryPage;
