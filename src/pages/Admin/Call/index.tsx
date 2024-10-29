import { CustomerInfo } from '@/components/Admin/Customer';
import InfoCard from '@/components/Admin/Infocard';
import Next from '@/components/Admin/Next';
import WaitingNumber from '@/components/Admin/WaitingNum';
import { useState } from 'react';

function CallPage() {
  const [previousNumber, setPreviousNumber] = useState(951);
  const [currentNumber, setCurrentNumber] = useState(952);
  const [nextNumber, setNextNumber] = useState(953);

  const handleNextNumber = () => {
    setPreviousNumber(currentNumber);
    setCurrentNumber(nextNumber);
    setNextNumber(nextNumber + 1);
  };
  return (
    <>
      <WaitingNumber
        previousNumber={previousNumber}
        currentNumber={currentNumber}
        nextNumber={nextNumber}
      />
      <div className='flex items-start justify-center'>
        <CustomerInfo
          customerCount={952}
          name='김삼순'
          phoneNumber='010-7330-9731'
          birthDate='1977년 8월 24일'
          inquiryCount={3}
        />
        <div className='ml-[2rem]'>
          <InfoCard waitingCount={2} estimatedTime={15} />
          <div className='mt-[2rem]'>
            <Next onClick={handleNextNumber} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CallPage;
