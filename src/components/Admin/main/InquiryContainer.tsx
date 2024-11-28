import { mockInquiryData } from '@/mock/adminInquiry';
import { useState } from 'react';
import InquiryList from '../Inquiry/InquiryList';

function InquiryContainer() {
  const [activeTab] = useState<'답변대기' | '답변완료'>('답변대기');
  const [activeCategory, setActiveCategory] = useState<string>('전체');

  return (
    <div className='mx-auto w-full space-y-5 text-left'>
      <span className='text-2xl font-bold'>1:1 문의</span>
      <div className='flex w-full items-center gap-5'>
        <InquiryList
          activeTab={activeTab}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          inquiries={mockInquiryData}
        />
      </div>
    </div>
  );
}

export default InquiryContainer;
