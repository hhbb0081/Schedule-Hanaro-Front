import React from 'react';
import { ReactComponent as TimerButton } from '@/assets/icons/reservaion/timer.svg';

interface ConsultationCardProps {
  consultationType: string; // 상담 종류
  consultationDate: string; // 상담 일시
  consultationTime: string; // 상담 시간
  timerText: string; // 남은 시간
}

const CallList: React.FC<ConsultationCardProps> = ({
  consultationType,
  consultationDate,
  consultationTime,
  timerText,
}) => {
  return (
    <div className='rounded-[0.9375rem] bg-white pb-[2.1875rem] pl-[1.1875rem] pr-[1.4688rem] pt-[1.75rem] drop-shadow'>
      <div className='flex items-center justify-between'>
        <div className='inline-flex gap-[1rem]'>
          <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
            상담종류
          </div>
          <div className='text-[1rem] font-normal'>{consultationType}</div>
        </div>
        <div className='ml-auto'>
          <div className='flex items-center text-[1rem] font-bold text-[#2b2b2b]'>
            <TimerButton className='mr-[0.0625rem] h-10 w-10 sm:h-[0.9rem] sm:w-[0.9rem] md:h-[0.9rem] md:w-[0.9rem] lg:h-[1rem] lg:w-[1rem]' />
            {timerText}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='inline-flex gap-[1rem]'>
          <div className='text-[1rem] font-semibold text-[#2b2b2b]'>
            상담일시
          </div>
          <div className='text-[1rem] font-normal text-[#2b2b2b]'>
            {consultationDate}
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
            {consultationTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallList;
