import '@/index.css';
import { useState } from 'react';
import CallList from '@/components/Reservation/CallList';
import { ChangeToggle } from '@/components/Reservation/ChangeToggle';

export function ReservationCallPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('전화 상담 내역');

  const toggleCallList = () => {
    setIsOpen(!isOpen);
  };

  const selectTab = (tabName: string) => {
    setSelectedTab(tabName);
    setIsOpen(false);
  };

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex w-full flex-col'>
          <ChangeToggle
            isOpen={isOpen}
            onToggle={toggleCallList}
            selectedTab={selectedTab}
            onSelect={selectTab}
          />

          <div className='space-y-[1.5rem]'>
            <CallList
              consultationType='펀드'
              consultationDate='2024년 10월 8일'
              consultationTime='13:00'
              timerText='15분 후'
            />
            <CallList
              consultationType='예금'
              consultationDate='2024년 10월 10일'
              consultationTime='16:00'
              timerText='2분 후'
            />
          </div>
        </div>
      </div>
    </>
  );
}
