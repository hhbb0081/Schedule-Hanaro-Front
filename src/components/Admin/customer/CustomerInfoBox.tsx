function CustomerInfoBox() {
  return (
    <div className='mb-5 flex w-full items-center rounded-[20px] py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]'>
      <div className='w-[50%] space-y-4 border-r-[1px] border-border px-16'>
        <div className='flex w-full items-center justify-between'>
          <span className='font-regular text-lightGrey'>고객명</span>
          <span className='font-regular'>강능요</span>
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className='font-regular text-lightGrey'>전화번호</span>
          <span>010-1111-2222</span>
        </div>
      </div>

      <div className='w-[50%] space-y-4 px-16'>
        <div className='flex w-full items-center justify-between'>
          <span className='font-regular text-lightGrey'>이메일</span>
          <span>asdf@naver.com</span>
        </div>
        <div className='flex w-full items-center justify-between'>
          <span className='font-regular text-lightGrey'>생년월일</span>
          <span>2000년 08월 21일</span>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfoBox;
