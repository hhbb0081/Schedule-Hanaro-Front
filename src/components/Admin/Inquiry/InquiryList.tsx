import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../ui/accordion';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
// 아직 작업중
function InquiryList() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className='mx-auto max-w-3xl rounded-lg bg-white p-4 shadow-md'>
      <h2 className='mb-4 text-lg font-semibold'>총 12건</h2>

      <Accordion type='single' collapsible>
        {/* Item 1 */}
        <AccordionItem value='item-1'>
          <div className='flex items-center justify-between py-2'>
            <div className='flex items-center space-x-2'>
              <span className='font-medium'>1</span>
              <AccordionTrigger className='text-gray-800'>
                안녕하세요 문의드리려고합니다...
              </AccordionTrigger>
              <Badge
                variant='outline'
                className='border-main bg-teal-100 text-main'
              >
                답변대기
              </Badge>
            </div>
            <button
              className='text-sm text-gray-500'
              onClick={() => toggleItem('item-1')}
            >
              {expandedItem === 'item-1' ? '접기' : '펼쳐보기'}
            </button>
          </div>
          <AccordionContent>
            <div className='rounded-md bg-gray-50 p-4'>
              <p className='mb-2 font-semibold text-gray-800'>
                안녕하세요 문의드리려고합니다 문의드려도 될까요?
              </p>
              <p className='mb-4 text-sm text-gray-600'>
                이규호 · 12분 전 · 예금
              </p>
              <p className='text-sm text-gray-700'>
                안녕하세요 좀 궁금한게 있는데 예금이 궁금한지는 잘 모르겠어서
                생각좀 해보고 다시 문의드릴게요 감사합니다. 반갑습니다. 다시
                연락해서 문의드리겠습니다...
              </p>
              <div className='mt-4 w- flex justify-center'>
                <Button>답변하기</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Item 2 */}
        <AccordionItem value='item-2'>
          <div className='flex items-center justify-between py-2'>
            <div className='flex items-center space-x-2'>
              <span className='font-medium'>2</span>
              <AccordionTrigger className='text-gray-800'>
                안녕하세요 좀 궁금한게 있는...
              </AccordionTrigger>
              <Badge
                variant='outline'
                className='border-main bg-teal-100 text-main'
              >
                답변대기
              </Badge>
            </div>
            <button
              className='text-sm text-gray-500'
              onClick={() => toggleItem('item-2')}
            >
              {expandedItem === 'item-2' ? '접기' : '펼쳐보기'}
            </button>
          </div>
          <AccordionContent>
            <div className='rounded-md bg-gray-50 p-4'>
              <p className='mb-2 font-semibold text-gray-800'>
                안녕하세요 좀 궁금한게 있습니다...
              </p>
              <p className='mb-4 text-sm text-gray-600'>
                김영희 · 5분 전 · 펀드
              </p>
              <p className='text-sm text-gray-700'>
                안녕하세요, 펀드 관련해서 질문이 있어서 문의드립니다. 자세한
                내용은 다음과 같습니다...
              </p>
              <div className='mt-4 flex justify-end'>
                <Button>답변하기</Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default InquiryList;
