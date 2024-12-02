import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function CustomerInquiryList() {
  const [activeCategory, setActiveCategory] = useState('전화문의');
  return (
    <div className='w-full rounded-[20px] px-5 py-8 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]'>
      <div className='w-full border-b-[2px] border-border pb-[1px]'>
        <span
          className={cn(
            'cursor-pointer px-3 py-1',
            activeCategory === '전화문의'
              ? 'border-b-[2px] border-lightText text-lightText'
              : 'border-none text-border'
          )}
          onClick={() => setActiveCategory('전화문의')}
        >
          전화 문의
        </span>
        <span
          className={cn(
            'cursor-pointer px-3 py-1',
            activeCategory === '1:1문의'
              ? 'border-b-[2px] border-lightText text-lightText'
              : 'border-none text-border'
          )}
          onClick={() => setActiveCategory('1:1문의')}
        >
          1:1 문의
        </span>
      </div>

      {activeCategory === '전화문의' && (
        <div className='rounded bg-white'>
          <div className='flex w-full items-center justify-between border-b-[1px] border-border px-3 py-5'>
            <div className='space-x-2'>
              <span>1</span>
              <span>안녕하세요. 문의드립니다...</span>
              <Badge variant='outline'>예금</Badge>
            </div>
            <span className='text-[0.75rem]'>상세보기</span>
          </div>
          <div className='flex w-full items-center justify-between border-b-[1px] border-border px-3 py-5'>
            <div className='space-x-2'>
              <span>2</span>
              <span>안녕하세요. 문의드립니다...</span>
              <Badge variant='outline'>대출</Badge>
            </div>
            <span className='text-[0.75rem]'>상세보기</span>
          </div>
        </div>
      )}

      {activeCategory === '1:1문의' && (
        <div className='rounded bg-white'>
          <div className='flex w-full items-center justify-between border-b-[1px] border-border px-3 py-5'>
            <div className='space-x-2'>
              <span>1</span>
              <span>안녕하세요. 문의드립니다...</span>
              <Badge variant='outline'>예금</Badge>
            </div>
            <span className='text-[0.75rem]'>상세보기</span>
          </div>
          <div className='flex w-full items-center justify-between border-b-[1px] border-border px-3 py-5'>
            <div className='space-x-2'>
              <span>2</span>
              <span>안녕하세요. 문의드립니다...</span>
              <Badge variant='outline'>대출</Badge>
            </div>
            <span className='text-[0.75rem]'>상세보기</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerInquiryList;
