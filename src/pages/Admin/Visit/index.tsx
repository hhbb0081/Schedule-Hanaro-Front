import { useState } from 'react';
import InfoCard from '@/components/Admin/Infocard';
import Next from '../../../components/Admin/Next';
import WaitingNumber from '@/components/Admin/WaitingNum';

function VisitPage() {
  const [previousNumber, setPreviousNumber] = useState(951);
  const [currentNumber, setCurrentNumber] = useState(952);
  const [nextNumber, setNextNumber] = useState(953);

  const handleNextNumber = () => {
    setPreviousNumber(currentNumber);
    setCurrentNumber(nextNumber);
    setNextNumber(nextNumber + 1);
  };

  return (
    <div className='relative mx-auto w-[90%]'>
      <InfoCard waitingCount={2} estimatedTime={15} todayVisitors={72} />
      <div className='my-[2.5rem]'>
        <WaitingNumber
          previousNumber={previousNumber}
          currentNumber={currentNumber}
          nextNumber={nextNumber}
        />
      </div>

      <div className='absolute bottom-[-6.25rem] left-[15%] right-[15%]'>
        <Next onClick={handleNextNumber} />
      </div>
    </div>
  );
}

export default VisitPage;
