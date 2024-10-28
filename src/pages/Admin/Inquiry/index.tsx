import FilterAndSearch from '@/components/Admin/Inquiry/FilterAndSearch';
// import InquiryList from '@/components/Admin/Inquiry/InquiryList';
import ReplyState from '@/components/Admin/ReplyState';

function InquiryPage() {
  return (
    <>
      <div className='flex items-start justify-center py-14'>
        <ReplyState />
      </div>
      <div className='flex items-start justify-center py-14'>
        <FilterAndSearch />
      </div>
    </>
  );
}

export default InquiryPage;
