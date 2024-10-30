import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../ui/accordion';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import FilterAndSearch from './FilterAndSearch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InquiryDetail } from '@/types/inquiryDetail';
import { ActiveTab } from '@/types/inquiry';
import rightArrow from '../../../assets/icons/right_arrow.svg';

function InquiryList({
  activeTab,
  activeCategory,
  setActiveCategory,
  inquiries, // inquiries props 추가
}: {
  activeTab: ActiveTab; // ActiveTab 사용
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  inquiries: InquiryDetail[]; // inquiries 타입 정의
}) {
  const filteredInquiries = inquiries.filter(
    ({ status, category }) =>
      status === activeTab &&
      (activeCategory === '전체' || category === activeCategory)
  );

  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div
      className='font-inter mx-auto max-w-3xl rounded-lg border-gray-200 bg-white p-6 text-[1.25rem] font-bold leading-normal shadow-lg'
      style={{
        boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      }}
    >
      <div className='mb-4 flex items-center justify-between border-b pb-4'>
        <h2 className='text-lg font-semibold text-gray-800'>
          총 <span className='text-teal-600'>{filteredInquiries.length}</span>건
        </h2>
        <FilterAndSearch setActiveCategory={setActiveCategory} />
      </div>

      <Accordion type='single' collapsible>
        {filteredInquiries.map(
          ({ id, title, status, category, time, content }, index) => (
            <AccordionItem key={id} value={String(id)}>
              <div className='flex items-center justify-between py-4'>
                <div className='flex items-center space-x-2'>
                  <span className='font-medium text-gray-700'>{index + 1}</span>
                  <span className='font-semibold text-gray-800'>
                    {title.length <= 15
                      ? title
                      : `${title.substring(0, 15)}...`}
                  </span>
                  <Badge
                    variant='lightSolid'
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      status === '답변대기'
                        ? 'bg-teal-50 text-teal-600'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {category}
                  </Badge>
                </div>
                {status === '답변완료' ? (
                  <span
                    className='cursor-pointer text-sm font-semibold text-gray-500'
                    onClick={() => navigate('/admin/inquiry/' + id)}
                  >
                    상세보기
                    <img
                      src={rightArrow}
                      alt='Go'
                      className='ml-0 inline-block'
                    />
                  </span>
                ) : (
                  <AccordionTrigger
                    className='flex items-center text-sm text-gray-500'
                    onClick={() =>
                      setExpandedItem(expandedItem === id ? null : id)
                    } // 아코디언 열고 닫기
                  >
                    {expandedItem === id ? '접기' : '펼쳐보기'}
                  </AccordionTrigger>
                )}
              </div>
              <AccordionContent>
                <div className='mt-2 rounded-md p-4 shadow-inner'>
                  <div className='mb-1 flex items-center justify-between'>
                    <p className='font-semibold text-gray-800'>{title}</p>
                    {status === '답변대기' && (
                      <Button
                        variant='default'
                        className='h-[2.4375rem] w-[7.5rem] rounded-full bg-main px-4 py-1 text-sm text-white'
                        onClick={() =>
                          navigate('/admin/inquiry/register/' + id)
                        }
                      >
                        답변하기
                      </Button>
                    )}
                  </div>
                  <p className='mb-2 text-left text-[0.75rem] text-gray-400'>
                    작성자 · {new Date(time).toLocaleString()} · {category}
                  </p>
                  <p className='text-left text-sm leading-relaxed text-gray-700'>
                    {content}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        )}
      </Accordion>
    </div>
  );
}

export default InquiryList;
