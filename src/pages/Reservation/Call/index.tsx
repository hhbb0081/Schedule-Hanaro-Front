import '@/index.css';
import { useState } from 'react';
import CallList from '@/components/Reservation/CallList';
import { ChangeToggle } from '@/components/Reservation/ChangeToggle';
import { callListData } from '@/mock/mockReservationObject';

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
            {callListData.map((call, index) => (
              <CallList
                key={index}
                consultationType={call.consultationType}
                consultationDate={call.consultationDate}
                consultationTime={call.consultationTime}
                timerText={call.timerText}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
