import InquiryList from '@/components/Admin/Inquiry/InquiryList';
import ReplyState from '@/components/Admin/Inquiry/ReplyState';
import { useState } from 'react';
// import InquiryList from '@/components/Admin/Inquiry/InquiryList';

function InquiryPage() {
  const [activeTab, setActiveTab] = useState<'답변대기' | '답변완료'>('답변대기');

  return (
    <>
      {/* ReplyState 컴포넌트에 activeTab과 setActiveTab 전달 */}
      <ReplyState activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* InquiryList 컴포넌트에 activeTab 전달 */}
      <InquiryList activeTab={activeTab} />
    </>
  );
}

export default InquiryPage;
