import '@/index.css';
import { useState } from 'react';
import CallList from '@/components/Reservation/CallList';
import { ChangeToggle } from '@/components/Reservation/ChangeToggle';
import { callListData } from '@/mock/mockReservationCall';
import { ReactComponent as RefreshIcon } from '@/assets/icons/reservation/refresh.svg';

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

  const refreshButtonClick = () => {
    // 추후 새로고침 기능 추가
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
            {callListData.map((call, index) => (
              <CallList
                key={index}
                callconsultationType={call.callconsultationType}
                consultationDate={call.consultationDate}
                consultationTime={call.consultationTime}
                callNumber={call.callNumber}
                timerText={call.timerText}
              />
            ))}
          </div>
          <div className='mb-[1rem] mt-[6rem] flex justify-end'>
            <button
              onClick={refreshButtonClick}
              className='flex h-[4rem] w-[4rem] items-center justify-center sm:h-[3rem] sm:w-[3rem] lg:h-[5rem] lg:w-[5rem]'
            >
              <RefreshIcon className='h-full w-full' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
