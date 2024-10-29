import { useEffect, useState } from 'react';
// import './YourStyles.css';

type WaitingNumberProps = {
  numbers: number[];
  angle: number;
};

function WaitingNumber({ numbers, angle }: WaitingNumberProps) {
  const [isRow] = useState(false);
  const rotateAngle = 360 / 8;
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
  }, [rotateAngle]);

  return (
    <div className='mt-10 flex w-full flex-col items-center rounded-lg bg-white pb-[4.25rem]'>
      <div className='mb-[-5rem] flex w-full max-w-xl justify-between px-2 md:px-8'>
        <span className='text-sm text-gray-400 md:text-lg'>이전 대기번호</span>
        <span className='pt-2 text-sm text-gray-400 md:text-lg'>
          현재 대기번호
        </span>
        <span className='text-sm text-gray-400 md:text-lg'>다음 대기번호</span>
      </div>
<<<<<<< HEAD
      <div className='relative w-full max-w-xl'>
        <div
          className='scene relative mx-auto h-[140px] w-[210px]'
          style={{
            perspective: '1200px',
          }}
        >
          <div
            className='carousel transform-style-preserve-3d absolute h-full w-full transition-transform duration-500'
            style={{
              transform: `rotateY(${-angle}deg)`,
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
=======

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
>>>>>>> 5dfb285 ([Feat]🥚다음 번호 호출)
      </div>
    </div>
  );
}

export default WaitingNumber;
