import '@/index.css';
import { useState } from 'react';
import { ChangeToggle } from '@/components/Reservation/ChangeToggle';
import { inquiryListData } from '@/mock/mockReservationInquiry';
import { ReactComponent as DropButton } from '@/assets/icons/reservation/minidown.svg';
import InquiryList from '@/components/Reservation/InquiryList';

export function ReservationInquiryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('1:1 상담 내역');
  const [selectedStatus, setSelectedStatus] = useState('대기 중인 상담'); // 상담 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 상태

  const toggleInquiryList = () => {
    setIsOpen(!isOpen);
  };

  const selectTab = (tabName: string) => {
    setSelectedTab(tabName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열기/닫기
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status); // 상태 변경
    setIsDropdownOpen(false); // 선택 후 드롭다운 닫기
  };

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex w-full flex-col'>
          <div className='flex items-center justify-between'>
            <ChangeToggle
              isOpen={isOpen}
              onToggle={toggleInquiryList}
              selectedTab={selectedTab}
              onSelect={selectTab}
            />
            <div className='relative pb-[1.25rem]'>
              <button
                className={`justify-between] flex items-center ${
                  selectedStatus === '대기 중인 상담'
                    ? 'text-[#666666]'
                    : 'text-[#666666]'
                } text-right text-[1rem] font-bold`}
                onClick={toggleDropdown}
              >
                {selectedStatus}
                <div className='pl-[0.25rem]'>
                  <DropButton />
                </div>
              </button>
              {isDropdownOpen && (
                <ul className='absolute right-0 z-50 w-[10rem]'>
                  {selectedStatus === '대기 중인 상담' ? (
                    <li
                      className='cursor-pointer whitespace-nowrap pl-[3.1rem] text-[#b3b3b3]'
                      onClick={() => handleStatusChange('완료된 상담')}
                    >
                      완료된 상담
                    </li>
                  ) : (
                    <li
                      className='cursor-pointer whitespace-nowrap pl-[2.1rem] text-[#b3b3b3]'
                      onClick={() => handleStatusChange('대기 중인 상담')}
                    >
                      대기 중인 상담
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>

          <div className='space-y-[1.5rem]'>
            {inquiryListData.map((call, index) => (
              <InquiryList
                key={index}
                inquiryNumber={call.inquiryNumber}
                inquiryconsultationType={call.inquiryconsultationType}
                consultationTitle={call.consultationTitle}
                consultationContents={call.consultationContents}
                responseStatus={call.responseStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
