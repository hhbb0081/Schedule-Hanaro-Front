import { Button } from '@/components/ui/button';

function CurrentBox() {
  return (
    <div className='flex items-center justify-center bg-gray-100'>
      <div className='relative w-full max-w-md rounded-lg bg-white p-4 shadow-md'>
        <div className='absolute inset-0 top-1/2 -z-10 mx-auto h-3/4 w-3/4 -translate-y-1/2 transform rounded-lg bg-gray-200' />

        <div className='mb-6 text-center text-gray-700'>
          <p className='text-sm font-semibold'>현재 순번 고객</p>
          <h1 className='text-4xl font-bold'>123번</h1>
        </div>

        <div className='mb-6 rounded-lg bg-gray-100 p-4'>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>고객명</span>
            <span>문해빈</span>
          </p>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>이메일</span>
            <span>asdf@naver.com</span>
          </p>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>전화번호</span>
            <span>010-1111-2222</span>
          </p>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>생년월일</span>
            <span>1970년 08월 11일</span>
          </p>
        </div>

        <p className='mb-2 text-sm font-bold text-main'>
          <span className='mr-3 text-black'>상담정보</span>
          23분째 진행 중
        </p>
        <div className='mb-6 rounded-lg bg-gray-100 p-4'>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>예정 시작 시간</span>
            <span>12:00</span>
          </p>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>실제 시작 시간</span>
            <span>12:13</span>
          </p>
        </div>

        <p className='mb-2 text-sm font-bold text-main'>
          <span className='mr-3 text-black'>상담이력</span>
        </p>
        <div className='mb-6 rounded-lg bg-gray-100 p-4'>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>전화문의</span>
            <span>2회</span>
          </p>
          <p className='flex items-center justify-between text-sm'>
            <span className='font-semibold'>1:1 문의</span>
            <span>1회</span>
          </p>
        </div>

        <Button className='hover <span>g-gray-700 w-full rounded-lg bg-gray-800 py-2 text-white'>
          상담 완료
        </Button>
      </div>
    </div>
  );
}

export default CurrentBox;
