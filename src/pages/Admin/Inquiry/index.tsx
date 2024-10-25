import { AnswerInput } from '@/components/Admin/AnswerInput';

import ReplyState from '@/components/Admin/ReplyState';

function InquiryPage() {
  return (
    <>
      <div className='flex items-start justify-center py-14'>
        <ReplyState />
      </div>
      <div>
        <AnswerInput />
      </div>
    </>
  );
}

export default InquiryPage;
