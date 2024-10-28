import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../ui/accordion';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import FilterAndSearch from './FilterAndSearch';

function InquiryList({ activeTab }: { activeTab: '답변대기' | '답변완료' }) {
  // 예시 데이터
  const inquiries = [
    { id: 'item-1', title: '안녕하세요 문의드리려고합니다...', status: '답변대기' },
    { id: 'item-2', title: '안녕하세요 좀 궁금한게 있는...', status: '답변대기' },
    { id: 'item-3', title: '안녕하세요, 예금 관련 문의드립니다.', status: '답변완료' },
  ];

  // activeTab에 따라 필터링된 목록
  const filteredInquiries = inquiries.filter(
    (inquiry) => inquiry.status === activeTab
  );

  return (
    <div
      className='mx-auto max-w-3xl rounded-lg border-gray-200 bg-white p-6 shadow-lg'
      style={{
        boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      {/* Header with Filter and Search */}
      <div className='mb-4 flex items-center justify-between border-b pb-4'>
        <h2 className='text-lg font-semibold text-gray-800'>
          총 <span className='text-teal-600'>{filteredInquiries.length}</span>건
        </h2>
        <FilterAndSearch />
      </div>

      {/* Accordion List */}
      <Accordion type='single' collapsible>
        {filteredInquiries.map((inquiry) => (
          <AccordionItem key={inquiry.id} value={inquiry.id}>
            <div className='flex items-center justify-between py-4'>
              <div className='flex items-center space-x-2'>
                <span className='font-medium text-gray-700'>
                  {inquiry.id.split('-')[1]}
                </span>
                <span className='font-semibold text-gray-800'>
                  {inquiry.title}
                </span>
                <Badge
                  variant='lightSolid'
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    inquiry.status === '답변대기'
                      ? 'bg-teal-50 text-teal-600'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {inquiry.status}
                </Badge>
              </div>
              <AccordionTrigger className='flex items-center text-sm text-gray-500'>
                <span className='[data-state="open"]:hidden'>펼쳐보기</span>
                <span className='[data-state="closed"]:hidden'>접기</span>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <div className='mt-2 rounded-md p-4 shadow-inner'>
                <div className='mb-1 flex items-center justify-between'>
                  <p className='font-semibold text-gray-800'>
                    {inquiry.title}
                  </p>
                  {inquiry.status === '답변대기' && (
                    <Button
                      variant='default'
                      className='h-[2.4375rem] w-[7.5rem] rounded-full bg-main px-4 py-1 text-sm text-white'
                    >
                      답변하기
                    </Button>
                  )}
                </div>
                <p className='mb-2 text-left text-[0.75rem] text-gray-400'>
                  작성자 · 시간 · 카테고리
                </p>
                <p className='text-left text-sm leading-relaxed text-gray-700'>
                  문의 내용에 대한 상세 설명이 여기에 표시됩니다.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default InquiryList;
