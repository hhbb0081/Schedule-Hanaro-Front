import CustomerContainer from '@/components/Admin/customer/CustomerContainer';

function AdminCustomerPage() {
  return (
    <div className='mx-auto max-w-[1300px] space-y-5 text-left'>
      <span className='text-[1.125rem] font-bold'>고객 목록</span>
      <CustomerContainer />
    </div>
  );
}

export default AdminCustomerPage;
