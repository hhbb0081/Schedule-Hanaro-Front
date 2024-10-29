import { useState, useEffect } from 'react';

type WaitingNum = {
  previousNumber: number;
  currentNumber: number;
  nextNumber: number;
};

function WaitingNumber({
  previousNumber,
  currentNumber,
  nextNumber,
}: WaitingNum) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentNumber]);

  return (
    <div className='mx-auto flex w-full flex-col items-center rounded-lg bg-white pb-[4.25rem]'>
      {/* 레이블 */}
      <div className='mb-4 flex w-full max-w-[75%] justify-between px-[0.5rem] md:px-[2rem]'>
        <span className='text-sm text-gray-400 md:text-lg'>이전 대기번호</span>
        <span className='pt-10 text-sm text-gray-400 md:text-lg'>
          현재 대기번호
        </span>
        <span className='text-sm text-gray-400 md:text-lg'>다음 대기번호</span>
      </div>

      {/* 대기번호 */}
      <div className='flex w-full max-w-[75%] items-end justify-between px-2 md:px-8'>
        <span
          className={`text-4xl font-bold text-gray-600 transition-opacity duration-300 md:text-6xl ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {previousNumber}
        </span>
        <span
          className={`relative top-10 text-6xl font-extrabold text-black transition-opacity duration-300 md:text-8xl ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {currentNumber}
        </span>
        <span
          className={`text-4xl font-bold text-gray-600 transition-opacity duration-300 md:text-6xl ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {nextNumber}
        </span>
      </div>
    </div>
  );
}

export default WaitingNumber;
