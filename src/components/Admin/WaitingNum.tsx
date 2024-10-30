import React, { useEffect, useState } from 'react';
import './YourStyles.css'; // CSS 파일 임포트

const WaitingNumber: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [isRow] = useState(false);
  const [numbers, setNumbers] = useState([
    952, 953, 954, 955, 956, 957, 958, 951,
  ]);

  const rotateAngle = 360 / 8; // 카드 개수에 따라 회전 각도 설정
  const radian = (rotateAngle / 2) * (Math.PI / 180);
  const colTz = Math.round(210 / 2 / Math.tan(radian));
  const rowTz = Math.round(140 / 2 / Math.tan(radian));

  useEffect(() => {
    const carouselCards = document.querySelectorAll('.carousel-card');
    carouselCards.forEach((el, idx) => {
      (el as HTMLElement).style.transform = isRow
        ? `rotateX(${rotateAngle * idx}deg) translateZ(${rowTz}px)`
        : `rotateY(${rotateAngle * idx}deg) translateZ(${colTz}px)`;
    });
  }, [isRow, rotateAngle]);

  const handleNext = () => {
    setNumbers((prevNumbers) => {
      if (prevNumbers.length === 0) return prevNumbers;
      const lastNumber = prevNumbers[prevNumbers.length - 1];
      return [lastNumber, ...prevNumbers.slice(0, prevNumbers.length - 1)];
    });
    setNumbers((prevNumbers) => {
      return prevNumbers.map((num) => num + 1);
    });
    setAngle((prev) => prev + rotateAngle);
  };

  useEffect(() => {
    console.log(...numbers);
  }, [numbers]);

  return (
    <div className='mt-10 flex w-full flex-col items-center rounded-lg bg-white pb-[4.25rem]'>
      <div className='mb-[-5rem] flex w-full max-w-xl justify-between px-2 md:px-8'>
        <span className='text-sm text-gray-400 md:text-lg'>이전 대기번호</span>
        <span className='pt-2 text-sm text-gray-400 md:text-lg'>
          현재 대기번호
        </span>
        <span className='text-sm text-gray-400 md:text-lg'>다음 대기번호</span>
      </div>
      <div className='relative w-full max-w-xl'>
        <div
          className='scene relative mx-auto h-[140px] w-[210px]'
          style={{
            perspective: '1200px',
            perspectiveOrigin: isRow ? 'center' : 'center -60%',
          }}
        >
          <div
            className='carousel transform-style-preserve-3d absolute h-full w-full transition-transform duration-500'
            style={{
              transform: isRow
                ? `rotateX(${-angle}deg)`
                : `rotateY(${-angle}deg)`,
            }}
          >
            {numbers.map((number, idx) => (
              <div
                key={idx}
                className='carousel-card absolute flex h-[120px] w-[190px] flex-col items-center justify-center bg-white opacity-90 transition-all duration-500'
              >
                <span className='text-sm text-gray-400 md:text-lg'></span>
                <span className='text-4xl font-bold text-gray-600 md:text-6xl'>
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-4 mt-6 space-x-4'>
        <button
          className='bg-aliceblue rounded-lg px-4 py-2 text-lg font-bold'
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default WaitingNumber;
