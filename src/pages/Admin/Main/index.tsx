export function AdminMainPage() {
  return (
    // <div className='text-6xl'>
    //   <div className='text-center'>AdminMain!</div>
    // </div>
    <div className='flex justify-center py-4'>
      <div className='w-full max-w-4xl rounded-lg bg-white p-4 shadow-md'>
        <div className='flex items-center justify-between border-b pb-4'>
          <div className='text-center'>
            <h2 className='text-lg font-semibold'>현재 대기인수</h2>
            <p className='text-2xl font-bold'>3명</p>
          </div>
          <div className='text-center'>
            <h2 className='text-lg font-semibold'>예상 소요시간</h2>
            <p className='text-2xl font-bold'>15분</p>
          </div>
          <div className='text-center'>
            <h2 className='text-lg font-semibold'>오늘 방문객</h2>
            <p className='text-2xl font-bold'>72명</p>
          </div>
        </div>
      </div>
    </div>
  );
}
