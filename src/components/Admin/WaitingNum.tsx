import { useEffect, useState } from 'react';
import CategoryButton from './CategoryButton';
// import './YourStyles.css';

type WaitingNumberProps = {
  numbers: number[];
  angle: number;
  displayNum: number[];
};

function WaitingNumber({ numbers, angle, displayNum }: WaitingNumberProps) {
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

  useEffect(() => {
    console.log(...numbers);
  }, [numbers]);

  return (
    <div className='mt-10 flex w-full flex-col items-center rounded-lg bg-white pb-[4.25rem]'>
      <div className='mb-[-5rem] flex w-full max-w-xl justify-between px-2 md:px-8'>
        <span className='text-[1.5625rem] font-extrabold text-[#d9d9d9] md:text-lg'>
          이전 대기번호
        </span>
        <span className='pt-2 text-[1.5625rem] font-extrabold text-[#d9d9d9] md:text-lg'>
          현재 대기번호
        </span>
        <span className='text-[1.5625rem] font-extrabold text-[#d9d9d9] md:text-lg'>
          다음 대기번호
        </span>
      </div>
      <div className='relative w-full max-w-xl pl-[0.8rem]'>
        <div
          className='scene relative mx-auto h-[8.75rem] w-[13.125rem]'
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
                className='carousel-card absolute flex h-[7.5rem] w-[11.875rem] flex-col items-center justify-center bg-white opacity-90 transition-all duration-500'
              >
                {/* <span className='text-sm text-gray-400 md:text-lg'></span> */}
                <span
                  className={`text-4xl font-bold text-[#000000] md:text-6xl ${displayNum.includes(idx) ? '' : 'hidden'}`}
                >
                  {number}
                </span>
                <div className={`${displayNum.includes(idx) ? '' : 'hidden'}`}>
                  <CategoryButton category={'예금'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingNumber;
