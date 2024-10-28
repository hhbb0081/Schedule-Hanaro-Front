import '@/index.css';
import Header from '@/components/Header/ReservationHeader';
import TimerIcon from '@/assets/icons/reservaion/timer.svg';
import { useState } from 'react';

export function ReservationCallPage() {
  const [ActiveTab, ChangeTab] = useState<'visit' | 'call'>('call');

  return (
    <>
      <Header />
      <div className='flex items-center justify-center'>
        <div className='flex w-[90%] flex-col'>
          <div className='mb-[1.75rem] flex flex-col items-center'>
            <div className='mt-[2.1875rem] flex w-full justify-center'>
              <button
                className={`text-center transition-all duration-300 ease-in-out ${
                  ActiveTab === 'visit'
                    ? 'scale-105 font-bold text-[#2b2b2b]'
                    : 'scale-100 text-[#a6a6a6]'
                } ml-[4rem] mr-auto md:ml-[5.5rem] lg:ml-[5.5rem]`}
                onClick={() => ChangeTab('visit')}
              >
                방문 상담
              </button>
              <button
                className={`text-center transition-all duration-300 ease-in-out ${
                  ActiveTab === 'call'
                    ? 'scale-105 font-bold text-[#2b2b2b]'
                    : 'scale-100 text-[#a6a6a6]'
                } ml-auto mr-[2.5rem] md:mr-[4rem] lg:mr-[4rem]`}
                onClick={() => ChangeTab('call')}
              >
                전화 / 1:1 상담
              </button>
            </div>

            <div className='relative mt-[0.5rem] h-[.125rem] w-full bg-[#d9d9d9]'>
              {/* 선택된 탭의 검은색 밑줄 */}
              <div
                className={`absolute h-[.125rem] transform bg-[#464646] transition-all duration-700 ease-in-out ${
                  ActiveTab === 'visit'
                    ? 'left-0 w-1/2 scale-x-100'
                    : 'right-0 w-1/2 scale-x-100'
                }`}
                style={{
                  transformOrigin:
                    ActiveTab === 'visit' ? 'left center' : 'right center',
                }}
              />
            </div>
          </div>

          <div className='mb-[1.6875rem] text-left text-[1.5rem] font-bold text-[#2b2b2b]'>
            전화 상담 내역
          </div>

          <div className='space-y-[1.5rem]'>
            <div className='rounded-[0.9375rem] bg-white pb-[2.1875rem] pl-[1.1875rem] pr-[1.4688rem] pt-[1.75rem] drop-shadow'>
              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
                    상담종류
                  </div>
                  <div className='text-[1rem] font-normal'>펀드</div>
                </div>
                <div className='ml-auto'>
                  <div className='flex items-center text-[1rem] font-bold text-[#2b2b2b]'>
                    <img
                      src={TimerIcon}
                      alt='Timer Icon'
                      className='mr-[0.0625rem] sm:h-[0.9rem] sm:w-[0.9rem] md:h-[0.9rem] md:w-[0.9rem] lg:h-[1rem] lg:w-[1rem]'
                    />
                    15분 후
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
                    상담일시
                  </div>
                  <div className='text-[1rem] font-normal text-[#2b2b2b]'>
                    2024년 10월 8일
                  </div>
                </div>
                <div className='ml-auto'>
                  <div className='text-[2rem] font-bold text-[#2b2b2b]'>11</div>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
                    상담시간
                  </div>
                  <div className='text-[1rem] font-normal text-[#2b2b2b]'>
                    13:00
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-[0.9375rem] bg-white pb-[2.1875rem] pl-[1.1875rem] pr-[1.4688rem] pt-[1.75rem] drop-shadow'>
              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-black'>
                    상담종류
                  </div>
                  <div className='text-[1rem] font-normal'>예금</div>
                </div>
                <div className='ml-auto'>
                  <div className='flex items-center text-[1rem] font-bold text-[#2b2b2b]'>
                    <img
                      src={TimerIcon}
                      alt='Timer Icon'
                      className='mr-[0.0625rem] sm:h-[0.9rem] sm:w-[0.9rem] md:h-[0.9rem] md:w-[0.9rem] lg:h-[1rem] lg:w-[1rem]'
                    />
                    2분 후
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
                    상담일시
                  </div>
                  <div className='text-[1rem] font-normal text-[#2b2b2b]'>
                    2024년 10월 10일
                  </div>
                </div>
                <div className='ml-auto'>
                  <div className='text-[2rem] font-bold text-[#2b2b2b]'>2</div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='inline-flex gap-[1rem]'>
                  <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
                    상담시간
                  </div>
                  <div className='text-[1rem] font-normal text-[#2b2b2b]'>
                    16:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
