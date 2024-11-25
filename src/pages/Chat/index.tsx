import Nav from '@/components/Nav/Nav';
import Loading from '@/assets/images/loading.gif';
import { useRef, useState } from 'react';
import Feedback from '@/components/Chat/Feedback';

const Header = () => (
  <header className='w-full py-4 text-center'>
    <h1 className='text-2xl font-bold text-[#274C5B]'>AI 답변</h1>
  </header>
);

const ChatPage = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (textareaRef.current) {
      const inputValue = textareaRef.current.value.trim();
      if (!inputValue) {
        alert('질문 내용을 입력해주세요.');
        return;
      }
      setIsLoading(true);
      setAnswers([]);
      setTimeout(() => {
        setAnswers([
          '대학생을 위한 통장이 있나요?',
          '직장인을 위한 통장이 있나요?',
        ]);
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className='flex flex-col items-center bg-[#F8FCFB]'>
      <Header />
      {!isLoading && answers.length === 0 && (
        <div className='flex w-full flex-col items-center justify-between gap-6 px-4'>
          <div className='h-80 w-80'>
            <img
              src='/svg/santa.svg' // 산타 이미지
              className='h-full w-full object-contain'
              alt='Santa'
            />
          </div>
          <div className='flex flex-col text-center text-lg font-bold'>
            <span>예나님이 작성하신 문의 내용을 바탕으로</span>
            <span>상담 전, AI의 맞춤답변을 제공해드려요</span>
          </div>
          <div className='flex w-full flex-col items-center'>
            <div className='relative w-[80%]'>
              <textarea
                ref={textareaRef}
                className='w-full resize-none overflow-hidden rounded-3xl border border-[#008485] p-4 pr-12 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#008485]'
                placeholder='질문 내용을 입력하세요'
                onInput={handleInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={1}
              />
              <img
                src='src/assets/images/arrowAI.png'
                alt='Send'
                className='absolute bottom-5 right-4 h-7 w-7 cursor-pointer object-contain'
                onClick={handleSend}
              />
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div className='flex h-[calc(100vh-10rem)] flex-col items-center justify-center'>
          <img
            className='h-32 w-32 object-contain'
            src={Loading}
            alt='Loading'
          />
          <div className='text-center text-lg font-bold'>
            AI가 추천 답변을 생성하고 있어요!
          </div>
        </div>
      )}
      {!isLoading && answers.length > 0 && (
        <div className='flex min-h-screen w-full flex-col justify-between pb-[12rem]'>
          <div className='mt-6 flex w-full flex-col items-center gap-4 px-4'>
            {answers.map((answer, index) => (
              <div
                key={index}
                className='w-full rounded-md bg-gray-100 p-4 shadow-sm'
              >
                {answer}
              </div>
            ))}
          </div>
          <Feedback />
        </div>
      )}

      <Nav />
    </div>
  );
};

export default ChatPage;
