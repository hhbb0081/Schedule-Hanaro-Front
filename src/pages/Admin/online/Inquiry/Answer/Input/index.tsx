import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InquiryDetail } from '@/types/inquiryDetail';
import { mockInquiryData } from '@/mock/adminInquiry';
import CustomerInfo from '@/components/Admin/Inquiry/InputCustomerInfo'; // 고객정보 컴포넌트 경로
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { ActiveTab } from '@/types/inquiry';

export function AnswerInput() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [inquiries, setInquiries] = useState<InquiryDetail[]>(mockInquiryData);
  const [inquiryData, setInquiryData] = useState<InquiryDetail | null>(null);
  useEffect(() => {
    const inquiry = inquiries.find((item) => item.id === Number(id)); // ID로 데이터 찾기
    setInquiryData(inquiry || null);
  }, [id, inquiries]);

  if (!inquiryData) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!answer.trim()) {
      alert('답변을 입력하세요');
      return;
    }

    const updatedInquiries = inquiries.map((item) => {
      if (item.id === inquiryData.id) {
        return {
          ...item,
          reply_content: answer, // 답변 저장
          status: '답변완료' as ActiveTab, // 상태 변경
          end_time: Date.now(), // 현재 시간 저장
        };
      }
      return item;
    });

    setInquiries(updatedInquiries); // 상태 업데이트
    console.log('답변 등록 완료:', { id: inquiryData.id, answer });
    alert('답변이 등록되었습니다.');
    setAnswer('');
    navigate('/admin/inquiry'); // 등록 후 페이지 이동
  };

  const handleCancel = () => {
    navigate('/admin/inquiry');
  };

  return (
    <div className='mx-auto w-full max-w-[1300px]'>
      {/* 고객 정보 컴포넌트 */}
      <CustomerInfo
        className='mb-[1rem] w-full rounded-[1.875rem] bg-[#f9f9f9] p-[1.5rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]'
        name={inquiryData.name}
        phoneNumber={inquiryData.phone_number}
        start_time={format(
          new Date(inquiryData.start_time),
          'MM월 dd일 HH시 mm분'
        )}
      />

      {/* 하얀색 상자 내부 */}
      <form
        onSubmit={handleSubmit}
        className='h-[calc(100vh-14rem)] w-full rounded-[1.875rem] bg-white p-[1.5rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'
      >
        {/* 문의 정보 */}
        <div className='mb-[1rem] flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='text-left text-[1.5rem] font-bold text-[#464646]'>
              문의 내용
            </span>
            <Badge
              variant='lightSolid'
              className='rounded-full bg-teal-50 px-3 py-0.5 text-[1rem] font-normal text-teal-600'
            >
              {inquiryData.category}
            </Badge>
          </div>
        </div>
        <hr />
        <div className='mt-[1rem] flex items-center'>
          <p className='font-semibold text-gray-800'>
            {Array.isArray(inquiryData.tags) &&
              inquiryData.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant='lightSolid'
                  className={`mr-2 h-[1.8rem] w-auto justify-center rounded-full bg-gray-500 px-3 py-0.5 text-sm font-medium text-white`}
                >
                  {'#' + tag}
                </Badge>
              ))}
          </p>
        </div>
        <div className='overflow-wrap break-word mb-[1rem] mt-[1rem] flex flex-wrap whitespace-pre-wrap text-left text-[1.2rem] font-medium text-[#666666]'>
          {inquiryData.content}
        </div>

        {/* 답변 입력 */}
        <div className='mb-[0.5rem] mt-[2.6rem] text-left text-[1.5rem] font-bold text-[#464646]'>
          답변 입력
        </div>
        <Textarea
          className='mt-[1rem] h-[55%] w-full resize-none rounded-[1.875rem] border border-[#d9d9d9] p-[1rem] text-[1.2rem]'
          placeholder='답변을 입력하세요...'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          aria-label='답변 입력'
        />
        <div className='mt-[1rem] flex justify-end'>
          <Button
            className='inline-flex h-[3rem] w-[12rem] items-center justify-center gap-[0.625rem] rounded-[1.25rem] bg-white px-[3.8125rem] py-[0.625rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:bg-[#F8F8F8]'
            onClick={handleCancel}
            type='button'
          >
            <div className="font-['Inter'] text-[1.2rem] font-bold text-[#464646]">
              취소
            </div>
          </Button>
          <Button
            type='submit'
            className='ml-[1rem] inline-flex h-[3rem] w-[12rem] items-center justify-center gap-[0.625rem] rounded-[1.25rem] bg-[#464646] px-[3.8125rem] py-[0.625rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)] hover:bg-[#343434]'
          >
            <div className="font-['Inter'] text-[1.2rem] font-bold text-white">
              등록
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
}
