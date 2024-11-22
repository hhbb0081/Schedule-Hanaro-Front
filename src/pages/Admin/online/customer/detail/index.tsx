import CustomerInfoBox from '@/components/Admin/customer/CustomerInfoBox';
import CustomerInquiryList from '@/components/Admin/customer/CustomerInquiryList';

function AdminCustomerDetailPage() {
  return (
    <div className='mx-auto max-w-[1300px] space-y-16 text-left'>
      <div>
        <div className='my-5 flex items-center gap-3'>
          <h3 className='whitespace-nowrap text-lg font-bold text-[#666666]'>
            고객 정보
          </h3>
          <div className='h-[2px] w-full bg-[#666666]'></div>
        </div>
        <CustomerInfoBox />
      </div>

      <div>
        <div className='my-5 flex items-center gap-3'>
          <h3 className='whitespace-nowrap text-lg font-bold text-[#666666]'>
            문의 이력
          </h3>
          <div className='h-[2px] w-full bg-[#666666]'></div>
        </div>
        <CustomerInquiryList />
      </div>
    </div>
  );
}

export default AdminCustomerDetailPage;
