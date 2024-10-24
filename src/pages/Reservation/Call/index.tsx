import '@/index.css';
import Header from '@/components/Header/Header';
import TimerIcon from '@/assets/icons/reservaion/timer.svg';
import { useState } from 'react';

export function ReservationCallPage() {
  const [ActiveTab, ChangeTab] = useState<'visit' | 'call'>('call');

  return (
    <>
      <Header />
      <div className='p-[1rem]'>
        <div className='mb-4 flex flex-col items-center'>
          <div className='flex w-full justify-center'>
            <button
              className={`mx-6 text-center ${ActiveTab === 'visit' ? 'font-bold text-black' : 'text-[#A7A7A7]'} ml-[4rem] mr-auto sm:pl-10 md:pl-8`}
              onClick={() => ChangeTab('visit')}
            >
              방문 상담
            </button>
            <button
              className={`mx-6 text-center ${ActiveTab === 'call' ? 'font-bold text-black' : 'text-[#A7A7A7]'} ml-auto mr-[2.5rem] sm:pr-6 md:pr-8`}
              onClick={() => ChangeTab('call')}
            >
              전화 / 1:1 상담
            </button>
          </div>

          <div className='relative mt-2 h-[2px] w-full bg-gray-200'>
            {/* 선택된 탭의 검은색 밑줄 */}
            <div
              className={`absolute top-0 h-[2px] bg-black transition-all duration-300 ${
                ActiveTab === 'visit' ? 'left-0 w-1/2' : 'right-0 w-1/2'
              }`}
            />
          </div>
        </div>

        <div className='mb-6 text-left text-2xl font-bold text-black'>
          전화 상담 내역
        </div>

        <div className='space-y-4'>
          <div className='rounded-[0.9375rem] border-black bg-white p-[1rem] shadow'>
            <div className='flex items-center justify-between'>
              <div className='mt-6 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담종류
                </div>
                <div className='text-[1rem] font-normal'>펀드</div>
              </div>
              <div className='ml-auto'>
                <div className='flex items-center text-[1rem] font-bold text-black'>
                  <img
                    src={TimerIcon}
                    alt='Timer Icon'
                    className='mr-[0.0625rem]'
                  />
                  15분 후
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='mt-4 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담일시
                </div>
                <div className='text-[1rem] font-normal text-black'>
                  2024년 10월 8일
                </div>
              </div>
              <div className='ml-auto'>
                <div className='text-[2rem] font-bold text-black'>11</div>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='mt-4 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담시간
                </div>
                <div className='text-[1rem] font-normal text-black'>13:00</div>
              </div>
            </div>
          </div>

          <div className='rounded-[0.9375rem] border-black bg-white p-[1rem] shadow'>
            <div className='flex items-center justify-between'>
              <div className='mt-6 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담종류
                </div>
                <div className='text-[1rem] font-normal'>예금</div>
              </div>
              <div className='ml-auto'>
                <div className='flex items-center text-[1rem] font-bold text-black'>
                  <img
                    src={TimerIcon}
                    alt='Timer Icon'
                    className='mr-[0.0625rem]'
                  />
                  2분 후
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='mt-4 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담일시
                </div>
                <div className='text-[1rem] font-normal text-black'>
                  2024년 10월 10일
                </div>
              </div>
              <div className='ml-auto'>
                <div className='text-[2rem] font-bold text-black'>2</div>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='mt-4 inline-flex gap-10'>
                <div className='text-[1rem] font-semibold text-black'>
                  상담시간
                </div>
                <div className='text-[1rem] font-normal text-black'>16:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
